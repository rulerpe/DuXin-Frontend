import axios, { AxiosError, AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { showNotification } from './notificationService';
import {
  User,
  GetUserResponse,
  CreateTempUserResponse,
  OtpVerifPayload,
  OtpVerifyResponse,
  CreateUserResponse,
  UpdateTempUserResponse,
} from '../types';

const BASE_URL = `https://${import.meta.env.VITE_API_URL}`;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.withCredentials = true;

// api.interceptors.response.use(response => response, error => {
//   const message = error.response?.data?.message || 'An unknown error occurred';
//   showNotification(message, 'error');
//   return Promise.reject(error);
// });
interface ErrorResponse {
  message?: string;
}

const handleAxiosError = (error: AxiosError) => {
  let errorMessage = '';
  if (error.response) {
    if (error.response.status !== 401) {
      errorMessage =
        (error.response.data as ErrorResponse).message ||
        'Something went wrong. Please try again later.';
    }
  } else if (error.request) {
    errorMessage =
      'No response from server. Please check your network connection.';
  } else {
    errorMessage =
      'An error occurred while making the request. Please try again.';
  }
  console.log('before if', errorMessage);
  if (errorMessage) {
    console.log('errormessag', errorMessage);
    showNotification({ message: errorMessage, type: 'error' });
  }
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    handleAxiosError(error);
    console.log('response error', error);
    return Promise.reject(error);
  },
);
// get current user based on token in httponly cookie
export const fetchCurrentUser = async (): Promise<GetUserResponse> => {
  const response = await api.get<GetUserResponse>(`/user_data`);
  return response.data;
};

// Start creating new user with phone number,
// trigger back send OTP code to phone number.
export const createUser = async (
  phoneNumber: string,
  language: string,
): Promise<CreateUserResponse> => {
  const createUserUrl = `/users`;
  const payload = {
    user: { phone_number: phoneNumber, language: language },
  };
  const response = await api.post<CreateUserResponse>(createUserUrl, payload);
  return response.data;
};

// Verify OTP code to finish creating user
export const otpVerify = async (
  phoneNumber: string,
  otpCode: string,
  tempUser: User | null,
): Promise<OtpVerifyResponse> => {
  const otpVerifyUrl = `/otp/verify`;
  const payload: OtpVerifPayload = {
    phone_number: phoneNumber,
    otp_code: otpCode,
  };
  if (tempUser?.user_type === 'TEMP') {
    payload.temp_uuid = tempUser.phone_number;
  }
  const response = await api.post<OtpVerifyResponse>(otpVerifyUrl, payload);

  return response.data;
};

export const createTempUser = async (
  language: string,
): Promise<CreateTempUserResponse> => {
  const tempUserUrl = `/temp_user`;
  const tempUserId = uuidv4();
  const payload = {
    user: { phone_number: tempUserId, language: language },
  };
  const response = await api.post<CreateTempUserResponse>(tempUserUrl, payload);
  return response.data;
};

export const updateUserLanguage = async (
  language: string,
): Promise<UpdateTempUserResponse> => {
  const updateUserUrl = `/user_data`;
  const payload = {
    user: { language: language },
  };
  const response = await api.put<UpdateTempUserResponse>(
    updateUserUrl,
    payload,
  );
  return response.data;
};

export const getSummary = async (): Promise<any> => {
  const summaryUrl = `${BASE_URL}/summary_translations`;
  const response = await api.get<any>(summaryUrl);
  return response.data;
};

export const uploadImage = async (payload: FormData): Promise<any> => {
  const uploadImageUrl = `${BASE_URL}/upload_image`;
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const response = await api.post<any>(uploadImageUrl, payload, config);
  return response.data;
};

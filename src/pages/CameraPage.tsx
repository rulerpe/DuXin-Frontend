import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faImages,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/CameraPage.module.css';
import { uploadImage } from '../services/apiService';
import usePrepareImage from '../hooks/usePrepareImage';
import PageWrapper from '../components/PageWrapper';

const CameraPage = () => {
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const [isWebcamInitializing, setIsWebcamInitializing] =
    useState<boolean>(true);
  const [uploading, setUploading] = useState(false);
  const [unpreparedImage, setUnpreparedImage] = useState<string | File>('');

  const { preparedImage } = usePrepareImage(unpreparedImage);

  useEffect(() => {
    const upload = async () => {
      if (preparedImage) {
        try {
          setUploading(true);
          const uploadImageResponse = await uploadImage(preparedImage);
          navigate('/summary');
        } catch (error) {
          console.error(error);
        } finally {
          setUploading(false);
        }
      }
    };
    upload();
  }, [preparedImage]);

  const capture = async (): Promise<void> => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      await handleImageUpload(imageSrc);
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      await handleImageUpload(file);
    }
  };

  const handleImageUpload = (imageSrc: string | File) => {
    setUnpreparedImage(imageSrc);
  };

  const handleUserMedia = () => {
    setIsWebcamInitializing(false);
  };

  return (
    <PageWrapper>
      {isWebcamInitializing && (
        <div className={styles.webcamLoading}>
          <FontAwesomeIcon icon={faSpinner} spin={true} size="3x" />
        </div>
      )}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        onUserMedia={handleUserMedia}
        videoConstraints={{ facingMode: 'environment' }}
        className={styles.webcam}
      />
      {!isWebcamInitializing && (
        <div className={styles.buttonContainer}>
          {uploading ? (
            <div className={styles.spinnerContainer}>
              <FontAwesomeIcon icon={faSpinner} spin={true} size="3x" />
            </div>
          ) : (
            <>
              <div className={styles.fillerButton}></div>
              <button onClick={capture} className={styles.captureButton}>
                <FontAwesomeIcon icon={faCamera} size="3x" />
              </button>

              <label className={styles.fileUploadButton}>
                <FontAwesomeIcon icon={faImages} size="2x" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={styles.fileInput}
                />
              </label>
            </>
          )}
        </div>
      )}
    </PageWrapper>
  );
};

export default CameraPage;

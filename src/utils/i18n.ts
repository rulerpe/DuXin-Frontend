import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/enTranslations.json';
import esTranslation from './locales/esTranslations.json';
import frTranslation from './locales/frTranslations.json';
import zhTranslation from './locales/zhTranslations.json';

// const resources = {
//   en: {
//     translation: {
//       appName: 'Duxin',
//       welcomText: 'Take a picture of a letter, see summary and translation',
//       navigateToCamera: 'Take a picture',
//       capturePhoto: 'Capture photo',
//       selectPhoto: 'Select photo',
//       extracting_text: 'Extracting text',
//       summarizing_text: 'Summarizing text',
//       translating_text: 'Translating text',
//       summary_translation_completed: 'Summary translation completed',
//       summaryTitle: 'Title',
//       summaryBody: 'Summary',
//       summaryAction: 'Suggested action',
//       signinPhoneNumber:
//         'Enter phone number to sign in, a one time pass code will send to the phone',
//       submitPhoneNumber: 'Submit',
//       invalidPhoneNumber: 'Invalid phone number',
//       submitPhoneNumberFailed: 'Phone number submit failed',
//       signinOTP: 'Enter pass code',
//       submitOTP: 'Verify',
//       invalidOTP: 'Invalid pass code',
//       submitOTPFailed: 'Pass code submit failed',
//       serverError: 'Something went wrong. Please try again later.',
//       networkError:
//         'No response from server. Please check your network connection.',
//       requestError:
//         'An error occurred while making the request. Please try again.',
//       loginSuccess: 'Login successful.',
//       phoneNumberLabel: 'Phone Number',
//       logoutButton: 'Logout',
//       logoutSuccess: 'Logout successful.',
//       summaryHistory: 'History',
//       moreSummaryButton: 'Load more',
//       deleteSummaryButton: 'Delete',
//       summaryGeneratePageError:
//         'There is an error processing the image, please try again.',
//     },
//   },
//   zh: {
//     translation: {
//       appName: '读信',
//       welcomText: '总结并翻译拍摄的信件',
//       navigateToCamera: '拍照',
//       capturePhoto: '拍照',
//       selectPhoto: '文件',
//       extracting_text: '正在读取信件',
//       summarizing_text: '正在总结信件',
//       translating_text: '正在翻译信件',
//       summary_translation_completed: '完成',
//       summaryTitle: '标题',
//       summaryBody: '概要',
//       summaryAction: '建议行动',
//       signinPhoneNumber: '请输入手机号码登陆，验证码会用短信发送至你的手机号码',
//       submitPhoneNumber: '发送',
//       invalidPhoneNumber: '手机号码无效，请重新输入',
//       submitPhoneNumberFailed: '发送失败',
//       signinOTP: '请输入验证码',
//       submitOTP: '验证',
//       invalidOTP: '验证码无效，请重新输入',
//       submitOTPFailed: '发送失败',
//       serverError: '发生错误，请稍后再试',
//       networkError: '服务器无响应。请检查您的网络连接',
//       requestError: '请求时发生错误，请再试一次',
//       loginSuccess: '成功登陆',
//       phoneNumberLabel: '电话号码',
//       logoutButton: '登出',
//       logoutSuccess: '成功登出',
//       summaryHistory: '历史',
//       moreSummaryButton: '更多',
//       deleteSummaryButton: '删除',
//       summaryGeneratePageError: '出现错误，请再试一次',
//     },
//   },
//   es: {
//     translation: {
//       appName: 'Duxin',
//       welcomText: 'Toma una foto de una carta, ve el resumen y la traducción',
//       navigateToCamera: 'Tomar una foto',
//       capturePhoto: 'Capturar foto',
//       selectPhoto: 'Seleccionar foto',
//       extracting_text: 'Extrayendo texto',
//       summarizing_text: 'Resumiendo texto',
//       translating_text: 'Traduciendo texto',
//       summary_translation_completed: 'Resumen y traducción completados',
//       summaryTitle: 'Título',
//       summaryBody: 'Resumen',
//       summaryAction: 'Acción sugerida',
//       signinPhoneNumber:
//         'Ingrese el número de teléfono para iniciar sesión, se enviará un código de acceso único al teléfono',
//       submitPhoneNumber: 'Enviar',
//       invalidPhoneNumber: 'Número de teléfono inválido',
//       submitPhoneNumberFailed: 'Error al enviar el número de teléfono',
//       signinOTP: 'Ingrese el código de acceso',
//       submitOTP: 'Verificar',
//       invalidOTP: 'Código de acceso inválido',
//       submitOTPFailed: 'Error al enviar el código de acceso',
//       serverError: 'Algo salió mal. Por favor, inténtelo de nuevo más tarde.',
//       networkError:
//         'Sin respuesta del servidor. Por favor, compruebe su conexión a la red.',
//       requestError:
//         'Se produjo un error al realizar la solicitud. Por favor, inténtelo de nuevo.',
//       loginSuccess: 'Inicio de sesión exitoso.',
//       phoneNumberLabel: 'Número de Teléfono',
//       logoutButton: 'Cerrar sesión',
//       logoutSuccess: 'Cierre de sesión exitoso.',
//       summaryHistory: 'Historial',
//       moreSummaryButton: 'Cargar más',
//       deleteSummaryButton: 'Eliminar',
//       summaryGeneratePageError:
//         'Hay un error al procesar la imagen, por favor, inténtelo de nuevo.',
//     },
//   },
//   fr: {
//     translation: {
//       appName: 'Duxin',
//       welcomText:
//         "Prenez une photo d'une lettre, voyez le résumé et la traduction",
//       navigateToCamera: 'Prendre une photo',
//       capturePhoto: 'Capturer la photo',
//       selectPhoto: 'Sélectionner la photo',
//       extracting_text: 'Extraction du texte',
//       summarizing_text: 'Résumant le texte',
//       translating_text: 'Traduction du texte',
//       summary_translation_completed: 'Résumé et traduction terminés',
//       summaryTitle: 'Titre',
//       summaryBody: 'Résumé',
//       summaryAction: 'Action suggérée',
//       signinPhoneNumber:
//         "Entrez le numéro de téléphone pour vous connecter, un code d'accès unique sera envoyé au téléphone",
//       submitPhoneNumber: 'Soumettre',
//       invalidPhoneNumber: 'Numéro de téléphone invalide',
//       submitPhoneNumberFailed: "Échec de l'envoi du numéro de téléphone",
//       signinOTP: "Entrez le code d'accès",
//       submitOTP: 'Vérifier',
//       invalidOTP: "Code d'accès invalide",
//       submitOTPFailed: "Échec de l'envoi du code d'accès",
//       serverError: 'Quelque chose a mal tourné. Veuillez réessayer plus tard.',
//       networkError:
//         'Pas de réponse du serveur. Veuillez vérifier votre connexion réseau.',
//       requestError:
//         "Une erreur s'est produite lors de la demande. Veuillez réessayer.",
//       loginSuccess: 'Connexion réussie.',
//       phoneNumberLabel: 'Numéro de Téléphone',
//       logoutButton: 'Se déconnecter',
//       logoutSuccess: 'Déconnexion réussie.',
//       summaryHistory: 'Historique',
//       moreSummaryButton: 'Charger plus',
//       deleteSummaryButton: 'Supprimer',
//       summaryGeneratePageError:
//         "Il y a une erreur dans le traitement de l'image, veuillez réessayer.",
//     },
//   },
// };

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  zh: {
    translation: zhTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

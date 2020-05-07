import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          adding: 'Adding',
          add: 'Add',
          sending: 'Sending',
          send: 'Send',
          enterChannelName: 'Enter channel name',
          enterMessage: 'Enter message',
          rename: 'Rename',
          renameChannel: 'Rename channel',
          cancel: 'Cancel',
          remove: 'Remove',
          removing: 'Removing',
          removeChannel: 'Remove channel',
          areYouSure: 'Are you sure?',
          errorMessage: 'Something went wrong',
        },
      },
      ru: {
        translation: {
          adding: 'Добавление',
          add: 'Добавить',
          sending: 'Отправка',
          send: 'Отправить',
          enterChannelName: 'Введите имя канала',
          enterMessage: 'Введите имя канала',
          rename: 'Переименовать',
          renameChannel: 'Переименовать канал',
          cancel: 'Отменить',
          remove: 'Удалить',
          removing: 'Удаление',
          removeChannel: 'Удалить канал',
          areYouSure: 'Вы уверены?',
          errorMessage: 'Что-то пошло не так',
        },
      },
    },
    fallbackLng: 'en',
  });

export default i18n;

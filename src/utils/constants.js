export const getDuration = (data) => {
  const duration = `${Math.floor(data.duration / 60)}ч ${data.duration % 60}м`
  return duration;
};

export const cardsNumbers = {
  desktopOrTablet: 7,
  mobile: 5,
};

export const statusSuccessMessage = 'Вы успешно зарегистрировались!';
export const statusLoadMessage = 'Идет загрузка...';
export const statusEditMessage = 'Информация успешно изменена!';
export const statusErrorText = 'Что-то пошло не так! Попробуйте еще раз.';

export const statusErrors = [
  {
    name: 'login-form',
    errors: [
      {
        status: 400,
        message: 'Не передано одно из полей.'
      },
      {
        status: 401,
        message: 'Пользователь не найден. Проверьте Email и Пароль.'
      },
      {
        status: 409,
        message: 'Пользователь с таким email уже существует'
      }
    ]
  },
  {
    name: 'register-form',
    errors: [
      {
        status: 400,
        message: 'Некорректно заполнено одно из полей. Попробуйте еще раз.'
      }
    ]
  }
];

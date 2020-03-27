import { isEmpty } from "lodash";

export const formValidator = (fields: any) => {
  const errors: any = {};

  if (isEmpty(fields.firstNameField)) {
    errors.firstNameField = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.secondNameField)) {
    errors.secondNameField = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.emailField)) {
    errors.emailField = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.passwordField)) {
    errors.passwordField = "Поле должно быть заполнено";
  }

   if (isEmpty(fields.repeatpasswordField)) {
    errors.loginField = "Поле должно быть заполнено";
  }

  if (fields.passwordField !== fields.repeatpasswordField) {
    errors.repeatpasswordField = "Пароли не совпадают"
    console.log('dfsfsd');
  }


return errors;
}

export const formLoginValidator = (fields: any) => {
  const errors: any = {};

  if (isEmpty(fields.emailField)) {
    errors.emailField = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.passwordField)) {
    errors.passwordField = "Поле должно быть заполнено";
  }

return errors;
}


export const passLength = (len: number) => (value: string) => {

  return value?.length < len
    ? `Пароль должен быть не менее ${len} символов`
    : null;
};

export const onlyEmail = () => (value: string) => {
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
    return null;
  } else {
    return 'Неверный формат email';
  }
};



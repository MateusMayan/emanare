import React, { FormEvent } from 'react';
import styles from './LoginRegister.module.css';
import { UserContext } from '../contexts/UserContext';
import useForm from '../Hooks/useForm';

import Button from '../Components/Buttons/Button';
import Input from '../Components/Input';
import Error from '../Components/Helper/Error';

const LoginRegister = () => {
  const { error, loading, cadastrarUsuario } = React.useContext(UserContext);
  //RegisterForm
  const usernameReg = useForm();
  const emailReg = useForm('email');
  const passwordReg = useForm('password');

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (usernameReg.validate() && passwordReg.validate()) {
      if (cadastrarUsuario) {
        cadastrarUsuario(usernameReg.value, emailReg.value, passwordReg.value);
      }
    }
  }
  return (
    <div className={styles.cadastro}>
      <h2 className={styles.title}>Ainda não possui conta?</h2>
      <form onSubmit={handleRegister}>
        <Input label="Nome" type="text" name="usernameReg" {...usernameReg} />
        <Input label="Email" type="text" name="emailReg" {...emailReg} />
        <Input
          label="Senha"
          type="password"
          name="passwordReg"
          {...passwordReg}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error && error} />
      </form>
    </div>
  );
};

export default LoginRegister;

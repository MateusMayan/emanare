import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import Button from '../Components/Buttons/Button';
import Input from '../Components/Input';
import Head from '../Components/Helper/Head';
import useForm from '../Hooks/useForm';
import { UserContext } from '../contexts/UserContext';
import Error from '../Components/Helper/Error';
const LoginForm = () => {
  //LoginForm
  const username = useForm();
  const password = useForm();
  const { fazerLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      if (fazerLogin instanceof Function) {
        fazerLogin(username.value, password.value);
      } else {
        console.error(
          'A função fazerLogin não está definida ou não é uma função.',
        );
      }
    }
  }

  return (
    <section className={styles.Container}>
      <Head title="Login" />

      <div className={styles.LoginForm}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Error error={error && 'Dados incorretos.'} />
        </form>
        <Link className={styles.perdeu} to="/login/password-forgot">
          Perdeu a Senha?
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;

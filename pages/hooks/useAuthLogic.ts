import { useCallback, useState } from 'react';

import { login } from '../auth/helpers/login';
import { register } from '../auth/helpers/register';
import { AuthType } from '../types/auth/auth';

const useAuthLogic = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [variant, setVariant] = useState<AuthType>('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  const handleLogin = useCallback(async () => {
    await login(email, password);
  }, [email, password]);

  const handleRegister = useCallback(async () => {
    await register(email, name, password);
  }, [email, name, password]);

  return {
    email,
    name,
    password,
    variant,
    setEmail,
    setName,
    setPassword,
    toggleVariant,
    handleLogin,
    handleRegister,
  };
};

export default useAuthLogic;

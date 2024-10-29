import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import login from '@/pages/api/auth/login';
import register from '@/pages/api/auth/register';
import { AuthType } from '../types/auth/auth';

const useAuthLogic = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [variant, setVariant] = useState<AuthType>('login');

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  const handleLogin = useCallback(async () => {
    await login(email, password);
    router.push('/');
  }, [email, password]);

  const handleRegister = useCallback(async () => {
    await register(email, name, password);
    router.push('/');
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

import { signIn } from 'next-auth/react';

const login = async (email: string, password: string) => {
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/profiles',
    });
  } catch (error) {
    console.error(error);
  }
};

export default login;
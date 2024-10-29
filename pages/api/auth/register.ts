import login from './login';

import axios from 'axios';

const register = async (email: string, name: string, password: string) => {
  try {
    await axios.post('/api/register', { email, name, password });
    await login(email, password);
  } catch (error) {
    console.error(error);
  }
};

export default register;
import { AuthType } from '@/types/auth/auth';

const AuthHeader = ({ variant }: { variant: AuthType }) => {
  return <h2 className="text-white text-4xl mb-8 font-semibold">{variant === 'login' ? 'Sign in' : 'Register'}</h2>;
};

export default AuthHeader;

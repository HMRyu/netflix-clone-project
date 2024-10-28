import { AuthType } from '@/pages/types/auth/auth';

interface AuthButtonProps {
  variant: AuthType;
  handleLogin: () => Promise<void>;
  handleRegister: () => Promise<void>;
}

const AuthButton = ({
  variant,
  handleLogin,
  handleRegister,
}: AuthButtonProps) => {
  return (
    <button
      onClick={variant === 'login' ? handleLogin : handleRegister}
      className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
    >
      {variant === 'login' ? 'Login' : 'Sign up'}
    </button>
  );
};

export default AuthButton;

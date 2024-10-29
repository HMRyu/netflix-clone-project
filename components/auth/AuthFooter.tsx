import { AuthType } from '@/types/auth/auth';

interface AuthFooterProps {
  variant: AuthType;
  toggleVariant: () => void;
}

const AuthFooter = ({ variant, toggleVariant }: AuthFooterProps) => {
  return (
    <p className="text-neutral-500 mt-12 text-center">
      {variant === 'login'
        ? 'First time using Netflix?'
        : 'Already have an account?'}
      <span
        onClick={toggleVariant}
        className="text-white ml-1 hover:underline cursor-pointer"
      >
        {variant === 'login' ? 'Create an account' : 'Login'}
      </span>
    </p>
  );
};

export default AuthFooter;

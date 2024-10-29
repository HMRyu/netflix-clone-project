import Input from '@/components/Input';
import { AuthType } from '@/pages/types/auth/auth';

interface AuthFormProps {
  variant: AuthType;
  email: string;
  name: string;
  password: string;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
}

const AuthForm = ({
  variant,
  email,
  name,
  password,
  setEmail,
  setName,
  setPassword,
}: AuthFormProps) => {
  return (
    <div className="flex flex-col gap-4">
      {variant === 'register' && (
        <Input
          label="Username"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          id="name"
          value={name}
        />
      )}
      <Input
        label="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        id="email"
        type="email"
        value={email}
      />
      <Input
        label="Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        id="password"
        type="password"
        value={password}
      />
    </div>
  );
};

export default AuthForm;

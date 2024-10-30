import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

const AuthSocials = () => {
  return (
    <div className="flex flex-row items-center gap-4 mt-8 justify-center">
      <div
        onClick={() => signIn('google', { callbackUrl: '/profiles' })}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover: opacity-80 transition"
      >
        <FcGoogle size={30} />
      </div>
    </div>
  );
};

export default AuthSocials;

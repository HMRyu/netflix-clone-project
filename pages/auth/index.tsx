import useAuthLogic from '../../hooks/useAuthLogic';
import AuthForm from '../../components/auth/AuthForm';
import AuthLogo from '../../components/auth/AuthLogo';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthButton from '../../components/auth/AuthButton';
import AuthSocials from '../../components/auth/AuthSocials';
import AuthFooter from '../../components/auth/AuthFooter';
import AuthTestUser from '../../components/auth/AuthTestUser';

const Auth = () => {
  const { email, name, password, variant, setEmail, setName, setPassword, toggleVariant, handleLogin, handleRegister } =
    useAuthLogic();

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <AuthLogo />
        <div className="flex justify-center">
          <div className="bg-black bg-opaciy-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <AuthHeader variant={variant} />
            <AuthForm
              variant={variant}
              email={email}
              name={name}
              password={password}
              setEmail={setEmail}
              setName={setName}
              setPassword={setPassword}
            />
            <AuthButton variant={variant} handleLogin={handleLogin} handleRegister={handleRegister} />
            <AuthSocials />
            <AuthTestUser />
            <AuthFooter variant={variant} toggleVariant={toggleVariant} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

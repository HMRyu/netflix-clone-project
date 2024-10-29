import { useState } from 'react';

import { Check, Copy } from 'lucide-react';

const AuthTestUser = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPassword, setCopiedPassword] = useState<boolean>(false);

  const handleCopy = (text: string, setCopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center mt-10 text-white">
      <div className="flex items-center gap-x-3">
        <div>test id : testUser@test.com</div>
        <div
          className="cursor-pointer"
          onClick={() => handleCopy('testUser@test.com', setCopiedEmail)}
        >
          {copiedEmail ? <Check /> : <Copy />}
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <div>test pw : testUser</div>
        <div
          className="cursor-pointer"
          onClick={() => handleCopy('testUser', setCopiedPassword)}
        >
          {copiedPassword ? <Check /> : <Copy />}
        </div>
      </div>
    </div>
  );
};

export default AuthTestUser;

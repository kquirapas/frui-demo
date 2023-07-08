import { useEffect, useState } from "react";

import { PASSWORD_RULES } from "../constants";

const useHome = () => {
  // user details
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  // login / signup toggle
  const [isLogin, setIsLogin] = useState<boolean>(true);
  // error handling
  const [isError, setIsError] = useState<boolean>(false);
  const [isSame, setIsSame] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validatePassword = (p: string) => {
    for (let i = 0; i < PASSWORD_RULES.length; i++) {
      const { message, validator } = PASSWORD_RULES[i];
      // if it fails validator (returns false)
      if (!validator(p)) {
        setIsError(true);
        setErrorMessage(message);
        break;
      }
      // on all success
      setIsError(false);
      setErrorMessage("");
    }
  };

  useEffect(() => {
    setIsSame(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  // handlers
  return {
    username,
    password,
    error: { status: isError, message: errorMessage },
    isLogin,
    isSame,
    updateConfirmPassword: (p: string) => setConfirmPassword(p),
    updatePassword: (p: string) => setPassword(p),
    updateUsername: (n: string) => setUsername(n),
    updateIsLogin: (b: boolean) => setIsLogin(b),
  };
};

export default useHome;

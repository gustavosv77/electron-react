import { SetStateAction, useState } from "react";
import RecoverInformEmail from "../../components/Login/RecoverInformEmail";
import RecoverInformTokenEmail from "../../components/Login/RecoverInformTokenEmail";
import RecoverPassword from "../../components/Login/RecoverPassword";

const Recover = () => {
  const [booleanInformEmail, setBooleanInformEmail] = useState<boolean>(true);
  const [booleanInformTokenEmail, setbooleanInformTokenEmail] =
    useState<boolean>(false);
  const [booleanInformNewPassword, setbooleanInformNewPassword] =
    useState<boolean>(false);

  return (
    <>
      {booleanInformEmail && (
        <RecoverInformEmail
          setBooleanInformEmail={setBooleanInformEmail}
          setbooleanTokenEmail={setbooleanInformTokenEmail}
        />
      )}
      {booleanInformTokenEmail && (
        <RecoverInformTokenEmail
          setbooleanTokenEmail={setbooleanInformTokenEmail}
          setbooleanInformNewPassword={setbooleanInformNewPassword}
        />
      )}
      {booleanInformNewPassword && (
        <RecoverPassword
          setbooleanInformNewPassword={setbooleanInformNewPassword}
          setbooleanInformTokenEmail={setbooleanInformTokenEmail}
          setBooleanInformEmail={setBooleanInformEmail}
        />
      )}
    </>
  );
};

export default Recover;

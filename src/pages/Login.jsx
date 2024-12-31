import { CssVarsProvider } from "@mui/joy/styles";
import React from "react";
import LoginFinal from "../component/LoginFinal";

const Login = () => {
  return (
    <div>
      <CssVarsProvider>
        <LoginFinal />
      </CssVarsProvider>
    </div>
  );
};

export default Login;

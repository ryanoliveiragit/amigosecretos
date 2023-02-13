import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { App } from "./pages/home";
import { GlobalStyle } from "./styles/globals";

import { GoogleOAuthProvider } from "@react-oauth/google";
//713027108670-ap50260j7bg94niv0ssi6gs4rd087acm.apps.googleusercontent.com
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GoogleOAuthProvider clientId="713027108670-ap50260j7bg94niv0ssi6gs4rd087acm.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);

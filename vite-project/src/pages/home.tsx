import React, {createContext} from "react";
import { Container, Content } from "../styles/home";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


export function App() {
  return (
    <Container>
      <Content>
        <h1>Amigo Secreto Online</h1>
        <p>
          Organize jogos de <span>Amigo secreto</span> com seus amigos onde quer
          que estejam com o Amigo Secreto Online! Crie salas, envie convites e
          divirta-se com esse clássico jogo de Natal na palma da sua mão
        </p>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded)
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        ;
      </Content>
    </Container>
  );
}

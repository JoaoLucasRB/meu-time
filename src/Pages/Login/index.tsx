import React, { useEffect, useMemo, useState } from 'react';

import { Container, TextHighlight, Wrapper } from './styles'
import { requests, cookies } from '../../utils';
import { useNavigate } from 'react-router-dom';
import LogoText from '../../components/common/LogoText';
import Input from '../../components/Login/Input';
import LoginButton from '../../components/Login/LoginButton';

function Login() {
  const navigate = useNavigate();

  const [userKey, setUserKey] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);

  function login() {
    fetch("https://v3.football.api-sports.io/status", requests.getRequestSettings(userKey))
      .then(res => res.json())
      .then(res => {
        console.log(res.errors.token)
        if (res.errors.token) {
          setErrorMessage("API-Key inválida");
          return;
        }
        if (!res.errors.length) {
          cookies.setCookie("mt-api-key", userKey, 3);
          navigate('/app', { replace: true });
        }
      })
      .catch(err => {
        setErrorMessage("Falha na requisição, tente novamente")
        console.log(err)
      });
  }

  function handleButton() {
    login();
  }

  useEffect(() => {
    if (cookies.getCookie("mt-api-key"))
      navigate('/app', { replace: true });
    else
      setRender(true);
  }, [])

  return (
    render ?
      <Wrapper>
        <Container>
          <LogoText />
          <Input userKey={userKey} setUserKey={setUserKey} />
          <LoginButton handleButton={handleButton} />
          <TextHighlight 
            href="https://dashboard.api-football.com/register">
              <span>Não possui uma API-Key?</span>
          </TextHighlight>
          {errorMessage ?
            <div>
              {errorMessage}
            </div>
            : <></>}
        </Container>
      </Wrapper>
      : <></>
  );
}

export default Login;

import React, { useEffect, useMemo, useState } from 'react';

import {} from './styles'
import { requests, cookies } from '../../utils';
import { useNavigate } from 'react-router-dom';

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
        if(res.errors.token) {
          setErrorMessage("API-Key inválida");
          return;
        }
        if(!res.errors.length) {
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
    if(cookies.getCookie("mt-api-key"))
      navigate('/app', { replace: true });
    else
      setRender(true);
  }, [])

  return (
    render ?
      <div>
          <input type="text" name="keyLogin" value={userKey} onChange={(e) => setUserKey(e.target.value)}/>
          <button onClick={() => handleButton()}>Entrar</button>
          <a href="https://dashboard.api-football.com/register">Não possui uma API-Key?</a>
          {errorMessage ? 
          <div>
            {errorMessage}
          </div>
          : <></>}
      </div>
    : <></>
  );
}

export default Login;

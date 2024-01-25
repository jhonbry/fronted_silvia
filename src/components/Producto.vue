<template>
    <div id="form-ui">
      <form action="" method="post" id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">Inicio de sesión</div>
            <div id="welcome-line-2">¡Bienvenido de nuevo!</div>
          </div>
          <div id="input-area">
            <div class="form-inp">
              <input placeholder="Correo electrónico" type="text" />
            </div>
            <div class="form-inp">
              <input placeholder="Contraseña" type="password" />
            </div>
          </div>
          <div id="submit-button-cvr">
            <router-link to="/home"><button id="submit-button" type="submit">Iniciar sesión</button></router-link>
          </div>
          <div id="forgot-pass">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <div id="bar"></div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style>
  body {
    background-color: rgb(255, 255, 255);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin: 0%;
    padding: 0%;
    align-items: center;
  }
  
  #form {
    height: 500px;
    width: 400px;
    display: flex;
    justify-content: center;
    background-color: #161616;
    box-shadow: 0px 15px 60px #00ff7f;
    outline: 1px solid #2b9962;
    border-radius: 8px;
    align-items: center;
  
  }
  
  #welcome-lines {
    text-align: center;
    line-height: 1;
  }
  
  #welcome-line-1 {
    color: #00ff7f;
    font-weight: 600;
    font-size: 40px;
  }
  
  #welcome-line-2 {
    color: #ffffff;
    font-size: 18px;
    margin-top: 17px;
  }
  
  #input-area {
    margin-top: 40px;
  }
  
  .form-inp {
    padding: 11px 25px;
    background: transparent;
    border: 1px solid #e3e3e3;
    line-height: 1;
    border-radius: 8px;
  }
  
  .form-inp:focus {
    border: 1px solid #00ff7f;
  }
  
  .form-inp:first-child {
    margin-bottom: 15px;
  }
  
  .form-inp input {
    width: 100%;
    background: none;
    font-size: 13.4px;
    color: #00ff7f;
    border: none;
    padding: 0;
    margin: 0;
  }
  
  .form-inp input:focus {
    outline: none;
  }
  
  #submit-button-cvr {
    margin-top: 20px;
  }
  
  #submit-button {
    display: block;
    width: 100%;
    color: #00ff7f;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    padding: 14px 13px 12px 13px;
    border: 0;
    outline: 1px solid #00ff7f;
    border-radius: 8px;
    line-height: 1;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
  
  #submit-button:hover {
    transition: all ease-in-out 0.3s;
    background-color: #00ff7f;
    color: #161616;
    cursor: pointer;
  }
  
  #forgot-pass {
    text-align: center;
    margin-top: 10px;
  }
  
  #forgot-pass a {
    color: #868686;
    font-size: 14px;
    text-decoration: none;
  }
  </style>
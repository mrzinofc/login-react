/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
    
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');   
    };

    const loginLink = () => {
        setAction('');    
    };
  
    return (
    <div className={`wrapper${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Entrar</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuário' required/>
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Senha' required/>
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type='checkbox' />Lembrar-me </label>
                    <a href='#'>Esqueci minha senha</a>   
                </div>

                <button type="submit">ACESSAR CONTA</button>

                <div className="register-link">
                    <p>Não tem uma conta? <a href="#" onClick={registerLink}>Cadastre-se</a>
                    </p>
                </div>
            </form>   
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Cadastre-se</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuário' required/>
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email' required/>
                    <FaEnvelope className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Senha' required/>
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type='checkbox' />Eu concordo com os termos e condições</label>   
                </div>

                <button type="submit">CADASTRE-SE</button>

                <div className="register-link">
                    <p>Já tem uma conta? <a href="#" onClick={loginLink}>Entrar</a>
                    </p>
                </div>
            </form>   
        </div>
    </div>
  )
}

<footer className="footer">
    <p>&copy; 2024 Murilo Coelho | Todos os direitos reservados.</p>
</footer>

export default LoginRegister

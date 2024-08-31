import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'Calma' && password === 'Alma1712011') {
            alert('Login bem-sucedido!');
            // Redirecionar ou executar alguma ação
        } else {
            setError('Usuário ou senha incorretos.');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Bem-vindo ao C'ALMA</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Usuário</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Entrar</button>
            </form>
        </div>
    );
};

export default Login;

import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className='auth__form'>
            <h3 className='auth__title'>Вход</h3>
            <input
                className='auth__input'
                type='email'
                name='email'
                placeholder='email@email.com'
                value={email || ''}
            />
             <input
                className='auth__input'
                type='password'
                name='password'
                placeholder='password'
                value={password || ''}
            />
            <button className='auth__button' type='submit'>
                Войти
            </button>
        </form>
    )

}

export default Login
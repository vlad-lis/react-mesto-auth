import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className='auth__form'>
            <h3 className='auth__title'>Регистрация</h3>
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
                Зарегистрироваться
            </button>
            <Link to='/sign-in' className='auth__link'>
                Уже зарегистрировались? Войти
            </Link>

        </form>
    )


}

export default Register;
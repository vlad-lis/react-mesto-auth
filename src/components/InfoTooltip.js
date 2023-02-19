import success from '../images/success';
import fail from '../images/fail'

function InfoTooltip(props) {
    return (
        <div className={`pop-up ${props.isOpen && 'pop-up_opened'}`}>
            <div className='pop-up__content'>
                <button
                    className="pop-up__close-button"
                    aria-label="close"
                    type="button"
                    onClick={props.onClose}>
                </button>
                <img
                    className='pop-up__auth-img'
                    src={props.isSuccess ? success : fail} />
                <h3 className="pop-up__heading">
                    {props.isSuccess
                    ? 'Вы успешно зарегистрировались!'
                    : 'Что-то пошло не так! Попробуйте еще раз.'}
                </h3>
            </div>
        </div>
    )
}
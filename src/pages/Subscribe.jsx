
import '../style/Subscribe.css';

const Subscribe = () => {
    return (
        <div className="wrap">
            <div className="layer">
                <div className="inner">
                    <div className="top">Kinoarea</div>
                    <h1>
                        Подпишитесь на E-mail рассылку
                    </h1>
                    <p>
                        Если хотите быть в курсе последних новостей и новинок кино –
                        заполните форму ниже и оформите бесплатную E-mail рассылку!
                    </p>
                    <div className="form">
                        <input type="email" placeholder="Введите свой E-mail адрес" />
                        <button>
                            Подписаться
                        </button>
                    </div>
                    <label className="agree">
                        <input type="checkbox" defaultChecked />
                        <span>
                            Соглашаюсь на условия
                            <a href="#"> политики конфиденциальности</a>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Subscribe
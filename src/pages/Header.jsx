import "../style/Header.css"


const Header = () => {
    return (
        <>
            <div className="header">
                <div className="nav">
                    <img src="/images/Header/xd.png" alt="" />
                    <div className="nav-list">
                        <img src="/images/Header/plo.png" alt="" />
                        <h2>
                            Афиша  Медиа  Фильмы  Актёры  Новости  Подборки  Категории
                        </h2>
                    </div>
                    <div className="nav-logo">
                        <img src="/images/Header/gdf.png" alt="" />
                        <img src="/images/Header/iul.png" alt="" />
                    </div>
                </div>
                <div className="hero">
                    <div className="hero-list">
                        <h2>
                            Сейчас в кино
                        </h2>
                        <h2>
                            - - - -
                        </h2>
                        <h2>
                            Все
                        </h2>
                        <h3>
                            Боевики         Приключения         Комедии         Фантастика         Триллеры         Драма
                        </h3>
                    </div>
                    <div className="hero-logo">
                        <img src="/images/Header/sxz.png" alt="" />
                        <img src="/images/Header/ytg.png" alt="" />
                        <img src="/images/Header/edr.png" alt="" />
                        <img src="/images/Header/bgh.png" alt="" />
                    </div>
                    <div className="hero-logo-tg">
                        <img src="/images/Header/qwe.png" alt="" />
                        <img src="/images/Header/rty.png" alt="" />
                        <img src="/images/Header/7.png" alt="" />
                        <img src="/images/Header/8.png" alt="" />
                    </div>
                    <div className="hero-login">
                        <button>
                            Все новинки
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header
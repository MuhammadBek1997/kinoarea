import "../style/Header.css"


const Header = () => {
    return (
        <>
            <div className="header">
                <div className="nav">
                    <img src="/images/xd.png" alt="" />
                    <div className="nav-list">
                        <img src="/images/plo.png" alt="" />
                        <h2>
                            Афиша  Медиа  Фильмы  Актёры  Новости  Подборки  Категории
                        </h2>
                    </div>
                    <div className="nav-logo">
                        <img src="/images/gdf.png" alt="" />
                        <img src="/images/iul.png" alt="" />
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
                        <img src="/images/sxz.png" alt="" />
                        <img src="/images/ytg.png" alt="" />
                        <img src="/images/edr.png" alt="" />
                        <img src="/images/bgh.png" alt="" />
                    </div>
                    <div className="hero-logo-tg">
                        <img src="/images/qwe.png" alt="" />
                        <img src="/images/rty.png" alt="" />
                        <img src="/images/7.png" alt="" />
                        <img src="/images/8.png" alt="" />
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
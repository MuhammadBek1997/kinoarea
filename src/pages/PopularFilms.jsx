import '../style/PopularFilms.css'


const PopularFilms = () => {
    return (
        <div className="popular-films">
            <div className="container">
                <h2>
                    Популярные фильмы
                </h2>
                <div>
                    <img src="public/images/PopularFilms/Line.png" alt="" />
                </div>

                <h4>
                    Всё время
                </h4>
                <h4>
                    2020
                </h4>
                <h4>
                    <span className='color'>2019</span>
                </h4>
                <h4>
                    2018
                </h4>
                <h4>
                    2017
                </h4>
                <h4>
                    2016
                </h4>
                <h4>
                    2015
                </h4>
            </div>
            <div className="films">
                <div>
                    <img src="public/images/PopularFilms/Фото.png" alt="" />
                    <h5>
                        Джокер
                    </h5>
                    <p>
                        Триллер, драма, криминал
                    </p>
                </div>
                <div>
                    <img src="public/images/PopularFilms/Фото1.png" alt="" />
                    <h5>
                        История игрушек 4
                    </h5>
                    <p>
                        Мультфильм, фэнтези, комедия, приключения ...
                    </p>
                </div>
                <div>
                    <img src="public/images/PopularFilms/Фото2.png" alt="" />
                    <h5>
                        Однажды в… Голливуде
                    </h5>
                    <p>
                        Драма, комедия
                    </p>
                </div>
                <div>
                    <img src="public/images/PopularFilms/image2.png" alt="" />
                    <h5>
                        Солнцестояние
                    </h5>
                    <p>
                        Ужасы, триллер, драма
                    </p>
                </div>
            </div>
            <div className='slider'>

                <img src="public/images/PopularFilms/Слайдер.png" alt="" />
            </div>
        </div>
    )
}

export default PopularFilms
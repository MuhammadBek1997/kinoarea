import '../style/PopularPersons.css';

const PopularPersons = () => {
    return (
        <>
            <section className='PopularPersons'>
                <div className='PopularPersons-cont'>
                    <div> <h1>Популярные персоны</h1></div>
                    <div className='year'>
                        <span className='color'><p>За год</p></span>
                        <span className='color'><p>За месяц</p></span>
                        <p>За неделю</p>
                    </div>
                </div>
                <div className='card-PopularPersons'>
                    <div className='card'>
                        <div className='top-rank'><h4>1-е место</h4></div>
                        <div className="info">
                            <h2>Квентин Тарантино</h2>
                            <div className='nickname'><p>Quentin Tarantino</p></div>
                            <div className='age-cont'><p>57 лет</p></div>
                        </div>
                    </div>
                    <div className='card2'>
                        <div className='top-rank'><h4>2-е место</h4></div>
                        <div className='info'>
                            <h2>Джейсон Стейтем</h2>
                            <div className='nickname'><p>Jason Statham</p></div>
                            <div className='age-cont'><p>52 года</p></div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='item'>
                            <div>
                                <h3>Тинто Брасс</h3>
                                <div className='name'><p>Tinto Brass</p></div>
                                <div className='age'><p>87 лет</p></div>
                            </div>
                            <div class="place">3-е место</div>
                        </div>
                        <div className='item'>
                            <div>
                                <h3>Джеки Чан</h3>
                                <div className='name'> <p>Jackie Chan</p></div>
                                <div className='age'> <p>66 лет</p></div>
                            </div>
                            <div class="place">4-е место</div>
                        </div>
                        <div className='item'>
                            <div>
                                <h3>Том Харди</h3>
                                <div className='name'> <p>Tom Hardy</p></div>
                                <div className='age'><p>42 года</p></div>
                            </div>
                            <div class="place">5-е место</div>
                        </div>
                        <div className='item'>
                            <div>
                                <h3>Акшай Кумар</h3>
                                <div className='name'> <p>Akshay Kumar</p></div>
                                <div className='age'><p>52 года</p></div>
                            </div>
                            <div class='place'>6-е место</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularPersons
import '../style/HighBudget.css'

const HighBudget = () => {
    return (
        <div className='filmlar'>

            <div className='text'>
                <h5>
                    Кассовые сборы
                </h5>

                <h3>
                    13 марта — 15 марта
                </h3>

                <div>
                    <img className='line' src="./public/images/line.png" alt="" />
                </div>


                <div>
                    <img className='mir' src="./public/images/mir.png" alt="" />
                </div>

            </div>

            <div className='highBudget-imgs'>

                <div className='imgs'>
                    <div>
                    <img src="./public/images/Rectangle13.png" alt="" />
                     </div>
                    <div className='info'>
                        <div className='one'>1. Бладшот</div>
                        <div className='two'>$13 млн</div>
                        <div className='three'>$15.1 млн за 4 недели</div>
                    </div>
                </div>

                <div className='imgs'>
                    <img src="./public/images/Rectangle14.png" alt="" />

                    <div className='info'>
                        <div className='one'>2. Вперёд</div>
                        <div className='two'>$6.8 млн</div>
                        <div className='three'>$41.4 млн за 4 недели</div>
                    </div>
                </div>

                <div className='imgs'>
                    <img src="./public/images/Rectangle15.png" alt="" />

                    <div className='info'>
                        <div className='one'>3. Человек
                            -невидимка</div>
                        <div className='two'>$6.2 млн</div>
                        <div className='three'>$58.3 млн за 3 недели</div>
                    </div>
                </div>

                <div className='imgs'>
                    <img src="./public/images/Rectangle16.png" alt="" />

                    <div className='info'>
                        <div className='one'>4. Соник в кино</div>
                        <div className='two'>$2.9 млн</div>
                        <div className='three'>$15.1 млн за 4 недели</div>
                    </div>
                </div>

                <div className='imgs'>
                    <div>
                           <img src="./public/images/Rectangle17.png" alt="" />
                    </div>
                 
                    <div className='info'>
                        <div className='one'>5. Джентльмены</div>
                        <div className='two'>$1.8 млн</div>
                        <div className='three'>$78.7 млн за 11 недель</div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default HighBudget
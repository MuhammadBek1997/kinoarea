import '../style/PremierFilms.css'

const PrimierFilms = () => {
    return (
        <div className='premyeralar'>

            <div className='novinki'>

               <div>
               <h2>Ожидаемые новинки</h2>
               </div>
            
             <div>
                  <img className='novinki-img' src="./public/images/sleyder.png" alt="" />
             </div>
          
            </div>

            <div className='kino-img'>
                 <div>
                    <img src="./public/images/foto.png" alt="" />
                    <h3>Побег из Претории</h3>
                    <h4>14 мая 2020 в России</h4>
                 </div>
                 <div>
                    <img src="./public/images/adios.png" alt="" />
                    <h3>Прощай</h3>
                    <h4>14 мая 2020 в России</h4>
                 </div>
                 <div>
                    <img src="./public/images/drujit.png" alt="" />
                    <h3>Дружить по-русски!</h3>
                    <h4>21 мая 2020 в России</h4>
                 </div>
                 <div>
                    <img src="./public/images/predi.png" alt="" />
                    <h3>Приди ко мне</h3>
                    <h4>Приди ко мне</h4>
                 </div>
            </div>

        </div>
    )
}

export default PrimierFilms
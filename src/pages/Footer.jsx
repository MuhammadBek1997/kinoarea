import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="footer-socials">
        <img src="/images/ilovalar.png" alt="Social networks" />
      </div>
      <ul className="footer-nav">
        <li><a href="#">Афиша</a></li>
        <li><a href="#">Новости</a></li>
        <li><a href="#">Персоны</a></li>
        <li><a href="#">Рейтинги</a></li>
        <li><a href="#">Рецензии</a></li>
        <li><a href="#">Каталог фильмов</a></li>
      </ul>
      <div className="footer-copy">
        <p>2020 © Kinoreev. Все права защищены</p>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}; 

export default Footer
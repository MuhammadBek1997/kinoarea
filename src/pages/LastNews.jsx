
import "../style/LastNews.css";

const LastNews = () => {
      return (
            <>
                  <div className="last-news-section">
                        <div className="header">
                              <h2>Последние новости</h2>
                              <a href="#" className="all-news-link">
                                    Все новости →
                              </a>
                        </div>

                        <div className="news-grid">
                              <div className="main-news-card">
                                    <div className="main-news-image-wrapper">
                                          <img className="main-news-image" src="public/images/LastNews/9d5899886d56dc0dfb4d4c1c71eee4e236cbee7b.png" alt="Asosiy yangilik"/>
                                          
                                          <div className="main-news-overlay">
                                                <div className="meta">
                                                      <span>15 Apr 2020</span>
                                                      <span>👁 242</span>
                                                      <span>💬 14</span>
                                                </div>
                                                <h3>Не время умирать. Перенос релиза фильма</h3>
                                                <p>
                                                      Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.
                                                </p>
                                                <button className="read-btn">Читать новость</button>
                                          </div>
                                    </div>
                              </div>

                              <div className="sidebar-news">
                                    <div className="sidebar-news-card">
                                          <img src="public/images/LastNews/sonic.png" alt="" />
                                          <div className="sidebar-news-content">
                                                <span className="date">15 Apr 2020</span>
                                                <h4>Как изменили Соника с последнего анонса</h4>
                                          </div>
                                    </div>
                                    <div className="sidebar-news-card">
                                          <img src="public/images/LastNews/zombie.png" alt="" />
                                          <div className="sidebar-news-content">
                                                <span className="date">15 Apr 2020</span>
                                                <h4>От этой новости вы будете шокированы завтра</h4>
                                          </div>
                                    </div>
                                    <div className="sidebar-news-card">
                                          <img src="public/images/LastNews/desert.png" alt="" />
                                          <div className="sidebar-news-content">
                                                <span className="date">13 Apr 2020</span>
                                                <h4>Вот это, конечно, да!</h4>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default LastNews;
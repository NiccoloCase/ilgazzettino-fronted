import "./HotNews.scss";

export const HotNews = () => {
  const newsItems = [
    {
      id: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, atque!",
      img: "https://placehold.co/150x100",
      author: "Marco Rossi",
      hasBadge: true,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, atque!",
      img: "https://placehold.co/150x100",
      author: "Nicola Tesla",
      hasBadge: true,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, atque!",
      img: "https://placehold.co/150x100",
      author: "Caterina Bianchi",
      hasBadge: false,
    },
    {
      id: 4,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, atque!",
      img: "https://placehold.co/150x100",
      author: "Giuseppe Verdi",
      hasBadge: false,
    },
  ];

  return (
    <section className="hot-news" aria-label="Notizie di tendenza">
      <div className="container">
        <div className="row ">
          {newsItems.map((item, index) => (
            <article key={item.id} className="col-md-6 col-lg-3 mb-4 p-0 ">
              <div
                className="hot-news-item h-100"
                style={{
                  marginLeft: index === 0 ? "0" : ".5rem",
                  marginRight:
                    index === newsItems.length - 1 ? "0rem" : ".5rem",
                }}
              >
                <div className="img-wrapper">
                  <img
                    src="https://placehold.co/100x50"
                    alt=""
                    className="mb-2"
                  />

                  {item.hasBadge && (
                    <div className="hot-news-badge">
                      <img src="/assets/trend.png" alt="trend news" />
                    </div>
                  )}
                </div>

                <p className="hot-news-text">{item.text}</p>

                {item.author && (
                  <small className="hot-news-author text-muted">
                    Di {item.author}
                  </small>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

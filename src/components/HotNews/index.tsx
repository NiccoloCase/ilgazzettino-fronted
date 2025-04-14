import "./HotNews.scss";

export const HotNews = () => {
  const newsItems = [
    {
      id: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, atque!",
      img: "https://placehold.co/150x100",
      alt: "Description of image for news item 1",
      author: "Marco Rossi",
      hasBadge: true,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, atque!",
      img: "https://placehold.co/150x100",
      alt: "Description of image for news item 2",
      author: "Nicola Tesla",
      hasBadge: true,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, atque!",
      img: "https://placehold.co/150x100",
      alt: "Description of image for news item 3",
      author: "Caterina Bianchi",
      hasBadge: false,
    },
    {
      id: 4,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, atque!",
      img: "https://placehold.co/150x100",
      alt: "Description of image for news item 4",
      author: "Giuseppe Verdi",
      hasBadge: false,
    },
  ];

  return (
    <section className="hot-news" aria-labelledby="hot-news-heading">
      <h2 id="hot-news-heading" className="visually-hidden">
        Notizie di tendenza
      </h2>
      <div className="row g-0">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="col-md-6 col-lg-3"
            aria-labelledby={`news-heading-${item.id}`}
          >
            <div className="hot-news-item h-100" tabIndex={0}>
              <div className="img-wrapper">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="img-fluid w-100"
                  width="150"
                  height="100"
                />

                {item.hasBadge && (
                  <div className="hot-news-badge">
                    <img
                      src="/assets/trend.png"
                      alt="Trending news"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>

              <h3 id={`news-heading-${item.id}`} className="hot-news-title">
                {item.text}
              </h3>

              {item.author && (
                <p className="hot-news-author text-muted">
                  <span className="visually-hidden">Autore: </span>
                  {item.author}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

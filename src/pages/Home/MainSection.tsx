import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MAIN_NEWS = [
  {
    category: "MESTRE",
    imgs: [{ src: "https://placehold.co/800x250", alt: "lorem ipsum" }],
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    others: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
    author: "Redazione Web",
  },
  {
    category: "CAMPAGNA LUPIA",
    imgs: [
      { src: "https://placehold.co/400x250", alt: "lorem ipsum" },
      { src: "https://placehold.co/400x250", alt: "lorem ipsum" },
    ],
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    others: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
    author: "Mario Rossi",
  },

  {
    category: "POLITICA",
    imgs: [{ src: "https://placehold.co/227x125", alt: "lorem ipsum" }],
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    others: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
    author: "Giovanni Bianchi",
    aside: true,
  },
];

export const HomePageMainSection = () => {
  return (
    <main className="container my-4 d-flex">
      <section className="flex-grow-1 pe-4">
        {MAIN_NEWS.map((news, i) => (
          <article className="main-article" key={i}>
            <header>
              <p className="section-title mb-1">{news.category}</p>
              <div className="d-flex gap-2 mb-2 w-100">
                {news.imgs.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className="img-fluid"
                    style={{
                      width: `${100 / news.imgs.length}%`,
                    }}
                  />
                ))}
              </div>
              <h1 className="news-title">
                <a href="#">{news.title}</a>
              </h1>
            </header>
            <p className="text-muted mt-2 other-news">
              {news.others.map((other, index) => (
                <a key={index} href="#">
                  <strong className="bullet">&#8226;</strong> {other}{" "}
                </a>
              ))}
            </p>

            <div className="d-flex ">
              <p>
                <small>
                  <em>di {news.author}</em>
                </small>
              </p>

              <div className="flex-grow-1 d-flex justify-content-end">
                <a
                  href="https://www.facebook.com/gazzettino.it"
                  className="me-3"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    color="#3C5997"
                    fontSize={17}
                  />
                </a>
                <a href="https://x.com/Gazzettino" className="me-3">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    color="#505050"
                    fontSize={17}
                  />
                </a>
                <a href="#" className="me-3">
                  <FontAwesomeIcon
                    icon={faReply}
                    color="rgb(222, 222, 222)"
                    fontSize={17}
                    flip="horizontal"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Aside Content */}
      <aside className="flex-grow-2 ps-4 bg-primary">
        <section className="mb-4">
          <h2 className="h5">IL VIDEO DEL GIORNO</h2>
          <img
            src="https://placehold.co/150x100"
            alt="video preview"
            className="img-fluid mb-2"
          />
          <p>
            <strong>Lorem Ipsum</strong>: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{" "}
            <span className="text-danger">VIDEO</span>
          </p>
        </section>

        <section>
          <h2 className="h5 text-primary">ITALIA&MONDO</h2>
          <img
            src="https://placehold.co/150x100"
            alt="poste italiane"
            className="img-fluid mb-2"
          />
          <p>
            <strong>Lorem Ipsum</strong>: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{" "}
            <span className="text-danger">Requisiti e domanda</span>
          </p>
          <p>
            <em>&#8226; CU 2025 NoiPa</em>
          </p>
          <p>
            <em>di Redazione web</em>
          </p>
        </section>
      </aside>
    </main>
  );
};

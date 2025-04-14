import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Article.scss";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

export interface Article {
  category: string;
  imgs: { src: string; alt: string }[];
  title: string;
  others: string[];
  author: string;
  aside?: boolean;
}

export const ArticleComponent: React.FC<{
  article: Article;
  noBorderBottom?: boolean;
}> = ({ article, noBorderBottom }) => {
  const { category, imgs, title, others, author, aside } = article;

  const renderImage = () => {
    return (
      <div className="d-flex gap-2 mb-2 w-100">
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="img-fluid"
            style={{
              width: `${100 / imgs.length}%`,
            }}
          />
        ))}
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <footer>
        <div className="d-flex">
          <p>
            <small>
              <em>di {author}</em>
            </small>
          </p>
          <div className="flex-grow-1 d-flex justify-content-end">
            <a href="https://www.facebook.com/gazzettino.it" className="me-3">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="social-icon facebook"
                fontSize={17}
              />
            </a>
            <a href="https://x.com/Gazzettino" className="me-3">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="social-icon twitter"
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
      </footer>
    );
  };

  const renderOtherNews = () => {
    return (
      <p className="text-muted mt-2 other-news">
        {others.map((other, index) => (
          <a key={index} href="#">
            <strong className="bullet">&#8226;</strong> {other}{" "}
          </a>
        ))}
      </p>
    );
  };

  const renderTitle = () => {
    return (
      <h1 className="news-title">
        <a href="#">{title}</a>
      </h1>
    );
  };

  const renderContent = () => {
    if (aside)
      return (
        <>
          <header>
            <p className="section-title mb-1">{category}</p>
          </header>
          <div className="row">
            <div className="col-md-6">{renderImage()}</div>
            <div className="col-md-6">
              {renderTitle()}
              {renderOtherNews()}
              {renderFooter()}
            </div>
          </div>
        </>
      );
    else
      return (
        <article className="main-article">
          <header>
            <p className="section-title mb-1">{category}</p>
            {renderImage()}
            {renderTitle()}
          </header>
          {renderOtherNews()}
          {renderFooter()}
        </article>
      );
  };

  return (
    <article
      style={{
        borderBottom: noBorderBottom ? "none" : "rgb(222, 222, 222) 1px solid",
      }}
      className="main-article"
    >
      {renderContent()}
    </article>
  );
};

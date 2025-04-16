import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Article.scss";
import { useMemo } from "react";
import classnames from "classnames";

export interface Article {
  category: string;
  imgs: { src: string; alt: string }[];
  title: string;
  others: string[];
  author: string;
  aside?: boolean;
  size?: "big" | "small" | "medium";
  smallImage?: boolean;
  hideButtons?: boolean;
  noMargin?: boolean;
}

export const ArticleComponent: React.FC<{
  article: Article;
  noBorderBottom?: boolean;
}> = ({ article, noBorderBottom }) => {
  const {
    category,
    imgs,
    size,
    title,
    others,
    author,
    aside,
    hideButtons,
    smallImage,
    noMargin,
  } = article;

  const facebookRepliesCount = useMemo(() => {
    const repliesCount = Math.floor(Math.random() * 100);
    return repliesCount;
  }, []);

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
          {author && (
            <p className="author">
              <small>
                <em>di {author}</em>
              </small>
            </p>
          )}
          {!hideButtons && (
            <div className="flex-grow-1 d-flex justify-content-end">
              <a
                href="https://www.facebook.com/gazzettino.it"
                className="me-2 social-icon facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  fontSize={17}
                  style={{ marginRight: "3px" }}
                />
                {facebookRepliesCount > 0 && (
                  <small>{facebookRepliesCount}</small>
                )}
              </a>
              <a
                href="https://x.com/Gazzettino"
                className="me-2 social-icon twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} fontSize={17} />
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
          )}
        </div>
      </footer>
    );
  };

  const renderOtherNews = () => {
    if (!others || others.length === 0) return null;
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
    if (!title) return null;
    return (
      <h1 className="news-title">
        <a href="#">{title}</a>
      </h1>
    );
  };

  const renderContent = () => {
    if (aside && (!others || others.length < 2))
      return (
        <article
          className={classnames("main-article", size, {
            nomargin: noMargin,
          })}
          style={{
            borderBottom: noBorderBottom
              ? "none"
              : "rgb(222, 222, 222) 1px solid",
          }}
        >
          {category && (
            <header>
              <p className="section-title mb-1">{category}</p>
            </header>
          )}
          <div className="row">
            <div className={smallImage ? "col-md-4" : "col-md-6"}>
              {renderImage()}
            </div>
            <div className={smallImage ? "col-md-8" : "col-md-6"}>
              {renderTitle()}
              {renderOtherNews()}
              {renderFooter()}
            </div>
          </div>
        </article>
      );

    if (aside)
      return (
        <article
          className={classnames("main-article", size, {
            nomargin: noMargin,
          })}
          style={{
            borderBottom: noBorderBottom
              ? "none"
              : "rgb(222, 222, 222) 1px solid",
          }}
        >
          {category && (
            <header>
              <p className="section-title mb-1">{category}</p>
            </header>
          )}
          <div className="row">
            <div className={smallImage ? "col-md-4" : "col-md-6"}>
              {renderImage()}
            </div>
            <div className={smallImage ? "col-md-8" : "col-md-6"}>
              {renderTitle()}
            </div>
          </div>

          <div>
            {renderOtherNews()}
            {renderFooter()}
          </div>
        </article>
      );
    else
      return (
        <article
          className={classnames("main-article", size, {
            nomargin: noMargin,
          })}
          style={{
            borderBottom: noBorderBottom
              ? "none"
              : "rgb(222, 222, 222) 1px solid",
          }}
        >
          <header>
            {category && <p className="section-title mb-1">{category}</p>}
            {renderImage()}
            {renderTitle()}
          </header>
          {renderOtherNews()}
          {renderFooter()}
        </article>
      );
  };

  return renderContent();
};

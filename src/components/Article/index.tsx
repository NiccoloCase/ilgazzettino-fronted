import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCamera, faPlay, faReply } from "@fortawesome/free-solid-svg-icons";
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
  action?: "video" | "photo";
  actionPosition?: "center" | "right";
}

export const ArticleComponent: React.FC<{
  article: Article;
  noBorderBottom?: boolean;
  index?: number;
}> = ({ article, noBorderBottom, index }) => {
  const {
    category,
    imgs,
    size,

    title,
    others,
    author,
    aside,
    hideButtons,
    action,
    actionPosition,
    smallImage,
    noMargin,
  } = article;

  const facebookRepliesCount = useMemo(() => {
    const repliesCount = Math.floor(Math.random() * 100);
    return repliesCount;
  }, []);

  const getAlt = (imgAlt: string) => {
    // Temporary fix to ensure alternative values are unique for testing purposes.
    // Note: This workaround is not required in the production implementation.
    let alt: string = imgAlt;
    if (index) alt += ":" + index;
    alt += ":" + Math.floor(Math.random() * 10000000);
    return alt;
  };

  const renderImage = () => {
    return (
      <div className="d-flex gap-2 mb-2 w-100">
        {imgs.map((img, index) => (
          <figure
            key={index}
            className="image-wrapper"
            style={{
              width: `${100 / imgs.length}%`,
              margin: 0,
            }}
          >
            <img src={img.src} alt={getAlt(img.alt)} className="img-fluid" />

            {action && (
              <div className={"image-overlay " + actionPosition}>
                <div className="video-player">
                  <FontAwesomeIcon
                    icon={action === "video" ? faPlay : faCamera}
                    style={{ width: "30%", height: "auto" }}
                  />
                </div>
              </div>
            )}
          </figure>
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
                aria-label="Share on Facebook"
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
                aria-label="Share on Twitter"
                className="me-2 social-icon twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} fontSize={17} />
              </a>
              <a href="#" className="me-3" aria-label="Share">
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

  const renderCatgory = (desktop = true) => {
    if (!category) return null;
    return (
      <p
        className={classnames("section-title mb-1", {
          [" d-none d-md-block "]: desktop,
          [" d-block d-md-none "]: !desktop,
        })}
      >
        {category}
      </p>
    );
  };

  const renderContent = () => {
    if (aside && (!others || others.length < 2))
      return (
        <article
          className={classnames("main-article", size, {
            nomargin: noMargin,
            aside: true,
          })}
          style={{
            borderBottom: noBorderBottom
              ? "none"
              : "rgb(222, 222, 222) 1px solid",
          }}
        >
          <header>{renderCatgory()}</header>
          <div className="container-fluid">
            <div className="row">
              <div className={smallImage ? "col-md-4" : "col-md-6"}>
                {renderImage()}
              </div>
              <div className={smallImage ? "col-md-8" : "col-md-6"}>
                {renderCatgory(false)}
                {renderTitle()}
                {renderOtherNews()}
                {renderFooter()}
              </div>
            </div>
          </div>
        </article>
      );

    if (aside)
      return (
        <article
          className={classnames("main-article", size, {
            nomargin: noMargin,
            aside: true,
          })}
          style={{
            borderBottom: noBorderBottom
              ? "none"
              : "rgb(222, 222, 222) 1px solid",
          }}
        >
          <header>{renderCatgory()}</header>
          <div className="container-fluid">
            <div className="row">
              <div className={smallImage ? "col-md-4" : "col-md-6"}>
                {renderImage()}
              </div>
              <div className={smallImage ? "col-md-8" : "col-md-6"}>
                {renderCatgory(false)}
                {renderTitle()}
              </div>
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
            {renderCatgory()}
            <div className="order-2 order-md-1">{renderImage()}</div>
            {renderCatgory(false)}
            {renderTitle()}
          </header>

          {renderOtherNews()}
          {renderFooter()}
        </article>
      );
  };

  return renderContent();
};

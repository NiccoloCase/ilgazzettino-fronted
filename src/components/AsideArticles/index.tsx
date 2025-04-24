import { Article, ArticleComponent } from "../Article";

export type AsideArticlesComponentProps = {
  asideArticles: Article[];
  mainArticles: Article[];
};

export const AsideArticlesComponent: React.FC<{
  data: AsideArticlesComponentProps;
}> = ({ data }) => {
  return (
    <section
      className="aside-articles mb-4 "
      style={{
        borderBottom: "rgb(222, 222, 222) 1px solid",
      }}
      aria-labelledby="aside-articles-heading "
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-8 p-0">
            <h2 id="aside-articles-heading" className="visually-hidden">
              Articles
            </h2>
            {data.mainArticles.map((article, index) => (
              <article key={"main-" + index} className="mb-3">
                <ArticleComponent
                  index={index}
                  article={{
                    ...article,
                    aside: true,
                  }}
                />
              </article>
            ))}
          </div>
          <aside
            className="col-md-4 d-lg-block d-none"
            aria-label="Related articles"
          >
            <h3 className="visually-hidden">Related Articles</h3>
            {data.asideArticles.map((article, index) => (
              <article key={`aside-${index}`} className="mb-3">
                <ArticleComponent index={index} article={article} />
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

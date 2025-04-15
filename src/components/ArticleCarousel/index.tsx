import { Article, ArticleComponent } from "../Article";
import { CategoryTitle } from "../CategoryTitle";

export type ArticleCarousel = {
  articles: Article[];
  title?: string;
  logo?: string;
  vertical?: boolean;
  background?: string;
  noMargin: boolean;
};

export const ArticleCarousel: React.FC<{
  data: ArticleCarousel;
}> = ({ data }) => {
  return (
    <div
      className={"article-carousel mb-4 "}
      style={{
        borderBottom: "rgb(222, 222, 222) 1px solid",
      }}
    >
      <CategoryTitle title={data.title} logo={data.logo} />

      <div
        className={
          "g-3 " +
          (data.vertical ? "d-flex flex-column" : "row") +
          (data.title || data.logo ? " mt-2" : "")
        }
        style={
          data.background
            ? {
                background: data.background,
              }
            : {}
        }
      >
        {data.articles.map((article, index) => (
          <div
            className={data.vertical ? (data.noMargin ? "" : "mb-3") : "col"}
            key={index}
          >
            <ArticleComponent
              article={{
                noMargin: data.noMargin,
                ...article,
              }}
              noBorderBottom={!data.vertical || data.articles.length < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

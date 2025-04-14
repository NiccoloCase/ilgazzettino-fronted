import { Article, ArticleComponent } from "../Article";

export type ArticleCarousel = {
  articles: Article[];
  title: string;
};

export const ArticleCarousel: React.FC<{
  data: ArticleCarousel;
}> = ({ data }) => {
  return (
    <div
      className="article-carousel mb-4 "
      style={{
        borderBottom: "rgb(222, 222, 222) 1px solid",
      }}
    >
      <h2 className="mb-3">{data.title}</h2>

      <div className="row g-3 ">
        {data.articles.map((article, index) => (
          <div className="col" key={index}>
            <ArticleComponent article={article} noBorderBottom />
          </div>
        ))}
      </div>
    </div>
  );
};

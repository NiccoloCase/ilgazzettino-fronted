import { Article, ArticleComponent } from "../../components/Article";
import { ArticleCarousel } from "../../components/ArticleCarousel";
import { CategoryTitle } from "../../components/CategoryTitle";
import VotingComponent from "../../components/VotingComponent";
import { ASIDE_NEWS, CATEGORIES_GRID, GridItem, MAIN_NEWS } from "./content";

export const HomePageMainSection = () => {
  const renderGridItem = (item: GridItem, index: number) => {
    switch (item.type) {
      case "article":
        return (
          <ArticleComponent
            key={"ITEM" + index}
            index={index}
            article={item.data as Article}
          />
        );
      case "article-carousel":
        return (
          <ArticleCarousel
            key={"ITEM" + index}
            data={item.data as ArticleCarousel}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <main className="container-fluid m-0 my-4 d-flex">
        <section className="main-section  pe-4">
          {MAIN_NEWS.map(renderGridItem)}
        </section>

        <aside className="ps-4">
          <CategoryTitle title="Il Video del Giorno" black />
          <div className="mt-3 mb-4">
            <ArticleComponent
              article={{
                imgs: [
                  {
                    src: "https://placehold.co/200x120",
                    alt: "Video del giorno",
                  },
                ],
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                others: [],
                category: "",
                author: "",
                size: "medium",
                action: "video",
                actionPosition: "center",
              }}
            />
          </div>

          <CategoryTitle title="ITALIA&MONDO" />

          <div className="mt-3">{ASIDE_NEWS.map(renderGridItem)}</div>

          <div>
            <CategoryTitle title="SONDAGGGI" black />
            <VotingComponent />
          </div>
        </aside>
      </main>

      <section>{CATEGORIES_GRID.map(renderGridItem)}</section>
    </>
  );
};

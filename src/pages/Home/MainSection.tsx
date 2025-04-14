import { Article, ArticleComponent } from "../../components/Article";
import { ArticleCarousel } from "../../components/ArticleCarousel";

export interface GridItem {
  type: "article" | "article-carousel";
  data: Article | ArticleCarousel;
  category: string;
  id: number;
}

export const MAIN_NEWS = [
  {
    id: 1,
    type: "article",
    data: {
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
  },
  {
    id: 2,
    type: "article",
    data: {
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
  },
  {
    id: 3,
    type: "article",
    data: {
      category: "POLITICA",
      imgs: [{ src: "https://placehold.co/227x125", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      others: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      ],
      author: "Giovanni Bianchi",
      aside: true,
    },
  },

  {
    id: 4,
    type: "article-carousel",
    data: {
      title: "",
      articles: [
        {
          category: "PADOVA",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
          ],
          author: "Giovanni Bianchi",
          aside: false,
        },
        {
          category: "POLITICA",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
          ],
          author: "Giovanni Bianchi",
          aside: false,
        },

        {
          category: "IL LUTTO",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
          ],
          author: "Giovanni Bianchi",
          aside: false,
        },
      ],
    },
  },
] as GridItem[];

export const HomePageMainSection = () => {
  const renderGridItem = (item: GridItem) => {
    switch (item.type) {
      case "article":
        return (
          <ArticleComponent key={item.id} article={item.data as Article} />
        );
      case "article-carousel":
        return (
          <ArticleCarousel key={item.id} data={item.data as ArticleCarousel} />
        );
      default:
        return null;
    }
  };

  return (
    <main className="container my-4 d-flex">
      <section className="flex-grow-1 pe-4">
        {MAIN_NEWS.map(renderGridItem)}
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

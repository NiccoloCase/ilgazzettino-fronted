import { Article, ArticleComponent } from "../../components/Article";
import { ArticleCarousel } from "../../components/ArticleCarousel";
import { CategoryTitle } from "../../components/CategoryTitle";
import VotingComponent from "../../components/VotingComponent";

export interface GridItem {
  type: "article" | "article-carousel";
  data: Article | ArticleCarousel;
  category: string;
}

export const MAIN_NEWS = [
  {
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
    type: "article-carousel",
    data: {
      title: "",
      articles: [
        {
          category: "PADOVA",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. "],
          author: "Giovanni Bianchi",
          aside: false,
          size: "small",
        },
        {
          category: "POLITICA",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
          author: "Giovanni Bianchi",
          aside: false,
          size: "small",
        },

        {
          category: "IL LUTTO",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
          author: "Giovanni Bianchi",
          aside: false,
          size: "small",
        },
      ],
    },
  },

  {
    type: "article-carousel",
    data: {
      title: "",
      logo: "assets/moltofood.svg",
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },

        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
      ],
    },
  },

  {
    type: "article-carousel",
    data: {
      title: "",
      logo: "assets/moltosalute.svg",
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },

        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
      ],
    },
  },
  {
    type: "article-carousel",
    data: {
      title: "VIDEO",
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },

        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
      ],
    },
  },

  {
    type: "article",
    data: {
      category: "Cultura, Spettacoli e Tv".toUpperCase(),
      imgs: [{ src: "https://placehold.co/227x125", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

      author: "Mario Bianchi",
      aside: true,
    },
  },
] as GridItem[];

const ASIDE_NEWS = [
  {
    type: "article",
    data: {
      category: "",
      imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      others: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
      author: "Redazione Web",
      size: "medium",
    },
  },
  {
    type: "article",
    data: {
      category: "",
      imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      others: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      author: "Mario Rossi",
      size: "medium",
    },
  },
  {
    type: "article",
    data: {
      category: "",
      imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      others: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      ],
      author: "Giovanni Bianchi",
      size: "medium",
    },
  },
  {
    type: "article",
    data: {
      category: "",
      imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      others: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      ],
      author: "Giovanni Bianchi",
      size: "medium",
    },
  },
  {
    type: "article",
    data: {
      category: "",
      imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      others: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      ],
      author: "Giovanni Bianchi",
      size: "medium",
    },
  },
  {
    type: "article",
    data: {
      category: "",
      imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      others: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      ],
      author: "Giovanni Bianchi",
      size: "medium",
    },
  },
  {
    type: "article",
    data: {
      category: "",
      imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      others: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      ],
      author: "Giovanni Bianchi",
      size: "medium",
    },
  },
  {
    type: "article-carousel",
    data: {
      logo: "/assets/moltofood.svg",
      vertical: true,
      noMargin: true,
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
          smallImage: true,
          hideButtons: true,
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
          smallImage: true,
          hideButtons: true,
        },
      ],
    },
  },
  {
    type: "article-carousel",
    data: {
      title: "BLOG",
      background: "#ededed",
      vertical: true,
      noMargin: true,
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
          smallImage: true,
          hideButtons: true,
          author: "Niccolò Rossi",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
          smallImage: true,
          hideButtons: true,
          author: "Niccolò Rossi",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
          smallImage: true,
          hideButtons: true,
          author: "Niccolò Rossi",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
          smallImage: true,
          hideButtons: true,
          author: "Niccolò Rossi",
        },
      ],
    },
  },
  {
    type: "article-carousel",
    data: {
      title: "IN VISITA",
      vertical: true,
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
      ],
    },
  },
  {
    type: "article-carousel",
    data: {
      title: "VENICE VISIT PASS",
      vertical: true,
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
      ],
    },
  },

  {
    type: "article-carousel",
    data: {
      title: "LE PIU' CONDIVISE",
      vertical: true,
      noMargin: true,
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
          smallImage: true,
          hideButtons: true,
          author: "Marco Antonio",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
          smallImage: true,
          hideButtons: true,
          author: "Marco Antonio",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
          smallImage: true,
          hideButtons: true,
          author: "Marco Antonio",
        },
      ],
    },
  },
] as GridItem[];

const CATEGORIES_ARTICLES = [
  {
    category: "",
    imgs: [{ src: "https://placehold.co/227x124", alt: "lorem ipsum" }],
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Giovanni Bianchi",
    size: "small",
  },
  {
    category: "",
    imgs: [{ src: "https://placehold.co/227x124", alt: "lorem ipsum" }],
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Giovanni Bianchi",
    size: "small",
  },

  {
    category: "",
    imgs: [{ src: "https://placehold.co/227x124", alt: "lorem ipsum" }],
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Giovanni Bianchi",
    size: "small",
  },
  {
    category: "",
    imgs: [{ src: "https://placehold.co/227x124", alt: "lorem ipsum" }],
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Giovanni Bianchi",
    size: "small",
  },
] as Article[];

const CATEGORIES_GRID = [
  {
    type: "article-carousel",
    data: {
      title: "MOTORI",
      articles: CATEGORIES_ARTICLES,
    },
  },
  {
    type: "article-carousel",
    data: {
      title: "VIAGGI",
      articles: CATEGORIES_ARTICLES,
    },
  },
  {
    type: "article-carousel",
    data: {
      title: "SALUTE",
      articles: CATEGORIES_ARTICLES,
    },
  },
  {
    type: "article-carousel",
    data: {
      title: "MODA",
      articles: CATEGORIES_ARTICLES,
    },
  },
  {
    type: "article-carousel",
    data: {
      title: "ANIMALI",
      articles: CATEGORIES_ARTICLES,
    },
  },
] as GridItem[];

export const HomePageMainSection = () => {
  const renderGridItem = (item: GridItem, index: number) => {
    switch (item.type) {
      case "article":
        return (
          <ArticleComponent
            key={"ITEM" + index}
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
      <main className="container my-4 d-flex">
        <section className="main-section  pe-4">
          {MAIN_NEWS.map(renderGridItem)}
        </section>

        <aside className="ps-4">
          <CategoryTitle title="Il Video del Giorno" black />
          <div className="mt-3 mb-4">
            <ArticleComponent
              article={{
                imgs: [
                  { src: "https://placehold.co/200x120", alt: "lorem ipsum" },
                ],
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                others: [],
                category: "",
                author: "",
                size: "medium",
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

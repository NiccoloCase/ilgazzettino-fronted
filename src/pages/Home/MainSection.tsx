import { Article, ArticleComponent } from "../../components/Article";
import { ArticleCarousel } from "../../components/ArticleCarousel";
import { CategoryTitle } from "../../components/CategoryTitle";

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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 11,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
    type: "article-carousel",
    data: {
      title: "LE PIU' CONDIVISE",
      vertical: true,
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/100x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          aside: true,
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
    id: 1,
    type: "article-carousel",
    data: {
      title: "MOTORI",
      articles: CATEGORIES_ARTICLES,
    },
  },
  {
    id: 2,
    type: "article-carousel",
    data: {
      title: "VIAGGI",
      articles: CATEGORIES_ARTICLES,
    },
  },
  {
    id: 3,
    type: "article-carousel",
    data: {
      title: "SALUTE",
      articles: CATEGORIES_ARTICLES,
    },
  },
  {
    id: 4,
    type: "article-carousel",
    data: {
      title: "MODA",
      articles: CATEGORIES_ARTICLES,
    },
  },
  {
    id: 4,
    type: "article-carousel",
    data: {
      title: "ANIMALI",
      articles: CATEGORIES_ARTICLES,
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
        </aside>
      </main>

      <section>{CATEGORIES_GRID.map(renderGridItem)}</section>
    </>
  );
};

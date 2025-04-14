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
];

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
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              others: [],
              category: "",
              author: "",
              size: "medium",
            }}
          />
        </div>

        <CategoryTitle title="ITALIA&MONDO" />

        <div className="mt-3">
          {ASIDE_NEWS.map((item) => (
            <div key={item.id} className="mb-4">
              <ArticleComponent
                article={item.data as Article}
              ></ArticleComponent>
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
};

import { Article } from "../../components/Article";
import { ArticleCarousel } from "../../components/ArticleCarousel";
import { AsideArticlesComponentProps } from "../../components/AsideArticles";

export interface GridItem {
  type: "article" | "article-carousel" | "aside-articles";
  data: Article | ArticleCarousel | AsideArticlesComponentProps;
  category: string;
}

export const TOPICS = [
  "Liliana Resinovich",
  "Luca Zaia",
  "Filippo Turetta",
  "Cristian Buonaiuto",
  "Baby Gang",
];

export const SECTIONS = [
  "Italia",
  "Economia",
  "Sport",
  "Esteri",
  "Tecnologia",
  "Cultura e Spettacoli",
  "Gossip",
  "Animali",
  "Blog",
  "Viaggi",
  "Salute",
  "Motori",
  "Europa",
];

export const REGIONS = [
  "VENEZIA – MESTRE",
  "TREVISO",
  "PADOVA",
  "BELLUNO",
  "ROVIGO",
  "VICENZA – BASSANO",
  "VERONA",
  "PORDENONE",
  "UDINE",
  "TRIESTE",
  "NORDEST",
];

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
          action: "video",
          actionPosition: "right",
        },
      ],
    },
  },

  {
    type: "article",
    data: {
      category: "VICENZA",
      imgs: [{ src: "https://placehold.co/227x125", alt: "lorem ipsum" }],
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      others: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          category: "L'INTERVENTO",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
          size: "medium",
        },
        {
          category: "ECONOMIA",
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis necessitatibus. Possimus iusto dolorum vitae.",
          ],
          size: "medium",
        },
      ],
    },
  },

  {
    type: "article",
    data: {
      category: "L'OFFERTA",
      imgs: [{ src: "/assets/promo.jpg", alt: "Promo" }],
      title:
        "Abbonamento al giornale digitale e al sito a soli 9€/mese per 1 anno",

      aside: true,
      hideButtons: true,
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

  ////////////////////////////////////////////////////////////
  /// VIDEO
  ////////////////////////////////////////////////////////////

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
          action: "video",
          actionPosition: "center",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          action: "video",
          actionPosition: "center",
        },

        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          action: "video",
          actionPosition: "center",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
          action: "video",
          actionPosition: "center",
        },
      ],
    },
  },

  ////////////////////////////////////////////////////////////
  /// CULTURA
  ////////////////////////////////////////////////////////////
  {
    type: "article-carousel",
    data: {
      title: "Cultura, Spettacoli e Tv".toUpperCase(),
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/220x130", alt: "lorem ipsum" }],
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam provident iure, consequuntur iste ullam quasi.",
          author: "Mario Bianchi",
          aside: true,
        },
      ],
    },
  },

  {
    type: "article-carousel",
    data: {
      title: "",
      articles: [
        {
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas corrupti id impedit natus voluptate ratione similique in rerum.",
          ],
          author: "Giovanni Rossi",
          aside: false,
          size: "small",
        },
        {
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero architecto non dolor vel voluptas ut, aliquid ullam officia molestias, veniam nesciunt.",
          ],
          author: "Marco Bianchi",
          aside: false,
          size: "small",
        },
        {
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: ["Foto"],
          author: "Elon Musk",
          aside: false,
          size: "small",
          action: "photo",
          actionPosition: "center",
        },
      ],
    },
  },

  ////////////////////////////////////////////////////////////
  /// ASIDE
  ////////////////////////////////////////////////////////////
  {
    type: "aside-articles",
    data: {
      mainArticles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis necessitatibus.",
          size: "small",
          others: [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis necessitatibus.",
          ],
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis necessitatibus.",
          ],
          size: "small",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis necessitatibus.",
          size: "small",
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis necessitatibus.",
          size: "small",
          others: [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis necessitatibus.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis necessitatibus.",
          ],
        },
        {
          category: "",
          imgs: [{ src: "https://placehold.co/300x200", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          size: "small",
          others: [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis necessitatibus.",
          ],
        },
      ],
      asideArticles: [
        {
          category: "CACCIA AL JACKPOT",
          imgs: [{ src: "https://placehold.co/220x130", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
        {
          category: "MONITORAGGIO",
          imgs: [{ src: "https://placehold.co/220x130", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
        {
          category: "IL SISMA",
          imgs: [{ src: "https://placehold.co/220x130", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
        {
          category: "USA",
          imgs: [{ src: "https://placehold.co/220x130", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          size: "small",
        },
      ],
    },
  },

  ////////////////////////////////////////////////////////////
  /// SPORT
  ////////////////////////////////////////////////////////////
  {
    type: "article-carousel",
    data: {
      title: "Sport".toUpperCase(),
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/220x130", alt: "lorem ipsum" }],
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam provident iure, consequuntur iste ullam quasi.",
          author: "Giovanni Pascoli",
          aside: true,
        },
      ],
    },
  },

  {
    type: "article-carousel",
    data: {
      title: "",
      articles: [
        {
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
          author: "Redazione sport",
          aside: false,
          size: "small",
          action: "video",
          actionPosition: "center",
        },
        {
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officiis.",
          ],
          author: "Redazione sport",
          aside: false,
          size: "small",
          action: "video",
          actionPosition: "center",
        },
        {
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officiis.",
          others: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
          author: "Redazione sport",
          aside: false,
          size: "small",
          action: "video",
          actionPosition: "center",
        },
      ],
    },
  },

  ////////////////////////////////////////////////////////////
  /// GOSSIP
  ////////////////////////////////////////////////////////////
  {
    type: "article-carousel",
    data: {
      title: "Gossip".toUpperCase(),
      articles: [
        {
          category: "",
          imgs: [{ src: "https://placehold.co/220x130", alt: "lorem ipsum" }],
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam provident iure, consequuntur iste ullam quasi.",
          author: "Giovanni Rana",
          aside: true,
          others: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam provident iure, consequuntur iste ullam quasi.",
            "VIDEO",
          ],
        },
      ],
    },
  },

  {
    type: "article-carousel",
    data: {
      title: "",
      articles: [
        {
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          others: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "VIDEO",
          ],
          author: "Redazione Web",
          aside: false,
          size: "small",
          video: true,
        },
        {
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

          author: "Redazione Web",
          aside: false,
          size: "small",
          video: true,
        },
        {
          imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officiis.",
          others: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
          author: "Redazione Web",
          aside: false,
          size: "small",
          video: true,
        },
      ],
    },
  },
] as GridItem[];

export const ASIDE_NEWS = [
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
    type: "article",
    data: {
      category: "",
      imgs: [{ src: "https://placehold.co/200x100", alt: "lorem ipsum" }],
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      others: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnisiste natus error sit voluptatem accusantium doloremque laudantium.",
      ],
      author: "Giovanni Verdi",
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
      author: "Marco Bianchi",
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
      hideOnMobile: true,
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
      vertical: true,
      title: "Gli inserti".toUpperCase(),
      articles: [
        {
          imgs: [{ src: "/assets/gli_inserti.jpg", alt: "lorem ipsum" }],
          hideButtons: true,
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

export const CATEGORIES_GRID = [
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

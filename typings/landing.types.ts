// types.ts
type Image = {
  height: number;
  src: string;
  width: number;
};

type Section = {
  sectionType: string;
  theme: string;
  title: string;
  subtitle?: string;
  image?: Image;
};

export type HomeData = {
  meta: {
    description: string;
    image: string;
    title: string;
  };
  sections: Section[];
};

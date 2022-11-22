interface IProject {
  image: string;
  title: string;
  about: string;
  keywords: string;
  github?: string;
  website?: string;
}

export interface ICard {
  sequence: number;
  project: IProject;
}

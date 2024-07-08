export interface IArticle {
  body: string;
  childArticles: IArticle[];
  isRoot: boolean;
  parentId: string;
  technologyId: string;
  title: string;
  _id: string;
}

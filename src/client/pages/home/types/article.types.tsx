export interface Author {
  id: string;
  fullName: string;
}

export interface ArticleItemProps {
  id: string;
  createdAt: string;

  title: string;
  content: string;
  cover: string;
  slug: string;
  author: Author;
  readTime: number;
}

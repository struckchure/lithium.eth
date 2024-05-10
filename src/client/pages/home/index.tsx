import { ArticleItem } from "./components/article-item.component";
import { ArticleItemProps } from "./types/article.types";

export function HomePage() {
  const articles: ArticleItemProps[] = Array(2).fill({
    id: "1",
    createdAt: new Date().toISOString(),
    title: "Top 5 Most Common Mistakes in Golang",
    content:
      "Golang, (correct name is just “Go”), is an open-source programming language that offers efficiency, simplicity, and reliability. While Go is known for its ease of use, especially for beginners, there are common...",
    cover:
      "https://miro.medium.com/v2/resize:fill:112:112/0*MtwTqI-HM95Lr2SR.jpg",
    slug: "golang",
    author: {
      id: "1",
      fullName: "Weilson Wonder",
    },
    readTime: 60_000 * 5,
  });

  return (
    <>
      {articles.map((article, index) => (
        <ArticleItem key={index} {...article} />
      ))}
    </>
  );
}

import styles from "./page.module.css";
import { getAllArticles } from "./(server)/api";
import { ROUTING } from "./routing";
import AppLink from "./shared/components/app-link";
const ARTICLES_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const page = Number.parseInt(searchParams['page'] ?? 1);
  const allArticles = await getAllArticles();

  const articles = allArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );
  
  const nextPageUrl = {
    search: new URLSearchParams({
      page: String(page + 1),
    }).toString(),
  };

  return (
    <>
      <h1>DeV blog, page {page}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.name}>
            <AppLink href={ROUTING.article(article.name)}>
              {article.header}
            </AppLink>
          </li>
        ))}
      </ul>

      <AppLink href={nextPageUrl} >
        Next
      </AppLink>
    </>
  );
}

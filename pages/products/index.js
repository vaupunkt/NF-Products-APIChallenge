import useSWR from "swr";
import Link from "next/link";

export default function ProductsPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.map((date) => {
        return (
          <li key={date.id}>
            <h2>
              <Link href={`/products/${date.id}`}>{date.name}</Link>
            </h2>
            <p>{date.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

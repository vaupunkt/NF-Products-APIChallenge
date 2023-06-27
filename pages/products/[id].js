import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <section>
      <h2>{data.name}</h2>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>{data.description}</p>
    </section>
  );
}

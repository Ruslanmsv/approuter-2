export default async function Home() {
  const res = await fetch("http://localhost:3000/api/test");

  const { message } = await res.json();

  return <div>{message}</div>;
}

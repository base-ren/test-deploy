export default function Home() {
  return (
    <main className="container">
      <div>
        <div>test</div>
        <h1>API URL</h1>
        <h2>{`${process.env.NEXT_PUBLIC_API_URL || "Not found"} `}</h2>
      </div>
    </main>
  );
}

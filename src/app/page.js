import { connect, client } from "../utils/mongodb";
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Next.js with MongoDB</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

export async function getStaticProps() {
  await connect(); // Connect to MongoDB

  const db = client.db();
  const collection = db.collection("your_collection"); // Replace with your collection name

  const data = await collection.find().toArray();

  return {
    props: {
      data,
    },
  };
}

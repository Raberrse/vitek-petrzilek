
interface HomeProps {
  params: {id: string}
}

function Home({params}: HomeProps) {
  const id = params.id

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
  ];

  return { paths, fallback: false };
}

export default Home;

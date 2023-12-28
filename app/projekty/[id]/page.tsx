interface PageProps {
  id: string;
}

function Page({ id }: PageProps) {
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
    { params: { id: '3' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: {params: {id: string}}) {
  const id = params.id;
  // Fetch data based on the id if needed

  // Return props
  return {
    props: {
      id,
    },
  };
}

export default Page;
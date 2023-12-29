interface PageProps {
  params: {id: string}
}

export const dynamicParams = true

export default function Page({ params }: PageProps) {
  const {id} = params

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

const paths = [
  { params: { id: "1" } },
  { params: { id: "2" } },
  { params: { id: "3" } },
  { params: { id: "4" } },
  { params: { id: "5" } },
  { params: { id: "6" } },
  { params: { id: "7" } },
  { params: { id: "8" } },
  { params: { id: "9" } },
];

export function generateStaticParams() {
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

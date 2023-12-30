import { Video } from "@/components/projects";
import { projects } from "@/constants";

interface PageProps {
  params: {id: string}
}

export const dynamicParams = false
export const dynamic = 'force-static';

const array = projects.slice(0, 3)

export default function Page({ params }: PageProps) {
  const {id} = params
  const videoLink = array[parseInt(id)].videoLink
  
  return (
    <div className="bg-[#484848] fixed top-0 left-0 w-full h-screen z-30">
      <Video videoLink={videoLink} />
    </div>
  );
}


const paths = [
  { params: { id: "0" } },
  { params: { id: "1" } },
  { params: { id: "2" } },
];

export function generateStaticParams() {
  return paths.map((path) => ({
    id: path.params.id,
  }));
}
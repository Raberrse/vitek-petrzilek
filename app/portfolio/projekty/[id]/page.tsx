import { Video } from "@/components/projects";
import { projects } from "@/constants";

interface PageProps {
  params: {id: string}
}

export const dynamicParams = false
export const dynamic = 'force-static';

export default function Page({ params }: PageProps) {
  const {id} = params
  const videoLink = projects[parseInt(id)].videoLink
  
  return (
    <div className="bg-[#484848] fixed top-0 left-0 w-full h-screen z-30">
      <Video defaultRoute="/portfolio" videoLink={videoLink} />
    </div>
  );
}

const paths = [
  { params: { id: "0" } },
  { params: { id: "1" } },
  { params: { id: "2" } },
  { params: { id: "3" } },
  { params: { id: "4" } },
  { params: { id: "5" } },
  { params: { id: "6" } },
  { params: { id: "7" } },
  { params: { id: "8" } },
];

//* Next.js bug - generateStaticParams() not working with parallel routes -> defaults to dynamic
export function generateStaticParams() {
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

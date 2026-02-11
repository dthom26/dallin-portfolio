import ProjectCarousel3D from "./ProjectCarousel3D";
import projects from "./projectData";

export default function Projects({ onInfo }) {
  return <ProjectCarousel3D projects={projects} onInfo={onInfo} />;
}

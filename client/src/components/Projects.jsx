import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQuery";

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  console.log(data);
  return (
    <>
      <div className="row mt-4">
        {data.projects.length > 0 ? (
          data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>No Project</p>
        )}
      </div>
    </>
  );
}

export default Projects;

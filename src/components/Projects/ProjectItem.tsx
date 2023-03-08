import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.scss";

type ProjectItemProps = {
  name: string;
  image: string;
  id: number;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ name, image, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.projectItem}
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={styles.bgImage}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default ProjectItem;

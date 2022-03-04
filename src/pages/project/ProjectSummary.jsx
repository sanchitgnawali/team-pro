import React from "react";
import Avatar from "../../components/Avatar";

export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        {project.assignedUsersList.map((user) => (
          <Avatar key={user.photoURL} src={user.photoURL} />
        ))}
      </div>
    </div>
  );
}

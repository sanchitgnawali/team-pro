import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useCollection } from "./../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

import "./Create.css";

//category data
const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

export default function Create() {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("projects");

  const { documents } = useCollection("users");
  const { user } = useAuthContext();

  // Component States
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return {
          value: user,
          label: user.displayName,
        };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Project category not selected");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError(
        "Please assign users to the project before submitting the form."
      );
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((current) => ({
      displayName: current.value.displayName,
      photoURL: current.value.imgUrl,
      id: current.value.id,
    }));

    const project = {
      name,
      details,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      category: category.value,
      comments: [],
      createdBy,
      assignedUsersList,
    };

    await addDocument(project);
    if (!response.error) {
      navigate("/");
    }
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name</span>
          <input
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>

        <label>
          <span>Project Details</span>
          <textarea
            type="text"
            required
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            value={details}
          />
        </label>

        <label>
          <span>Set due data</span>
          <input
            type="date"
            required
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
            value={dueDate}
          />
        </label>

        <label>
          <span>Project Category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>

        <label>
          <span>Assign project to:</span>

          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
        <button className="btn">Add Project</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

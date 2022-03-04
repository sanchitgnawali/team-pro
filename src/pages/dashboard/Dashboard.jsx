import Projectlist from "../../components/ProjectList";
import { useCollection } from "./../../hooks/useCollection";

// styles
import "./Dashboard.css";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <Projectlist projects={documents} />}
    </div>
  );
}

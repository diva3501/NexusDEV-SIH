import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  // Access state using useSelector
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);
  
  // Handle potential null user
  const { role, email, firstName, adminName } = user || {};

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  const displayName = role === "admin" ? adminName : firstName;

  return (
    <>
      {/* dashboard with data using tailwind */}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold">Dashboard</h1>
        <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold">User Data</h3>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-lg font-bold">Name: {displayName}</h4>
            <h4 className="text-lg font-bold">Email: {email}</h4>
            <h4 className="text-lg font-bold">Role: {role}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

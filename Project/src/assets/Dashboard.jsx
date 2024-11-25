import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  // Mock Data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ]);

  // Handlers
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  // Render Tabs
  const renderTab = () => {
    switch (activeTab) {
      case "users":
        return (
          <div>
            <button className="mb-4 px-4 py-2 bg-green-500 text-white rounded">
              Add User
            </button>
            <table className="w-full bg-white shadow rounded">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.status}</td>
                    <td className="p-2">
                      <button className="text-blue-500 mr-2">Edit</button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "roles":
        return (
          <div>
            <button className="mb-4 px-4 py-2 bg-green-500 text-white rounded">
              Add Role
            </button>
            <table className="w-full bg-white shadow rounded">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Role Name</th>
                  <th className="p-2">Permissions</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id}>
                    <td className="p-2">{role.name}</td>
                    <td className="p-2">{role.permissions.join(", ")}</td>
                    <td className="p-2">
                      <button className="text-blue-500 mr-2">Edit</button>
                      <button className="text-red-500">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "permissions":
        return (
          <div>
            <h2 className="text-xl mb-4">Manage Permissions</h2>
            <table className="w-full bg-white shadow rounded">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Role</th>
                  <th className="p-2">Permissions</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id}>
                    <td className="p-2">{role.name}</td>
                    <td className="p-2">{role.permissions.join(", ")}</td>
                    <td className="p-2">
                      <button className="text-blue-500 mr-2">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 border-b pb-2 mb-4">
        <button
          onClick={() => setActiveTab("users")}
          className={`px-4 py-2 ${
            activeTab === "users" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab("roles")}
          className={`px-4 py-2 ${
            activeTab === "roles" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Roles
        </button>
        <button
          onClick={() => setActiveTab("permissions")}
          className={`px-4 py-2 ${
            activeTab === "permissions" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Permissions
        </button>
      </div>
      {renderTab()}
    </div>
  );
};

export default Dashboard;

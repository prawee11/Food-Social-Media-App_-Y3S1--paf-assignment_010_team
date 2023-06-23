import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllUsers } from "../util/APIUtils";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
      } catch (error) {
        toast("Oops! Something went wrong.", { type: "error" });
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="home-container">
      <div className="container">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-100 dark:border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

import React, { useEffect, useState } from "react";

interface GetUsersType {
  id: number;
  email: string;
  password: string;
}

interface FormDataProps{
    users:GetUsersType[],
    setUsers: React.Dispatch<React.SetStateAction<GetUsersType[]>>
}

const FormData = ({users,setUsers}:FormDataProps) => {
//   const [users, setUsers] = useState<GetUsersType[]>([]);

  const handleDelete = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);

    localStorage.setItem("UsersData", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 ? (
            users.map((user, Index) => (
              <tr key={user.id}>
                <td>{Index}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h5 className="text-center">Users Not Found</h5>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FormData;

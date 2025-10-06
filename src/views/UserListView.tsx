import { Link } from "react-router-dom";
import { deleteUserById, getAllUsers } from "../api/UserAPI"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from "react";
import DeleteUser from "../components/DeleteUser";

export default function UserList() {

  const queryClient = useQueryClient();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers
  })

  const deleteMutation = useMutation({
    mutationFn: deleteUserById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setShowConfirm(false);
    },
  });

  const handleDeleteClick = (id: number) => {
    setSelectedUser(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (selectedUser !== null) {
      deleteMutation.mutate(selectedUser);
    }
  };

  if (isLoading) return <span className="loading loading-dots loading-xl"></span>

  if (data) return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-2xl font-bold opacity-60 tracking-wide text-center">Lista de Usuarios</li>
        {data.map((user) => (
          <li key={user.id} className="list-row">
            <div className="text-xl">{user.id}</div>
            <div>
              <div className="text-xl font-black uppercase">{user.username}</div>
              <div className="text-xs font-semibold opacity-60">{user.email}</div>
            </div>
            <button className="btn btn-soft btn-warning">
              <Link
                to={`/users/edit/${user.id}`}
              >
                Editar
              </Link>

            </button>
            <button className="btn btn-soft btn-error" onClick={() => handleDeleteClick(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {showConfirm && (
        <DeleteUser
          message="¿Deseas eliminar este usuario?"
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirm(false)}
          isDeleting={deleteMutation.isPending}
        />
      )}
    </>
  )
}

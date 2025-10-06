import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import type { GetAllUsers, UserEditForm } from "../types"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api/UserAPI";
import { toast } from "react-toastify";
import EditUserForm from "./EditUserForm";

type UserProps = {
    data: UserEditForm,
    userId: GetAllUsers['id']
}

export default function User({ data, userId }: UserProps) {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: data.email,
            username: data.username
        }
    })

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: updateUser,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
            queryClient.invalidateQueries({ queryKey: ['editUser', userId] })
            toast.success(data)
            navigate('/')
        }
    })

    const handleForm = (formData: UserEditForm) => {
        const data = {
            formData,
            userId
        }
        mutate(data)
    }

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-black">Editar Usuario</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para editar un usuario</p>

                <form
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    <EditUserForm
                        register={register}
                        errors={errors}
                    />

                    <button className="btn btn-neutral mt-4">Crear</button>
                </form>

            </div>
        </>
    )
}

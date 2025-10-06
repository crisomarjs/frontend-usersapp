import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserForm from "../components/UserForm";
import type { UserRegistrationForm } from "../types";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/UserAPI";
import { toast } from "react-toastify";


export default function CreateUserView() {

    const navigate = useNavigate()
    const initialValues: UserRegistrationForm = {
        email: '',
        password: '',
        username: ''
    }

    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues})

    const {mutate} = useMutation({
        mutationFn: createUser,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            navigate('/')
        }
    })

    const handleForm = (formData: UserRegistrationForm) => mutate(formData)

    return (
        <>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-black">Crear Usuario</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear un usuario</p>

                <form
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    <UserForm 
                        register={register}
                        errors={errors}
                    />

                    <button className="btn btn-neutral mt-4">Crear</button>
                </form>

            </div>
        </>
    )
}

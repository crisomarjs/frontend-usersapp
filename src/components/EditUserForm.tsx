import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { UserEditForm } from "../types";
import ErrorMessage from "./ErrorMessage";


type EditUserFormProps = {
    register: UseFormRegister<UserEditForm>,
    errors: FieldErrors<UserEditForm>
}

export default function EditUserForm({errors, register} : EditUserFormProps) {
    return (
        <>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border mt-4 p-4">

                <label htmlFor="email" className="label">Email</label>
                <input
                    id="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    {...register("email", {
                        required: "El Email es Obligatorio"
                    })}
                />

                {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}

                <label htmlFor="username" className="label">User Name</label>
                <input
                    id="username"
                    type="text"
                    className="input"
                    placeholder="Username"
                    {...register("username", {
                        required: "El Username es Obligatorio"
                    })}
                />

                {errors.username && (
                    <ErrorMessage>{errors.username.message}</ErrorMessage>
                )}

            </fieldset>
        </>
    )
}

import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { UserRegistrationForm } from "../types";
import ErrorMessage from "./ErrorMessage";


type UserFormProps = {
    register: UseFormRegister<UserRegistrationForm>,
    errors: FieldErrors<UserRegistrationForm>
}


export default function UserForm({errors, register} : UserFormProps) {
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

                <label htmlFor="password" className="label">Password</label>
                <input 
                    id="password" 
                    type="password" 
                    className="input" 
                    placeholder="Password" 
                    {...register("password", {
                        required:"El Password es Obligatorio"
                    })}
                />

                {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}

            </fieldset>
        </>
    )
}

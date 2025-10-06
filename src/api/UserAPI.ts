import { isAxiosError } from "axios";
import api from "../lib/axios";
import { userByIdSchema, userListSchema, type GetAllUsers, type UserEditForm, type UserRegistrationForm } from "../types";


export async function getAllUsers() {
    try {
        const {data} = await api('/users')
        const response = userListSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getUserById(userId:GetAllUsers['id']) {
    try {
        const {data} = await api(`/users/${userId}`)
        const response = userByIdSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function createUser(formData: UserRegistrationForm){
    try {
        const {data} = await api.post('/users', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

type UserAPIType = {
    formData: UserEditForm
    userId: GetAllUsers['id']
}

export async function updateUser({formData, userId}: UserAPIType) {
    try {
        const {data} = await api.put<string>(`/users/${userId}`, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function deleteUserById( userId: GetAllUsers['id']) {
    try {
        const {data} = await api.delete<string>(`/users/${userId}`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}
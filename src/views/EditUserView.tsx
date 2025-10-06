import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getUserById } from "../api/UserAPI"
import User from "../components/User"


export default function EditUserView() {

    const params = useParams()
    const userId = params.userId! 

    const { data, isLoading } = useQuery({
        queryKey: ['editUser', userId],
        queryFn: () => getUserById(+userId)
    })

    if (isLoading) return <span className="loading loading-dots loading-xl"></span>

  if(data) return <User data={data} userId={+userId} />
}

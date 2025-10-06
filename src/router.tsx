import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import UserListView from "./views/UserListView";
import CreateUserView from "./views/CreateUserView";
import EditUserView from "./views/EditUserView";


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path="/" element={<UserListView />} />
                        <Route path="/users/create" element={<CreateUserView />} />
                        <Route path="/users/edit/:userId" element={<EditUserView />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

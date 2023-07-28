import { Routes, Route } from "react-router-dom"

import UserCreate from "./pages/Users/Create"
import UserList from "./pages/Users/List"
import UserEdit from "./pages/Users/Edit"

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/">
                <Route path="/users" element={<UserList />} />
                <Route path="/users/new" element={<UserCreate />} />
                <Route path="/users/:id" element={<UserEdit />} />
            </Route>
        </Routes>
    ) 
}
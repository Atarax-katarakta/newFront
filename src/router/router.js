import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AddApplication from "../pages/Application/AddApplication";

export const router = [
    {
        path: "/",
        element: <MainPage/>
    },

    {
        path: "/auth/login",
        element: <LoginPage/>
    },
    {
        path: "/profile",
        element: <ProfilePage/>
    },
    {
        path: '/application',
        element: <AddApplication/>
    }
]
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

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
    }
]
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

import AddApplication from "../pages/Application/AddApplication";
import AddApplication_second from "../pages/Application/AddApplication_second";
import UniversityPage from "../pages/UniversityPage/UniversityPage";

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
    },
    {
        path: '/application/:regionid/:cityid/:specialtyid',
        element: <AddApplication_second/>
    },
    {
        path: "/university/:id",
        element: <UniversityPage/>
    }
]
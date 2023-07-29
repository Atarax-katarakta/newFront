import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

import AddApplication from "../pages/Application/AddApplication";
import AddApplication_second from "../pages/Application/CalculateCredit";
import UniversityPage from "../pages/UniversityPage/UniversityPage";
import CalculateCredit from "../pages/Application/CalculateCredit";
import UploadFiles from "../pages/Application/UploadFiles";
import SurveyPage from "../pages/SurveyPage/SurveyPage";

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
        path: '/credit_calculate/:specid',
        element: <CalculateCredit/>
    },
    {
        path: "/university/:id",
        element: <UniversityPage/>
    },
    {
        path: "/upload",
        element: <UploadFiles/>
    },
    {
        path: "/survey",
        element: <SurveyPage/>
    }
]
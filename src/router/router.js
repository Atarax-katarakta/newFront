import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

import AddApplication from "../pages/Application/aplicationUniver/AddApplication";
import UniversityPage from "../pages/UniversityPage/UniversityPage";
import CalculateCredit from "../pages/Application/CalculateCredit";
import UploadFiles from "../pages/Application/UploadFiles";
import SurveyPage from "../pages/SurveyPage/SurveyPage";
import ChooseApplication from "../pages/ChooseApplication/ChooseApplication";
import AddApplicationCourse from "../pages/Application/applicationCourse/AddApplicationCourse";
import AddApplicationOnline from "../pages/Application/applicationOnline/AddApplicationOnline";
import BankPage from "../pages/BankPage/BankPage";

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
        element: <ChooseApplication/>
    },
    {
        path: '/credit_calculate',
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
    },
    {
        path: "/application_univer",
        element: <AddApplication/>
    },
    {
        path: "/application_course",
        element: <AddApplicationCourse/>
    },
    {
        path: "/application_online",
        element: <AddApplicationOnline/>
    },
    {
        path: "bank/:id",
        element: <BankPage/>
    }
]
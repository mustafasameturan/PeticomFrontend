import AuthLayout from "../pages/Auth/AuthLayout";
import { Home, HomeLayout } from "../pages/Home";
import { Login, Register, VerificateEmail, ForgotPasswordSendEmail, VerificationCodePassword, ResetPassword, SoonPage, NotFound, AboutUs } from "../pages/Auth";
import { AdLayout, AdList, AdDetail } from "../pages/Ad";
import { PeticomerApplication, SettingsLayout, PetIdentityHome, UserProfileSettings, UpdatePasswordHome, CreateAd, PetInformations, BadgeSelector } from "../pages/Setting";
import AuthRoute from "../pages/Route/AuthRoute";
import PeticomerRoute from "../pages/Route/PeticomerRoute";

const routes = [
    {
        name: "home",
        path: "/",
        element: <HomeLayout />,
        peticomerAccess: true,
        children: [
            {
                index: true,
                peticomerAccess: true,
                element: <Home />
            }
        ]
    },
    {
        name: "auth",
        path: "auth",
        peticomerAccess: true,
        element: <AuthLayout />,
        children: [
            {
                index: true,
                peticomerAccess: true,
                element: <Login />
            },
            {
                name: "login",
                path: "login",
                peticomerAccess: true,
                element: <Login />
            },
            {
                name: "register",
                path: "register",
                peticomerAccess: true,
                element: <Register />
            },
            {
                name: "verificate",
                path: "verificate",
                peticomerAccess: true,
                element: <VerificateEmail /> 
            },
            {
                name: "forgot",
                path: "forgot",
                peticomerAccess: true,
                element: <ForgotPasswordSendEmail />
            },
            {
                name: "verificatepassword",
                path: "verificatepassword",
                peticomerAccess: true,
                element: <VerificationCodePassword />
            },
            {
                name: "reset",
                path: "reset",
                peticomerAccess: true,
                element: <ResetPassword />
            },
            {
                name: "notfound",
                path: "notfound",
                peticomerAccess: true,
                element: <NotFound/>
            },
            {
                name: "soon",
                path: "soon",
                peticomerAccess: true,
                element: <SoonPage/>
            },
            {
                name: "aboutus",
                path: "aboutus",
                peticomerAccess: true,
                element: <AboutUs/>
            }
        ]
    },
    {
        name: "ad",
        path: "ad",
        peticomerAccess: true,
        element: <AdLayout />,
        children: [
            {
                index: true,
                peticomerAccess: true,
                element: <AdList />
            },
            {
                name: "detail",
                path: "detail/:adId",
                peticomerAccess: true,
                element: <AdDetail />
            }
        ]
    },
    {
        name: "settings",
        path: "settings",
        auth: true,
        peticomerAccess: true,
        element: <SettingsLayout />,
        children: [
            {
                index: true,
                auth: true,
                peticomerAccess: true,
                element: <UserProfileSettings />
            },
            {
                name: "user",
                path: "user",
                auth: true,
                peticomerAccess: true,
                element: <UserProfileSettings />
            },
            {
                name: "petidentity",
                path: "petidentity",
                auth: true,
                peticomerAccess: true,
                element: <PetIdentityHome />
            },
            {
                name: "application",
                path: "application",
                auth: true,
                peticomerAccess: false,
                element: <PeticomerApplication />
            },
            {
                name: "passupdate",
                path: "passupdate",
                auth: true,
                peticomerAccess: true,
                element: <UpdatePasswordHome />
            },
            {
                name: "createad",
                path: "createad",
                auth: true,
                peticomerAccess: true,
                element: <CreateAd />
            },
            {
                name: "petinformations",
                path: "petinformations",
                auth: true,
                peticomerAccess: true,
                element: <PetInformations />
            },
            {
                name: "badge",
                path: "badge",
                auth: true,
                peticomerAccess: true,
                element: <BadgeSelector/>
            }
        ]
    },
    {
        name: "error404",
        path: "*",
        auth: false,
        element: <NotFound />
    }
];

const authMap = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <AuthRoute>{route.element}</AuthRoute>;
    }
    if(!route?.peticomerAccess){
        route.element = <PeticomerRoute>{route.element}</PeticomerRoute>
    }
    if (route?.children) {
        route.children = authMap(route.children)
    }
    return route
})

export default authMap(routes);

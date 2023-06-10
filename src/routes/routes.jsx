import AuthLayout from "../pages/Auth/AuthLayout";
import { Home, HomeLayout } from "../pages/Home";
import { Login, Register, VerificateEmail, ForgotPassword } from "../pages/Auth";
import { AdLayout, AdList, AdDetail } from "../pages/Ad";
import { PeticomerApplication, SettingsLayout, UserPetInfo, UserProfileSettings, UpdatePassword } from "../pages/Setting";

const routes = [
    {
        name: "home",
        path: "/",
        //auth: true,
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        name: "auth",
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                name: "login",
                path: "login",
                element: <Login />
            },
            {
                name: "register",
                path: "register",
                element: <Register />
            },
            {
                name: "verificate",
                path: "verificate",
                element: <VerificateEmail /> 
            },
            {
                name: "forgot",
                path: "forgot",
                element: <ForgotPassword/>
            }
        ]
    },
    {
        name: "ad",
        path: "ad",
        element: <AdLayout />,
        children: [
            {
                index: true,
                element: <AdList />
            },
            {
                name: "detail",
                path: "detail",
                element: <AdDetail />
            }
        ]
    },
    {
        name: "settings",
        path: "settings",
        element: <SettingsLayout />,
        children: [
            {
                index: true,
                element: <UserProfileSettings />
            },
            {
                name: "user",
                path: "user",
                element: <UserProfileSettings />
            },
            {
                name: "petinformation",
                path: "petinformation",
                element: <UserPetInfo />
            },
            {
                name: "application",
                path: "application",
                element: <PeticomerApplication />
            },
            {
                name: "passupdate",
                path: "passupdate",
                element: <UpdatePassword/>
            }

        ]
    }
];

// const authMap = routes => routes.map(route => {
//     if (route?.auth) {
//         route.element = <AuthRoute>{route.element}</AuthRoute>;
//     }
//     if (route?.children) {
//         route.children = authMap(route.children)
//     }
//     return route
// })

// export default authMap(routes);

export default routes;
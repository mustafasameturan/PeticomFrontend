import AuthLayout from "../pages/Auth/AuthLayout";
import { Ad, AdDetail, Home, HomeLayout, UserSettings } from "../pages/Home";
import { Login, PeticomerApplication, Register, VerificateEmail } from "../pages/Auth";

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
            },
            {
                name: "ad",
                path: "ad",
                element: <Ad />
            },
            {
                name: "detail",
                path: "detail",
                element: <AdDetail />
            },
            {
                name: 'settings',
                path: 'settings',
                element: <UserSettings />
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
                name: "application",
                path: "application",
                element: <PeticomerApplication />
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
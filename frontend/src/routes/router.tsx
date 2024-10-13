import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";
import {Home, LogInPage, SignUpPage, EvaluationPage, FinPalHome} from "../pages";

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <Home />,
    },
    {
        path: ROUTES.LOGIN,
        element: <LogInPage />,
    },
    {
        path: ROUTES.SIGNUP,
        element: <SignUpPage />,
    },
    {
        path: ROUTES.FINPAL,
        element: <FinPalHome />,
    },
    {
        path: ROUTES.EVALUATE_CONTEXT,
        element: <EvaluationPage />,
    },

];

export const router = createBrowserRouter(routes);


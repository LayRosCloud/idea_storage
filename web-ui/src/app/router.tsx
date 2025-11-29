import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Routes } from "@/shared/model/routes";
import { Providers } from "./providers";
import {
  protectedLoader,
  ProtectedRoute,
  PublicRoute,
} from "./protected-route";
import { AppHeader } from "@/features/header";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        loader: protectedLoader,
        element: (
          <>
            <AppHeader />
            <ProtectedRoute />
          </>
        ),
        children: [
          {
            path: Routes.PROJECT_BOARD,
            lazy: () => import("@/features/board/board.page"),
          },
          {
            path: Routes.PROJECT,
            lazy: () => import("@/features/project/project.page"),
            handle: {
              sidebar: (
                <>
                  <h1>Hui</h1>
                </>
              ),
            },
          },
        ],
      },
      {
        element: (
          <>
            <AppHeader />
            <PublicRoute />
          </>
        ),
        children: [
          {
            path: Routes.HOME,
            lazy: () => import("@/features/home/home.page"),
          },
        ],
      },
      {
        path: Routes.LOGIN,
        lazy: () => import("@/features/auth/login.page"),
      },
      {
        path: Routes.REGISTER,
        lazy: () => import("@/features/auth/signup.page"),
      },
      {
        path: Routes.VERIFY_EMAIL,
        lazy: () => import("@/features/auth/verify.page"),
      },
      {
        path: Routes.FORGOT_PASSWORD,
        lazy: () => import("@/features/auth/forgot-password.page"),
      },
      {
        path: Routes.RESTORE_PASSWORD,
        lazy: () => import("@/features/auth/restore-password.page"),
      },
    ],
  },
]);

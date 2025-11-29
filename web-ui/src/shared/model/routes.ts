import "react-router-dom";

export const Routes = {
  HOME: "/",
  PROJECT: "/:projectId",
  LOGIN: "/signin",
  REGISTER: "/signup",
  VERIFY_EMAIL: "/signup/verify",
  FORGOT_PASSWORD: "/signin/forgot-password",
  RESTORE_PASSWORD: "/signin/restore-password",
  PROJECT_BOARD: "/project/:projectId/board",
} as const;

export type PathParams = {
  [Routes.PROJECT_BOARD]: {
    projectId: string;
  };
  [Routes.PROJECT]: {
    projectId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}

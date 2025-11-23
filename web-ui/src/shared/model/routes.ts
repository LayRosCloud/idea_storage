import "react-router-dom";

export const Routes = {
  HOME: "/",
  LOGIN: "/signin",
  REGISTER: "/signup",
  VERIFY_EMAIL: "/signup/verify",
  FORGOT_PASSWORD: "/signin/forgot-password",
  RESTORE_PASSWORD: "/signin/restore-password",
  BOARDS: "/boards",
  BOARD: "/board/:boardId",
} as const;

export type PathParams = {
  [Routes.BOARD]: {
    boardId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}

export const GET_USER = "@bird-report/user/get-user";
export const GET_USER_SUCCESS = "@bird-report/user/get-user-success";
export const GET_USER_FAILED = "@bird-report/user/get-user-failed";


export interface UserStateProps {
  loading: boolean
  data: Record<string, any>
  error: any
}

export const userState: UserStateProps = {
  loading: false,
  data: {
    userId: null,
    firstName: null,
    lastName: null,
    email: null
  },
  error: null
};

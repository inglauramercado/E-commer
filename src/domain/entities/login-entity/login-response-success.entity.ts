import { Login } from "./login.entity";


export interface LoginResponseSuccess {
  response: {
    Login:Login
  };
  status: number;
}

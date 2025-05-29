import { LoginRepository } from "../../domain/repositories/login.repositories";

export class LoginUsesCases {
    constructor(private readonly loginRepository: LoginRepository){}
    async login(email: string, password: string){
        return await this.loginRepository.login(email, password)();
      

    }
}
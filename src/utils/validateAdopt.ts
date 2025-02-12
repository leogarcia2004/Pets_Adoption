import { UserAdopt } from "../type/User";


type Error = { 
    [key: string]: string;
};

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

export const validateAdopt = (data: UserAdopt) => { 

    const errors: Error = {}; 

    if(!data.name) {
        errors["name"] = "O nome é obrigatório";
    } 
    
    if(!data.email) { 
        errors["email"] = "O e-mail é obrigatório";
    }

    if(data.email && !emailRegex.test(data.email)) {
        errors["email"] = "O e-mail é inválido";
    }

    if(!data.dateBirth) { 
        errors["dateBirth"] = "A data de nascimento é obrigatória";
    }

    return errors;
}
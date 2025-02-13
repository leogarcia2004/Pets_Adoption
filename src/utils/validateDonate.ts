import { UserDonate } from "../type/User";

type Error = { 
    [key: string]: string;
};

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

export const validateDonate = (data: UserDonate) => { 

    const errors: Error = {}; 
    
    if (!data.email) { 
        errors.email = "O e-mail é obrigatório";
    } else if (!emailRegex.test(data.email)) {
        errors.email = "O e-mail é inválido";
    }

    if (!data.payment || data.payment <= 0) {
        errors.payment = "O valor precisa ser maior que zero";
    }

    if (!data.methodPayment) {  // Corrigido o nome da propriedade
        errors.methodPayment = "O método de pagamento é obrigatório";
    }

    return errors;
}
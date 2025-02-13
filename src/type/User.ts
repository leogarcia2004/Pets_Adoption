export type UserDonate = {
    email?: string;
    payment?: number;
    methodPayment?: string | undefined;
}

export type UserAdopt = {
    email?: string;
    name?: string;
    dateBirth?: string;
}
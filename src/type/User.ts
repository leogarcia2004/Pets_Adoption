export type UserDonate = {
    email?: string;
    payment?: number;
    methodPyment?: string | undefined;
}

export type UserAdopt = {
    email?: string;
    name?: string;
    dateBirth?: string;
}
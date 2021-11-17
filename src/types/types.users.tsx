

export type User = {
    id: number,
    name: string,
    age: string,
    country: string,
    gender: string,
    geoposition: string,
    localitation: string,
    phone2: string,
    phone: string,
    mail: string,
    type_service: string,
}


export type BloodTest = {
    id: number,
    hdl_cholesterol: string,
    ldl_cholesterol: string,
    "non-hdl-c": string,
    "tg/hdl_ratio": string,
    total_cholesterol: string,
    triglycerides: string,
    type_blood: string,
}
export type ListUsersProps = {
    setUserId: (id: number) => void;
    users: User[]
};


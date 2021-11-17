import axios from 'axios';


function getUsers() {
    const url = `${process.env.REACT_APP_API_URL}/users`;
    return axios({
        method: 'get',
        url,
    });
}

function getBloodTestByUser(id: number) {
    const url = `${process.env.REACT_APP_API_URL}/bloodTest/${id}`;
    return axios({
        method: 'get',
        url,
    });
}

export const usersService = {
    getUsers,
    getBloodTestByUser
};

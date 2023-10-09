import axios from "axios";

export const signUpSite = (email, password, name, nickname, apartment) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}/members/sign-up`, {
            apartment: apartment,
            email: email,
            password: password,
            name: name,
            nickname: nickname,
        })
        .then((response) => {
            if (response.data.statusCode === 200) {
                return response.data;
            }
        })
        .catch((error) => {
            console.error("signupSite", error);
            return false;
        });
};

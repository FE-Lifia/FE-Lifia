import axios from "axios";

export const signUpSite = (email, password, name, nickname, apartment) => {
    const serverURL = process.env.REACT_APP_SERVER_URL; // 서버 URL을 변수에 저장

    return axios
        .post(`${serverURL}/members/sign-up`, { // 변수를 사용하여 요청 URL을 구성
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

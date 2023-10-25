import axios from "axios";

export const loginSite = (email, password) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.statusCode === 200 && response.data.accessToken) {
        const { accessToken, refreshToken, user_email } = response.data;
        return {
          accessToken: accessToken,
          refreshToken: refreshToken,
          user_email: user_email,
        };
      } else {
        // 서버에서 응답이 성공적이지 않은 경우
        return { error: "로그인에 실패했습니다." };
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 405) {
        return { error: "메일인증을 완료해주세요!" };
      } else if (error.response && error.response.status === 200) {
        return { error: "로그인 정보가 없습니다!" };
      } else {
        return { error: "서버 요청 중에 문제가 발생했습니다." };
      }
    });
};

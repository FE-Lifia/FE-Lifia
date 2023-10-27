import axios from "axios";

export const loginSite = async (email, password) => {
  console.log(email, password);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/login`,
      {
        email: email,
        password: password,
      }
    );
    if (response.data.statusCode === 200 && response.data.data.accessToken) {
      console.log(response.data);
      const { accessToken, refreshToken } = response.data.data;
      return {
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    } else {
      // 서버에서 응답이 성공적이지 않은 경우
      return { error: "로그인에 실패했습니다." };
    }
  } catch (error) {
    if (error.response && error.response.status === 405) {
      return { error: "메일인증을 완료해주세요!" };
    } else if (error.response && error.response.status === 200) {
      return { error: "로그인 정보가 없습니다!" };
    } else {
      return { error: "서버 요청 중에 문제가 발생했습니다." };
    }
  }
};

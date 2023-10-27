import axios from "axios";

export const signUpSite = async (
  email,
  password,
  name,
  nickname,
  apartment
) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/members/sign-up`,
      {
        email,
        password,
        name,
        nickname,
        apartment,
      }
    );

    // Check the status code for success
    if (response.status === 200) {
      return response.data; // Assuming you want to return data on success
    } else {
      // Handle other status codes or unexpected responses
      return { error: "회원가입에 실패했습니다." };
    }
  } catch (error) {
    // Handle specific error status codes
    if (error.response) {
      if (error.response.status === 405) {
        return { error: "회원가입 중 문제가 발생했습니다!" };
      } else if (error.response.status === 500) {
        return { error: "서버 내부 오류가 발생했습니다." };
      }
      // Handle other status codes if needed
    }

    // Handle network or other errors
    return { error: "서버 요청 중에 문제가 발생했습니다." };
  }
};

// export const signUpSite = async (
//   email,
//   password,
//   name,
//   nickname,
//   apartment
// ) => {
//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_SERVER_URL}/members/sign-up`,
//       {
//         email: email,
//         password: password,
//         name: name,
//         nickname: nickname,
//         apartment: apartment,
//       }
//     );
//     if (response) {
//       return response;
//     } else {
//       // 서버에서 응답이 성공적이지 않은 경우
//       return { error: "회원가입에 실패했습니다." };
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 405) {
//       return { error: "회원가입 중 문제가 발생했습니다!" };
//     } else if (error.response && error.response.status === 200) {
//       return { error: "회원가입 중 문제가 발생했습니다!" };
//     } else {
//       return { error: "서버 요청 중에 문제가 발생했습니다." };
//     }
//   }
// };

// export const signUpSite = async (email, password, name, nickname, apartment) => {
//     return axios
//       .post(`${process.env.REACT_APP_SERVER_URL}/members/sign-up`, {
//         email: email,
//         password: password,
//         name: name,
//         nickname: nickname,
//         apartment: apartment,
//       })
//       .then((response) => {
//         console.log(response);
//         if (response.data.statusCode === 200) {
//           return response.data;
//         }
//       })
//       .catch((error) => {
//         console.error("signupSite", error);
//         return false;
//       });
//   };

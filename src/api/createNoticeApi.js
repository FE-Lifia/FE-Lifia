import axios from "axios";

export const createNoticeApi = async (
  accessToken,
  noticeType,
  title,
  content
) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/${noticeType}/board`,
      {
        accessToken: accessToken,
        title: title,
        content: content,
      }
      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //     "Content-Type": "application/json",
      //   },
      // }
    );
    if (response.data.statusCode === 200 && response.data.data.accessToken) {
      return response.data.statusCode;
    } else {
      // 서버에서 응답이 성공적이지 않은 경우
      return { error: "글 작성에 실패했습니다" };
    }
  } catch (error) {
    if (error.response && error.response.status === 405) {
      return { error: "405 ERROR!" };
    } else if (error.response && error.response.status === 200) {
      return { error: "글 작성 정보가 없습니다!" };
    } else {
      return { error: "서버 요청 중에 문제가 발생했습니다." };
    }
  }
};

import axios from "axios";

export const noticeListApi = async (accessToken, noticeType, page) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/${noticeType}/${page}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.data.statusCode === 200) {
      const { freeBoards } = response.data.data;
      return {
        freeBoards: freeBoards,
      };
    }
  } catch (error) {
    console.error("Error while sending form data with token:", error);
  }
};

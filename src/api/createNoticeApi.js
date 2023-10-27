import axios from "axios";

export const createNoticeApi = async (
  accessToken,
  noticeType,
  title,
  content
) => {
  const formData = new FormData();
  const request = {
    title: title,
    content: content,
  };
  formData.append(
    "req",
    new Blob([JSON.stringify(request)], { type: "application/json" })
  );
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/${noticeType}/board`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error while sending form data with token:", error);
  }
};

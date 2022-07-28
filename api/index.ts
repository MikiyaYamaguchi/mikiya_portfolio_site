import axios from "axios";

const myApi = axios.create({
  baseURL: "https://mikiya-portfolio-blog-api.herokuapp.com",
  responseType: "json",
});

export default {
  async getBlogData() {
    try {
      const response = await myApi.get("");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getIdBlogData(id: string) {
    try {
      const response = await myApi.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async postBlogData(data: any) {
    try {
      await myApi.post("", data);
    } catch (error) {
      console.log(error);
    }
  },
  async putBlogData(id: string, data: any) {
    try {
      await myApi.put(`/${id}`, {
        title: data.title,
        content: data.content,
        thumbnail: data.thumbnail,
      });
    } catch (error) {
      console.error(error);
    }
  },
  async deleteBlogData(id: string) {
    try {
      await myApi.delete(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  async uploadImgData(imageFile: any) {
    try {
      const formData = new FormData();
      formData.append("file", imageFile[0]);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      let res = await myApi.post("/image", formData, config);
      if (res.data.status === "error") {
        alert(res.data.error);
      } else {
        alert("登録完了");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  },
};

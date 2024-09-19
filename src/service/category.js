import https from "./config";

const category = {
   create: (data) => https.post("/category/create", data),
};
export default category;

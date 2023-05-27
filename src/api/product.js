import axios from "axios";
import constants from "../constants";
const baseUrl = constants.BASE_API;
export const createProduct = async (payload) => {
  const response = await axios.post(baseUrl + "/product", payload);
  // console.log(response);
  return response;
};
export const geAlltotalProduct = async () => {
  const response = await axios.get(baseUrl + "/total-product");
  // console.log(response);
  return response;
};
export const geAlltProduct = async () => {
  const response = await axios.get(baseUrl + "/products");
  // console.log(response);
  return response;
};

export const deleteProductImageFromCloud = async (public_id) => {
  const response = await axios.get(
    baseUrl + `/product-image?public_id=${public_id}`
  );
  return response;
};

export const geNewtProduct = async () => {
  const response = await axios.get(baseUrl + "/new-product");
  // console.log(response);
  return response;
};
export const getSingleProduct = async (id) => {
  const response = await axios.get(baseUrl + `/products/${id}`);
  // console.log(response);
  return response;
};

export const adminLogin = async (payload) => {
  console.log(payload, "payload");
  const response = await axios.post(baseUrl + "/login", payload);
  // console.log(response);
  return response;
};

export const findProduct = async (key) => {
  const response = await axios.get(baseUrl + `/search/${key}`);
  // console.log(response);
  return response;
};
export const findCategory = async (key) => {
  const response = await axios.get(baseUrl + `/category/${key}`);
  // console.log(response);
  return response;
};

export const deleteProduct = async (id) => {
  console.log(id, "here");
  const response = await axios.delete(baseUrl + `/products/${id}`);
  // console.log(response);
  return response;
};
export const updateProduct = async (id, newProduct) => {
  const response = await axios.put(baseUrl + `/products/${id}`, newProduct);
  // console.log(response);
  return response;
};

export const sendMailer = async (data) => {
  console.log(data, "it is mail");
  const response = await axios.post(baseUrl + `/mailer`, data);
  // console.log(response);
  return response;
};
export const sendMailerContact = async (data) => {
  console.log(data, "it is mail");
  const response = await axios.post(baseUrl + `/contact`, data);
  // console.log(response);
  return response;
};

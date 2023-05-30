import axios from "axios";

const baseUrl = "http://localhost:3000/people";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

export const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

export const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

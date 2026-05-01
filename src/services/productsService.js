import api from "./axiosConfig";

export const ProductsService = async () => {
  try {
    const res = await api.get("");
    return res;
  } catch (error) {
    throw error;
  }
};

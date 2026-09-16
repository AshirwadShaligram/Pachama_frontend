import axiosApi from "@/lib/axios";

export const getCustomerUsers = async () => {
  const response = await axiosApi.get("/all-customer-users");

  return response.data;
};

export const getSellerUsers = async () => {
  const response = await axiosApi.get("/all-seller-users");

  return response.data;
};

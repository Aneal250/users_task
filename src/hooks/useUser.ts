import api from "@lib/api";
import { useQuery } from "@tanstack/react-query";
import { UsersRes } from "../types/data";

import baseAxios from "services/axios";

const getUsers = async (): Promise<UsersRes> => {
  const res = await baseAxios.get(api.users);
  return res.data;
};

const useGetUsers = () => {
  return useQuery({
    queryKey: ["get-users"],
    queryFn: getUsers,
  });
};

export { useGetUsers };

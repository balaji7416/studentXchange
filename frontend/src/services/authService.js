import api from "../utils/axiosInstance";

async function registerUser(credentials) {
  try {
    const { data } = await api.post("/auth/register", credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function loginUser(credentials) {
  try {
    const { data } = await api.post("/auth/login", credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { loginUser, registerUser };

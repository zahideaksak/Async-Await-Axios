import axios from "axios";

const getUserById = async (userId) => {
  if (userId === null || userId === undefined) {
    throw new Error("User id not defined");
  }

  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
const getPostByUserId = async (userId) => {
  if (userId === null || userId === undefined) {
    throw new Error("User id not defined");
  }

  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserAndPost = async (userId) => {
  try {
    const user = await getUserById(userId);
    const posts = await getPostByUserId(userId);

    const result = {
      user,
      posts: posts,
    };

    return result;
  } catch (error) {
    console.error(error);
  }
};

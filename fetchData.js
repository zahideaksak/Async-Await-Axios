import axios from "axios";

// An asynchronous function to retrieve user information
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
// An asynchronous function to retrieve posts of a specific user
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
// Asynchronous function that combines user information and posts and returns
export const getUserAndPost = async (userId) => {
  try {
    const user = await getUserById(userId);
    const posts = await getPostByUserId(userId);

    // Combine and return user information and posts
    const result = {
      user,
      posts: posts,
    };

    return result;
  } catch (error) {
    console.error(error);
  }
};

import { getUserAndPost } from "./fetchData.js";

(async () => {
  const result = await getUserAndPost(1);
  console.log(result);
})();

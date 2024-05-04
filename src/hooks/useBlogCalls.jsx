import { useDispatch } from "react-redux";
import { fetchStart, getSuccess } from "../features/blogSlice";

const useBlogCall = () => {
  const dispatch = useDispatch();

  const getBlogData = async (endpoint) => {
    dispatch(fetchStart());
    try {
      const response = await fetch(`your_api_base_url/${endpoint}`);
      const data = await response.json();
      dispatch(getSuccess(data));
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  return { getBlogData };
};

export default useBlogCall;
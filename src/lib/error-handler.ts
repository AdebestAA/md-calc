import axios from "axios";
import toast from "react-hot-toast";

export const handleError = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    toast.error(err.response?.data?.message || "Network error");
    console.log(err.response?.data);
  } else if (err instanceof Error) {
    toast.error(err.message);
    console.log(err);

    console.log("instance of Error" + err);
  } else {
    toast.error("Something went wrong");
  }
};

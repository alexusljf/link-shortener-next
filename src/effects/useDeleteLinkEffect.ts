import axios from "axios";
import { useRouter } from "next/navigation";

const useDeleteLinkEffect = (id: string, domainName: string) => {
  const router = useRouter();
  const baseUrl = `${domainName}/listPage`;
  const handleDelete = async () => {
    if (id) {
      try {
        const response = await axios.delete(`/api/deleteLink?id=${id}`);
        if (response.status === 200) {
          console.log("woohoo! link deleted");
          router.push(baseUrl);
        } else {
          console.log("Unable to delete Link");
        }
      } catch (error) {
        console.log("Error occurred while deleting link");
      }
    }
  };

  return handleDelete;
};

export default useDeleteLinkEffect;

import axios from "axios";

const useDeleteLinkEffect = (id: string, onDeleted: () => void) => {
  const handleDelete = async () => {
    if (id) {
      try {
        console.log("deleting link:", id);
        const response = await axios.delete(`/api/deleteLink?id=${id}`);
        if (response.status === 200) {
          onDeleted();
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

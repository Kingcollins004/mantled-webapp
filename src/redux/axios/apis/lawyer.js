import api from "../axios";

const CreateLawyerApi = (data) => {
  return api.post("/lawyers/", data);
};

export { CreateLawyerApi };

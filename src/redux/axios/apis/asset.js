import api from "../axios";

const GetUserCollaboratorsApi = () => {
  return api.get("/assets/collaborators");
};

const AddCollaboratorApi = () => {
    return api.post("/assets/collaborators");
  };

  const CreateBeneficiaryApi = () => {
    return api.post("/assets/beneficiary");
  }
  

export { GetUserCollaboratorsApi, AddCollaboratorApi, CreateBeneficiaryApi };

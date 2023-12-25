import { useEffect, useState } from "react";
import { GetUserCollaboratorsApi } from "../redux/axios/apis/asset";
import { setAcceptedCollaborators, setCollaborators, setPendingCollaborators } from "../redux/features/assetSlice";
import toast from "react-hot-toast";
import ErrorHandler from "../redux/axios/Utils/ErrorHandler";
import { useDispatch } from "react-redux";

const useDataFetch = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchData = async (fetchFunction) => {
    try {
      setLoading(true);
      const response = await fetchFunction();

      if (response.data) {
        setLoading(false);
        return response.data;
        
      }
    } catch (error) {
      setLoading(false);
      const err = ErrorHandler(error);
      toast.error(err.message);
    }
  };

//   const GetAssets = async () => {
//     const data = await fetchData(GetPaymentProcessor);
//     dispatch(setVoucherTransactions(data));
//   };

  const GetCollaborators = async () => {
    const data = await fetchData(GetUserCollaboratorsApi);
    dispatch(setPendingCollaborators(data?.data.pendingCollaborators));
    dispatch(setAcceptedCollaborators(data?.data.acceptedCollaborators))
  };

  useEffect(() => {
    // GetAssets();
    GetCollaborators();
    //   eslint-disable-next-line
  }, []);

  return {
    loading,
  };
};

export default useDataFetch;

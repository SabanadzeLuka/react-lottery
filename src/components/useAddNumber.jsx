import { useDispatch } from "react-redux";
import { addNumber } from "../slices/numbersSlice";

export default function useAddNumber() {
  const dispatch = useDispatch();

  const addNumberToStore = (value) => {
    dispatch(addNumber(value));
  };

  return addNumberToStore;
}

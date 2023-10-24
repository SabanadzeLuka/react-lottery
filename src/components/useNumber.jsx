import { useDispatch } from "react-redux";
import { addNumber, removeNumber } from "../slices/numbersSlice";

export default function useNumbers() {
  const dispatch = useDispatch();

  const addNumberToStore = (value) => {
    dispatch(addNumber(value));
  };

  const removeNumberFromStore = (value) => {
    dispatch(removeNumber(value));
  };

  return { addNumberToStore, removeNumberFromStore };
}

import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

export const useAppSelector = useSelector.withTypes<RootState>();

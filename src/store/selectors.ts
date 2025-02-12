import { FirstForm, RootState } from "./types";



export const firstFromSelector = (state: RootState): FirstForm | undefined => state.firstForm;
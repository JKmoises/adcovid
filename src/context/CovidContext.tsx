import { createContext } from "react";
import { FetchData, CovidGlobal } from '../interfaces/interfaces';

export type CovidContextProps = {
  globals: FetchData<CovidGlobal>;
};

export const CovidContext = createContext<CovidContextProps>({} as CovidContextProps);

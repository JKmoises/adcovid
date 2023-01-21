import { CovidContext } from './CovidContext';
import { useFetch } from '../hooks/useFetch';
import { FetchData, CovidGlobal } from '../interfaces/interfaces';


interface props {
  children: JSX.Element | JSX.Element[];
}

let endpointGlobals: string = "https://disease.sh/v3/covid-19/all";

export const CovidProvider = ({ children }: props) => {
  let globals: FetchData<CovidGlobal> = useFetch(endpointGlobals);

  const data = {
    globals,
  };

  return <CovidContext.Provider value={data}>{children}</CovidContext.Provider>;
};

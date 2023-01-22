import { CovidContext } from './CovidContext';
import { useFetch } from '../hooks/useFetch';
import { FetchData, CovidGlobal } from '../interfaces/interfaces';
import { GLOBALS } from '../helpers/endpoints';


interface props {
  children: JSX.Element | JSX.Element[];
}


export const CovidProvider = ({ children }: props) => {
  let globals: FetchData<CovidGlobal> = useFetch(GLOBALS);

  const data = {
    globals,
  };

  return <CovidContext.Provider value={data}>{children}</CovidContext.Provider>;
};

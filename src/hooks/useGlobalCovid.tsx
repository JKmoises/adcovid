import { CovidGlobal, CovidDate, CovidCountry } from '../interfaces/interfaces';
import { useLoaderData } from 'react-router-dom';
import { yesterdayDate, dateMonthAgo } from '../helpers/formattedDates';


//* Fecha del día de ayer y hace un mes
const YESTERDAY_DATE = yesterdayDate();
const MONTH_AGO_DATE = dateMonthAgo();

//* Total de paises y territorios en el mundo
export const TOTAL_COUNTRIES : number = 244;

export const useGlobalCovid = () => {
  const [
    globals, 
    covidYesterday, 
    covidMonthAgo,
    covidChile
  ] = useLoaderData() as [CovidGlobal, CovidDate, CovidDate, CovidCountry];

  const {
    affectedCountries,
    active,
    cases,
    critical,
    deaths,
    recovered,
  } = globals;

  //* Obteniendo datos del día de ayer
  const CASES_YESTERDAY = covidYesterday.cases[YESTERDAY_DATE];
  const DEATHS_YESTERDAY = covidYesterday.deaths[YESTERDAY_DATE];
  const RECOVERED_YESTERDAY = covidYesterday.recovered[YESTERDAY_DATE];
  const dataYesterday = [CASES_YESTERDAY,DEATHS_YESTERDAY,RECOVERED_YESTERDAY];

  //* Obteniendo datos de hace un mes
  const CASES_MONTH_AGO = covidMonthAgo.cases[MONTH_AGO_DATE];
  const DEATHS_MONTH_AGO = covidMonthAgo.deaths[MONTH_AGO_DATE];
  const RECOVERED_MONTH_AGO = covidMonthAgo.recovered[MONTH_AGO_DATE];
  const dataMonthAgo = [CASES_MONTH_AGO, DEATHS_MONTH_AGO, RECOVERED_MONTH_AGO];

  //* Incremento de casos a comporacion del día de ayer y hace un mes
  const increaseCasesYesterday = (((cases - CASES_YESTERDAY) * 100) / cases || 0).toFixed(1);
  const increaseCasesMonthAgo = (((cases - CASES_MONTH_AGO) * 100) / cases || 0).toFixed(1);

  //* % de muertes globales
  const percentageDeaths = (deaths * 100) / cases;

  //* % de casos activos, criticos y recuperados
  const activePercentage = ((active * 100) / cases || 0).toFixed(2);
  const criticalPercentage = ((critical * 100) / cases || 0).toFixed(2);
  const recoveredPercentage = ((recovered * 100) / cases || 0).toFixed(1);

  //* % de paises afectados
  const percentageCountriesAffected = ((affectedCountries * 100) / TOTAL_COUNTRIES || 0).toFixed(1);

  //* % de casos, fallecidos, casos activos y recuperados en chile 
  const percentageCasesChile = ((covidChile.cases * 100) / cases || 0).toFixed(2);
  const percentageDeathsChile = ((covidChile.deaths * 100) / deaths || 0).toFixed(2);
  const percentageActiveChile = ((covidChile.active * 100) / active || 0).toFixed(2);
  const percentageRecoveredChile = ((covidChile.recovered * 100) / recovered || 0).toFixed(2);



  return {
    dataYesterday,
    dataMonthAgo,
    increaseCasesYesterday,
    increaseCasesMonthAgo,
    percentageDeaths,
    activePercentage,
    criticalPercentage,
    recoveredPercentage,
    percentageCountriesAffected,
    percentageCasesChile,
    percentageDeathsChile,
    percentageActiveChile,
    percentageRecoveredChile,
    globals,
    covidChile,
  };
};
import { helpHttp } from "../helpers/helpHttp";
import { CovidGlobal, CovidDate, CovidCountry } from '../interfaces/interfaces';

export async function getGlobalsCovid(): Promise<CovidGlobal> {
  const resultado = await helpHttp().get(import.meta.env.VITE_GLOBALS_COVID);

  return resultado;
}

export async function getYesterdayCovid(): Promise<CovidDate> {
  const resultado = await helpHttp().get(import.meta.env.VITE_YESTERDAY_COVID);

  return resultado;
}

export async function getMonthAgoCovid(): Promise<CovidDate> {
  const resultado = await helpHttp().get(import.meta.env.VITE_MONTH_AGO_COVID);

  return resultado;
}

export async function getChileCovid(): Promise<CovidCountry> {
  const resultado = await helpHttp().get(import.meta.env.VITE_CHILE_COVID);

  return resultado;
}
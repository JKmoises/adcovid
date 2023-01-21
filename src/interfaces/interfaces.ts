export interface FetchData<T> {
  data: T;
  isPending: boolean;
  error: ErrorData | null;
}

export interface ErrorData{
  err: boolean;
  status: number;
  statusText: string;
};

export interface CovidGlobal {
  active: number;
  activePerOneMillion: number;
  affectedCountries: number;
  cases: number;
  casesPerOneMillion: number;
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
}



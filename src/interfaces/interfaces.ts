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

export interface CovidDate {
  cases: DateCases;
  deaths: DateCases;
  recovered: DateCases;
}

interface DateCases {
  [key: string]: number;
}

export interface CovidCountry {
  updated: number;
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}


interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

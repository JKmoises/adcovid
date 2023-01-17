import { CardCovid } from '../components/CardCovid';

export const Globales = () => {
  return (
    <main className="container-md">
      <h1 className="text-center my-4 text-color">
        CASOS GLOBALES DE COVID-19
      </h1>

      <div className="row gap-2">
        <CardCovid/>
        <CardCovid/>
        
      </div>
    </main>
  );
}

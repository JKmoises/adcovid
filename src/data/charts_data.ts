export function lineChartOptions(text: string ) {
  return {
    fill: true,
    responsive: true,
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text,
        position: "bottom" as const,
      },
    },
  };
}

export function lineChartData(
  data: number[],
  labels: string[] = ["Casos", "Muertes", "Sanados"]
) {
  return {
    labels,
    datasets: [
      {
        data,
        borderColor: "#0E6655",
        backgroundColor: "#73C6B670",
        tension: 0.5,
      },
    ],
  };
}

export function barChartData(
  data: number[],
  labels: string[] = ["Casos hoy", "Muertes hoy", "Sanados hoy"]
) {
  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ["#145A32", "#0E6655", "#239B56"],
      },
    ],
  };
}

export function barChartOptions(){
  return {
    responsive: true,
    barThickness: 20,
    borderRadius: 8,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
}

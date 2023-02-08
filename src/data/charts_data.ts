export function lineChartOptions(text: string, theme: string = "light") {
  return {
    fill: true,
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: theme === "light" ? "#707B7C" : "#fff",
        },
      },
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
        color: theme === "light" ? "" : "#fff",
      },
    },
  };
}

export function lineChartData(
  data: number[],
  labels: string[] = ["Casos", "Muertes", "Sanados"],
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

export function barChartOptions(theme: string = "light"){
  return {
    responsive: true,
    barThickness: 20,
    borderRadius: 8,
    scales: {
      x: {
        ticks: {
          color: theme === "light" ? "#707B7C" : "#fff",
        },
      },
      y: {
        ticks: {
          color: theme === "light" ? "#707B7C" : "#fff",
        },
      },
    },
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

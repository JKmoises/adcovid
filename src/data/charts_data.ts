export function chartOptions(text: string){
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

export function chartData(labels: string[],data: number[]){
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
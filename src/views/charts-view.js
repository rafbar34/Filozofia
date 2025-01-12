import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import {
  CHART_DATA,
  CHART_DATA2,
  CHART_DATA3,
  CHART_DATA4,
  CHART_DATA5,
  CHART_DATA6,
  CHART_DATA7,
} from "../data/charts-data";

export const ChartsPage = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <ChartComponent
        title={
          "Jakie są Twoje ogólne odczucia dotyczące sztucznej inteligencji (AI)?"
        }
        bars={bars.slice(0, 5)}
        CHART_DATA={CHART_DATA}
      />
      <ChartComponent
        title={
          "Czy uważasz, że sztuczna inteligencja ma potencjał do poprawy jakości życia?"
        }
        bars={bars.slice(0, 5)}
        CHART_DATA={CHART_DATA2}
      />
      <ChartComponent
        title={
          "Czy uważasz, że sztuczna inteligencja ma potencjał do poprawy jakości życia?"
        }
        bars={bars}
        CHART_DATA={CHART_DATA3}
      />
      <ChartComponent
        title={"Czy masz obawy związane z rozwojem sztucznej inteligencji?"}
        bars={bars.slice(0, 5)}
        CHART_DATA={CHART_DATA4}
      />
      <ChartComponent
        title="W jaki sposób chciałbyś/abyś być informowany/a o pozytywnych aspektach sztucznej inteligencji?"
        bars={bars.slice(0, 5)}
        CHART_DATA={CHART_DATA5}
      />
      <ChartComponent
        title="Jakie zmiany w postrzeganiu sztucznej inteligencji są Twoim zdaniem najważniejsze?"
        bars={bars.slice(0, 5)}
        CHART_DATA={CHART_DATA6}
      />
      <ChartComponent
        title="Czy chciałbyś/abyś dowiedzieć się więcej na temat filozoficznych koncepcji związanych z AI, np. Punktu Omega Pierre’a Teilharda de Chardin?"
        bars={bars.slice(0, 3)}
        CHART_DATA={CHART_DATA7}
      />
    </div>
  );
};

const ChartComponent = ({ title, bars, CHART_DATA }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={500}
      style={{ marginTop: 50 }}
    >
      <BarChart
        width={500}
        height={300}
        data={CHART_DATA}
        margin={{
          top: 25,

          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label
            value={title}
            offset={425}
            position="top"
          />
        </XAxis>
        <YAxis />
        <Tooltip />
        {bars.map((bar) => (
          <Bar
            dataKey={`${bar.dataKey}`}
            fill={bar.fill}
            activeBar={
              <Rectangle
                fill={bar.fill}
                stroke={bar.fill}
              />
            }
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

const bars = [
  { dataKey: "Odpowiedz 1", fill: "green" },
  { dataKey: "Odpowiedz 2", fill: "black" },
  { dataKey: "Odpowiedz 3", fill: "blue" },
  { dataKey: "Odpowiedz 4", fill: "purple" },
  { dataKey: "Odpowiedz 5", fill: "red" },
  { dataKey: "Odpowiedz 6", fill: "pink" },
  { dataKey: "Odpowiedz 7", fill: "zinc" },
];

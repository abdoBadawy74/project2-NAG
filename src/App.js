import { data } from "./data";
import Card from "./Components/Card";
export default function App() {
  const dataShow = data.map((item, index) => {
    return (
      <Card
        key={index}
        img={item.img}
        title={item.title}
        desc={item.desc}
        review={item.review}
        price={item.price}
      />
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {dataShow}
    </div>
  );
}

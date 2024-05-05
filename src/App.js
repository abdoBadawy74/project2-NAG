import { data } from "./data";
import Card from "./Components/Card";
export default function App() {
  const dataShow = data.map((item) => {
    return (
      <Card
        img={item.img}
        title={item.title}
        desc={item.desc}
        review={item.review}
        price={item.price}
      />
    );
  });

  return <div>{dataShow}</div>;
}

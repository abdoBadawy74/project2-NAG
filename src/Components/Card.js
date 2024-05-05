export default function Card(props) {
  return (
    <div style={{
      border: "1px solid lightgray",
      borderRadius: "10px",
      padding: "10px",
      margin: "10px",
      width: "400px",
      backgroundRepeat: "no-repeat",
    
    }}>
      {/* <img src={props.img} alt="img" style={{ width: "400px" }} /> */}

      <div style={{
        backgroundImage: `url(${props.img})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        width: "100%",
      }}>

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          {props.title}
        </h2>
        <p>{props.review}</p>
      </div>
      <p
        style={{
          color: "gray",
          marginTop: 0,
        }}
      >
        {props.desc}
      </p>
      <p>{props.price}$ night</p>
    </div>
  );
}

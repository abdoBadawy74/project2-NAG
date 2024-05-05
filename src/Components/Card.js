export default function Card(props) {
  return (
    <div
      style={{
        border: "1px solid lightgray",
        borderRadius: "10px",
        overflow: "hidden",
        width: "400px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img src={props.img} alt="img" style={{ width: "400px" }} /> */}

      <div
        style={{
          backgroundImage: `url(${props.img})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          width: "100%",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          {props.title}
        </h2>
        <p
          style={{
            color: "#717171",
          }}
        >
          {props.review}{" "}
          <i
            className="fas fa-star"
            style={{
              color: "orange",
              fontSize: "14px",
            }}
          ></i>
        </p>
      </div>
      <p
        style={{
          color: "gray",
          marginTop: 0,
          padding: "0 10px",
        }}
      >
        {props.desc}
      </p>
      <p
        style={{
          padding: "0 10px",
          marginBottom: "10px",
        }}
      >
        {props.price}$ night
      </p>
    </div>
  );
}

function Project() {
  return (
    <>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href='https://fonts.googleapis.com/css?family=Montserrat&display=swap"rel="stylesheet'
  />
  <link rel="stylesheet" href="style.css" />
  <div className="cardList">
    <button className="cardList__btn btn btn--left">
      <div className="icon">
        <svg>
          <use xlinkHref="#arrow-left" />
        </svg>
      </div>
    </button>
    <div className="cards__wrapper">
      <div className="card current--card">
        <div className="card__image">
          <img
            src="https://media.gettyimages.com/id/1308731271/photo/majestic-viewpoint-of-jodhpur-mehrangarh-fort-and-jaswant-thada-rajasthan-india.jpg?s=612x612&w=0&k=20&c=zG7AezWK8A86RO2lxByeysnRveI-6AOubh8W6BWe_8I="
            alt=""
          />
        </div>
      </div>
      <div className="card next--card">
        <div className="card__image">
          <img
            src="https://w0.peakpx.com/wallpaper/307/324/HD-wallpaper-aerial-of-machu-picchu-peru.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="card previous--card">
        <div className="card__image">
          <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
        </div>
      </div>
    </div>
    <button className="cardList__btn btn btn--right">
      <div className="icon">
        <svg>
          <use xlinkHref="#arrow-right" />
        </svg>
      </div>
    </button>
  </div>
  <div className="infoList">
    <div className="info__wrapper">
      <div className="info current--info">
        <h1 className="text name">Rajasthan</h1>
        <h4 className="text location">India</h4>
        <p className="text description">Jodhpur mehrangarh fort</p>
      </div>
      <div className="info next--info">
        <h1 className="text name">Machu Pichu</h1>
        <h4 className="text location">Peru</h4>
        <p className="text description">Adventure is never far away</p>
      </div>
      <div className="info previous--info">
        <h1 className="text name">Chamonix</h1>
        <h4 className="text location">France</h4>
        <p className="text description">Let your dreams come true</p>
      </div>
    </div>
  </div>
  <div className="app__bg">
    <div className="app__bg__image current--image">
      <img
        src="https://media.gettyimages.com/id/1308731271/photo/majestic-viewpoint-of-jodhpur-mehrangarh-fort-and-jaswant-thada-rajasthan-india.jpg?s=612x612&w=0&k=20&c=zG7AezWK8A86RO2lxByeysnRveI-6AOubh8W6BWe_8I="
        alt=""
      />
    </div>
    <div className="app__bg__image next--image">
      <img
        src="https://w0.peakpx.com/wallpaper/307/324/HD-wallpaper-aerial-of-machu-picchu-peru.jpg"
        alt=""
      />
    </div>
    <div className="app__bg__image previous--image">
      <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
    </div>
  </div>
  <div className="loading__wrapper">
    <div className="loader--text">Please Wait...</div>
    <div className="loader">
      <span />
    </div>
  </div>
  <svg className="icons" style={{ display: "none" }}>
    <symbol
      id="arrow-left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polyline
        points="328 112 184 256 328 400"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 48
        }}
      />
    </symbol>
    <symbol
      id="arrow-right"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polyline
        points="184 112 328 256 184 400"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 48
        }}
      />
    </symbol>
  </svg>
</>

  );
}
export default Project;
function Offer() {
  return (
    <div className="mainpadding offer">
      <div className="main">
        <div>
          <h3>Czym zajmuje się nasza firma?</h3>
        </div>
        <div className="container boxpadding center">
          <div className="box">
            <div className="orangeball"></div>
            <p>
              Usługa 1<br />
              <span className="new">(nowość)</span>
            </p>
          </div>
          <div className="box boxcenter">
            <p>Usługa 2</p>
          </div>
          <div className="box">
            <p>Usługa 3</p>
          </div>
        </div>

        <div className="container center">
          <div className="box">
            <p>Usługa 4</p>
          </div>
          <div className="box boxcenter">
            <p>Usługa 5</p>
          </div>
          <div className="box">
            <p>Usługa 6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;

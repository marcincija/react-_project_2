import man from "../img/man.jpg";
import woman from "../img/woman.jpg";

function Specialist() {
  return (
    <div className="mainpadding aboutus" id="aboutus">
      <div className="main">
        <div>
          <h2>Nasi specjaliści</h2>
        </div>
        <div className="container paddingbottom">
          <div>
            <img src={man} alt="" />
          </div>
          <div className="paddingleft">
            <p>
              <strong className="toptext">Imię Nazwisko [ dział ]</strong>
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              massa et lacus egestas cursus a non magna. Fusce scelerisque
              blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
              tempor elementum lorem in, varius pellentesque ligula. Duis
              efficitur lacinia enim, non tincidunt libero ultrices in.
            </p>
          </div>
        </div>

        <div className="container">
          <div>
            <img src={woman} alt="" />
          </div>
          <div className="paddingright alignright">
            <p>
              <strong className="toptext">Imię Nazwisko [ dział ]</strong>
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              massa et lacus egestas cursus a non magna. Fusce scelerisque
              blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
              tempor elementum lorem in, varius pellentesque ligula. Duis
              efficitur lacinia enim, non tincidunt libero ultrices in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialist;

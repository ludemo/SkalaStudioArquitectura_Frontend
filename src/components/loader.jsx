import common from "../assets/img/common/index";
export default function Loader() {
  return (
    <div id="carga" className="carga">
      <div className="carga__img">
        <img
          id="img__carga"
          className="img__carga"
          src={common.lampara_icon}
          alt=""
        />
        <div id="carga__efecto" className="carga__efecto"></div>
      </div>
      <br />
      <div className="carga__info">
        <p id="texto__carga">Cargando</p>
      </div>
    </div>
  );
}

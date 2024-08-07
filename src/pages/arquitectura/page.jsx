import common from "../../assets/img/common/index";
import { Link } from "react-router-dom";
export default function EstudioArquitectura() {
  return (
    <div className="mantenimiento">
      <Link to="/">
        <img className="home" src={common.casa} alt="casa" />
      </Link>
    </div>
  );
}

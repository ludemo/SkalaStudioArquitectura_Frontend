import PropTypes from "prop-types";
import { useState } from "react";
import formulario from "../../assets/img/formulario/index";
//Datos de boleta
export default function Section1({ section, setDatosPDF }) {
  //Variable para el timpo de pago que aparezca y desaparezca
  const [paymentMethod, setPaymentMethod] = useState("deposito");
  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  //Variable para el nombre del archivo
  const [fileName, setFileName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div
      className="form__seccion"
      style={{
        height: section === 0 ? "100%" : "0",
        transform: `translateX(-${section * 100}%)`,
      }}
    >
      {["yape", "deposito"].includes(paymentMethod) && (
        <div className="facturacion__imagen">
          <img
            src={formulario[paymentMethod]}
            id="pago-imagen"
            alt="pago"
            className="form__img"
          />
          <div className="inscripcion__boton boton--form boton--subir">
            <input
              type="file"
              accept="image/png, .jpeg, .jpg"
              onChange={handleFileChange}
              enterKeyHint="done"
              id="file"
            />
          </div>
          {fileName && (
            <div id="file-content" className="pago-notificacion">
              {" "}
              Gracias por subir {fileName}
            </div>
          )}
        </div>
      )}
      <div className="facturacion__form">
        <label htmlFor="pago" className="form__label">
          Modalidad de pago
        </label>
        <select
          className="form__input"
          id="pago"
          value={paymentMethod}
          onChange={handlePaymentChange}
        >
          <option value="deposito" className="form__opcion">
            Depósito - Interbank
          </option>
          <option value="deposito" className="form__opcion">
            Depósito - BCP
          </option>
          <option value="deposito" className="form__opcion">
            Depósito - BBVA
          </option>
          <option value="yape" className="form__opcion">
            Yape
          </option>
          <option value="efectivo" className="form__opcion">
            Efectivo
          </option>
        </select>

        {paymentMethod === "deposito" && (
          <>
            <label
              htmlFor="numeroOperacion"
              id="labelNumeroOperacion"
              className="form__label"
            >
              Número de operación del deposito
            </label>
            <input
              type="text"
              className="form__input"
              enterKeyHint="done"
              maxLength="50"
              id="numeroOperacion"
            />
          </>
        )}
        <label htmlFor="nombreBoleta" className="form__label">
          ¿A nombre de quién va la boleta?
        </label>
        <input
          type="text"
          className="form__input"
          enterKeyHint="done"
          maxLength="50"
          id="nombreBoleta"
        />
        <label htmlFor="TipoDocumentoBoleta" className="form__label">
          Tipo de documento
        </label>
        <select id="TipoDocumentoBoleta" className="form__input">
          <option className="form__opcion">D.N.I.</option>
          <option className="form__opcion">Carne de extranjería</option>
        </select>
        <label htmlFor="documentoBoleta" className="form__label">
          Documento
        </label>
        <input
          id="documentoBoleta"
          type="number"
          maxLength="8"
          className="form__input"
          enterKeyHint="done"
        />
      </div>
    </div>
  );
}
Section1.propTypes = {
  section: PropTypes.number.isRequired,
};

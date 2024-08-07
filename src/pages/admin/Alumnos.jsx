export default function Alumnos () {
  const data = [
    {
      name: 'Juan',
      lastname: 'Pérez',
      status: 'Activo',
      paymentDate: '2024-08-01',
      startDate: '2024-01-01',
      closingDate: '2024-12-31'
    },
    {
      name: 'María',
      lastname: 'Gómez',
      status: 'Inactivo',
      paymentDate: '2024-07-15',
      startDate: '2024-02-01',
      closingDate: '2024-11-30'
    }
  ]
  return (
    <div>
      <h1>Alumnos</h1>
      <div />
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Estado</th>
              <th>Fecha de Pago</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Cierre</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.status}</td>
                <td>{item.paymentDate}</td>
                <td>{item.startDate}</td>
                <td>{item.closingDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

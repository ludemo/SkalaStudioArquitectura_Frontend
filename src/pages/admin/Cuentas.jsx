import { useEffect, useState } from 'react'
// Importa el adaptador usando el alias
import { studentAdapter } from '@/adapters/student-adapter'

export default function Cuentas () {
  const [students, setStudents] = useState([])

  useEffect(() => {
    // Función para obtener los estudiantes transformados
    const fetchStudents = async () => {
      const transformedStudents = await studentAdapter.getTransformedStudents()
      setStudents(transformedStudents)
    }

    // Llama a la función al montar el componente
    fetchStudents()
  }, [])

  return (
    <div>
      <h1>Lista de Estudiantes</h1>
      {students.map((student) => (
        <div key={student.id}>
          <img src={student.foto} alt={`${student.nombreCompleto}'s foto`} />
          <h2>{student.nombreCompleto}</h2>
          <p>Estado: {student.estado}</p>
          <p>Contacto: {student.contacto.celular} y correo: {student.contacto.correo}</p>
          <p>Nacimiento: {student.ubicacion.lugarNacimiento}, ubicación: {student.ubicacion.direccion}</p>
          <p>Representante: {student.representante.nombre} {student.representante.apellido}, teléfono: {student.representante.telefono}</p>
          <p>Modalidad: {student.plan.modalidad}, nivel: {student.plan.nivel}, horario: {student.plan.horario}, fecha inicio: {student.plan.fechaInicio}</p>
          <p>Facturación - Nombre: {student.facturacion.nombreBoleta}, banco: {student.facturacion.banco}, número operación: {student.facturacion.numeroOperacion}, DNI: {student.facturacion.dni}</p>
        </div>
      ))}
    </div>
  )
}

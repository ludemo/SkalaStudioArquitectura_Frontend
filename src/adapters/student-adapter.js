import { studentService } from '@/services/api/student-service'

class StudentAdapter {
  async getTransformedStudents () {
    const estudiantes = await studentService.getStudents()
    const items = estudiantes.map((estudiante) => ({
      id: estudiante.id,
      nombreCompleto: `${estudiante.perfilEstudiante.nombres} ${estudiante.perfilEstudiante.apellidos}`,
      foto: estudiante.perfilEstudiante.foto,
      estado: estudiante.perfilEstudiante.estado,
      contacto: {
        celular: estudiante.perfilEstudiante.celular,
        correo: estudiante.datosPersonales.datosUbicacion.correo
      },
      ubicacion: {
        lugarNacimiento: estudiante.datosPersonales.datosUbicacion.lugarNacimiento,
        direccion: estudiante.datosPersonales.datosUbicacion.direccion
      },
      representante: {
        nombre: estudiante.datosPersonales.representante.nombre,
        apellido: estudiante.datosPersonales.representante.apellido,
        telefono: estudiante.datosPersonales.representante.telefono
      },
      plan: {
        modalidad: estudiante.datosTecnicos.plan.modalidad,
        nivel: estudiante.datosTecnicos.plan.nivel,
        horario: estudiante.datosTecnicos.plan.horario,
        fechaInicio: estudiante.datosTecnicos.plan.fechaInicio,
        fechaCierre: estudiante.datosTecnicos.plan.fechaCierre
      },
      facturacion: {
        nombreBoleta: estudiante.datosTecnicos.datosFacturacion.nombreBoleta,
        banco: estudiante.datosTecnicos.datosFacturacion.banco,
        numeroOperacion: estudiante.datosTecnicos.datosFacturacion.numeroOperacion,
        dni: estudiante.datosTecnicos.datosFacturacion.dni
      }
    }))

    return items
  }
}

export const studentAdapter = new StudentAdapter()

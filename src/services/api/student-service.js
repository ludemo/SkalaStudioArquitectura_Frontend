import estudiantesData from '@/data/Estudiantes.json'

// En el StudentService
class StudentsService {
  getStudents () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(estudiantesData)
      }, 500)
    })
  }

  getStudentById (id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const student = estudiantesData.find(student => student.id === parseInt(id))
        resolve(student)
      }, 500)
    })
  }
}

export const studentService = new StudentsService()

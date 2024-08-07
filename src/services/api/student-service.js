import estudiantesData from '@/data/Estudiantes.json'

class StudentsService {
  getStudents () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(estudiantesData)
      }, 500)
    })
  }
}

export const studentService = new StudentsService()

import estudiantesData from '@/data/Estudiantes.json'

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

  getRegisteredStudents (page = 1, limit = 10, search = '') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          students: [
            {
              id: 1,
              name: 'Juan Pérez',
              lastName: 'Gómez',
              status: true,
              paymentDate: new Date('2021-01-01'),
              startDate: new Date('2021-01-01'),
              closingDate: new Date('2021-12-31')
            },
            {
              id: 2,
              name: 'María Gómez',
              lastName: 'Martínez',
              status: true,
              paymentDate: new Date('2021-01-01'),
              startDate: new Date('2021-01-01'),
              closingDate: new Date('2021-12-31')
            },
            {
              id: 3,
              name: 'Luisa Martínez',
              lastName: 'Gómez',
              status: false,
              paymentDate: new Date('2021-01-01'),
              startDate: new Date('2021-01-01'),
              closingDate: new Date('2021-12-31')
            },
            {
              id: 4,
              name: 'Carlos Sánchez',
              lastName: 'Martínez',
              status: true,
              paymentDate: new Date('2021-01-01'),
              startDate: new Date('2021-01-01'),
              closingDate: new Date('2021-12-31')
            },
            {
              id: 5,
              name: 'Pedro Rodríguez',
              lastName: 'Gómez',
              status: true,
              paymentDate: new Date('2021-01-01'),
              startDate: new Date('2021-01-01'),
              closingDate: new Date('2021-12-31')
            }
          ]
        }
        resolve(data)
      }, 500)
    })
  }
}

export const studentService = new StudentsService()

class TeacherService {
  async getTeachers (page = 1, limit = 10, search = '') {
    const data = {
      teachers: [
        {
          id: 1,
          name: 'Juan Pérez',
          status: true,
          course: 'Matemáticas',
          qualification: 95
        },
        {
          id: 2,
          name: 'María Gómez',
          status: true,
          course: 'Historia',
          qualification: 88
        },
        {
          id: 3,
          name: 'Luisa Martínez',
          status: false,
          course: 'Física',
          qualification: 100
        },
        {
          id: 4,
          name: 'Carlos Sánchez',
          status: true,
          course: 'Química',
          qualification: 75
        },
        {
          id: 5,
          name: 'Pedro Rodríguez',
          status: true,
          course: 'Biología',
          qualification: 90
        }
      ]
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 500)
    })
  }

  async addTeacher (teacher) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Teacher added successfully' })
      }, 500)
    })
  }
}

export const teacherService = new TeacherService()

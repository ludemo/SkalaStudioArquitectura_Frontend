class StudentsService {
  async getStudents () {
    const data = {
      students: [
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
    }
    return data
  }
}

export const studentService = new StudentsService()

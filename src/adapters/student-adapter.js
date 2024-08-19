import { studentService } from '@/services/api/student-service'

class StudentAdapter {
  transformStudentData (student) {
    return {
      id: student.id,
      firstName: student.studentProfile.firstName,
      lastName: student.studentProfile.lastName,
      photo: student.studentProfile.photo,
      status: student.studentProfile.status,
      birthdate: student.studentProfile.birthdate,
      dni: student.studentProfile.dni,
      phone: student.studentProfile.phone,
      institution: student.personalDetails.academicDetails.institution,
      location: {
        email: student.personalDetails.locationDetails.email,
        birthplace: student.personalDetails.locationDetails.birthplace,
        address: student.personalDetails.locationDetails.address
      },
      representative: {
        firstName: student.personalDetails.representative.firstName,
        lastName: student.personalDetails.representative.lastName,
        phone: student.personalDetails.representative.phone
      },
      plan: {
        modality: student.technicalDetails.plan.modality,
        level: student.technicalDetails.plan.level,
        schedule: student.technicalDetails.plan.schedule,
        startDate: student.technicalDetails.plan.startDate,
        endDate: student.technicalDetails.plan.endDate
      },
      billing: {
        invoiceName: student.technicalDetails.billingDetails.invoiceName,
        bank: student.technicalDetails.billingDetails.bank,
        transactionNumber: student.technicalDetails.billingDetails.transactionNumber,
        dni: student.technicalDetails.billingDetails.dni
      }
    }
  }

  async getTransformedStudents () {
    const students = await studentService.getStudents()
    return students.map(student => this.transformStudentData(student))
  }

  async getTransformedStudentById (id) {
    const student = await studentService.getStudentById(id)
    return this.transformStudentData(student)
  }

  async getRegisteredStudents (page = 1, limit = 10, search = '') {
    const response = await studentService.getRegisteredStudents(page, limit, search)
    const { students } = response
    return {
      students: students.map((student) => ({
        id: student.id,
        name: student.name,
        lastName: student.lastName,
        status: student.status,
        paymentDate: student.paymentDate.toLocaleDateString(),
        startDate: student.startDate.toLocaleDateString(),
        closingDate: student.closingDate.toLocaleDateString()
      }))
    }
  }
}

export const studentAdapter = new StudentAdapter()

import { studentService } from '@/services/api/student-service'

class StudentAdapter {
  transformStudentData (student) {
    return {
      id: student.id,
      fullName: `${student.studentProfile.firstName} ${student.studentProfile.lastName}`,
      photo: student.studentProfile.photo,
      status: student.studentProfile.status,
      contact: {
        phone: student.studentProfile.phone,
        email: student.personalDetails.locationDetails.email
      },
      location: {
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
}

export const studentAdapter = new StudentAdapter()

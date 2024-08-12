import { getEmoticon } from '../utils/adapter-utils'
import { teacherService } from '../services/api/teacher-service'
class TeacherAdapter {
  async getTeachers (page = 1, limit = 10, search = '') {
    const response = await teacherService.getTeachers(page, limit, search)
    const { teachers } = response
    return {
      teachers: teachers.map((teacher) => ({
        id: teacher.id,
        name: teacher.name,
        status: teacher.status,
        course: teacher.course,
        qualification: getEmoticon(teacher.qualification)
      }))
    }
  }
}

export const teacherAdapter = new TeacherAdapter()

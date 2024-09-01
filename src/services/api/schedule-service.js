import ScheduleData from '@/data/Asistencia.json'

class ScheduleService {
  getScheduleByIdAndCycle (id, cycle) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const schedule = ScheduleData.find(schedule =>
          schedule.id === parseInt(id) &&
          schedule.cycle === parseInt(cycle)
        )
        resolve(schedule)
      }, 500)
    })
  }
}

export const scheduleService = new ScheduleService()

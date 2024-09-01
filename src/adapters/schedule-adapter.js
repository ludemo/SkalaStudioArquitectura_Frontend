import { scheduleService } from '@/services/api/schedule-service'

class ScheduleAdapter {
  transformScheduleData (schedule) {
    return {
      date: schedule.date,
      entry: schedule.entry,
      exit: schedule.exit
    }
  }

  async getTransformedSchedules (id, cycle) {
    const schedules = await scheduleService.getScheduleByIdAndCycle(id, cycle)
    console.log(schedules)
    return schedules.days.map(schedule => this.transformScheduleData(schedule))
  }
}

export const scheduleAdapter = new ScheduleAdapter()

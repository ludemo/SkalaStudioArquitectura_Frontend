class TeacherService {
  async getTeachers() {
    //return await axios.get('http://localhost:3000/teachers');
    const data = {
      teachers: [
        {
          id: 1,
          name: "Juan Pérez",
          status: true,
          course: "Matemáticas",
          qualification: 95,
        },
        {
          id: 2,
          name: "María Gómez",
          status: true,
          course: "Historia",
          qualification: 88,
        },
        {
          id: 3,
          name: "Luisa Martínez",
          status: false,
          course: "Física",
          qualification: 100,
        },
        {
          id: 4,
          name: "Carlos Sánchez",
          status: true,
          course: "Química",
          qualification: 75,
        },
        {
          id: 5,
          name: "Pedro Rodríguez",
          status: true,
          course: "Biología",
          qualification: 90,
        },
      ],
    };
    return data;
  }
}

export const teacherService = new TeacherService();

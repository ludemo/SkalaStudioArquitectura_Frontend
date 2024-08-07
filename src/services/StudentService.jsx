import estudiantesData from 'data/Estudiantes.json';

class StudentService {
  getStudents() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(estudiantesData);
      }, 500); 
    });
  }
}

export const studentService = new StudentService();

import { teacherAdapter } from "../../adapters/teacher-adapter";
import { useEffect, useState } from "react";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import styles from "./Profesores.module.css";

export default function Profesores() {
  const handleView = (id) => {
    console.log(`Ver docente ${id}`);
  };
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { teachers } = await teacherAdapter.getTeachers();
      setTeachers(teachers);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>administración de docentes</h1>
      <div className={styles.container}>
        <div className={styles.actions}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Buscar docente"
              className={styles.search__input}
            />
            <button className={styles.search__button}>
              <IconSearch stroke={2} size={20} />
            </button>
          </div>
          <button className={styles.addTeacher}>
            <IconPlus stroke={2} />
            <p>Agregar docente</p>
          </button>
        </div>
        <div>
          {loading && <p>Cargando...</p>}
          {!loading && teachers.length === 0 && <p>No hay profesores</p>}
          {!loading && teachers.length > 0 && (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>ID</th>
                  <th className={styles.th}>Nombre</th>
                  <th className={styles.th}>Estado</th>
                  <th className={styles.th}>Curso</th>
                  <th className={styles.th}>Calificación</th>
                  <th className={styles.th}></th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((item, index) => (
                  <tr key={index}>
                    <td className={styles.td}>{item.id}</td>
                    <td className={styles.td}>{item.name}</td>
                    <td className={styles.td}>
                      {item.status ? (
                        <span className={`${styles.status} ${styles.active}`}>
                          Activo
                        </span>
                      ) : (
                        <span className={`${styles.status} ${styles.inactive}`}>
                          Inactivo
                        </span>
                      )}
                    </td>
                    <td className={styles.td}>{item.course}</td>
                    <td className={`${styles.td} ${styles.qualification}`}>
                      {item.qualification}
                    </td>
                    <td className={styles.td}>
                      <button onClick={() => handleView(item.id)}>Ver</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

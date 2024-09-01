import { useCallback, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../profesor/Profesores.module.scss'
import { studentAdapter } from '@/adapters/student-adapter'
import { IconChevronLeft, IconChevronRight, IconEye, IconPlus, IconSearch } from '@tabler/icons-react'
import ReactPaginate from 'react-paginate'
import '../Pagination.css'

export default function Alumnos () {
  const [loading, setLoading] = useState(true)
  const [students, setStudents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  const fetchTeachers = useCallback(async (page, limit = 10) => {
    try {
      const { students } = await studentAdapter.getRegisteredStudents(page, limit, search)
      setStudents(students)
    } catch (error) {
      console.error('Error fetching students:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSearch = (event) => {
    event.preventDefault()
    const searchValue = event.currentTarget.elements.search.value
    if (!searchValue) {
      return
    }
    if (searchValue === search) {
      return
    }
    if (searchValue === '') {
      return
    }
    console.log('Buscar estudiante:', searchValue)
    setSearch(searchValue)
  }

  const handlePage = (page) => {
    console.log(`Página ${page.selected + 1}`)
    setCurrentPage(page.selected + 1)
  }

  useEffect(() => {
    console.log('Obtener estudiantes de la página ', currentPage)
    fetchTeachers(currentPage)
  }, [currentPage, search, fetchTeachers])

  return (
    <div>
      <h2 className={styles.title}>
        alumnos registrados
      </h2>
      <div />
      <div className={styles.container}>
        <div className={styles.actions}>
          <form className={styles.search} onClick={handleSearch}>
            <label htmlFor='search' className={styles.search__label}>
              Buscar docente
            </label>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Buscar alumno'
              className={styles.search__input}
            />
            <button
              className={styles.search__button}
              type='submit'
            >
              <IconSearch stroke={2} size={20} />
            </button>
          </form>
          <button className={styles.addTeacher}>
            <IconPlus stroke={2} />
            <p>Agregar filtro</p>
          </button>
        </div>
        <div>
        {loading && <p>Cargando...</p>}
          {!loading && students.length === 0 && <p>No hay profesores</p>}
          {!loading && students.length > 0 && (
            <div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Nombre</th>
                  <th className={styles.th}>Apellido</th>
                  <th className={styles.th}>Estado</th>
                  <th className={styles.th}>Fecha de Pago</th>
                  <th className={styles.th}>Fecha de Inicio</th>
                  <th className={styles.th}>Fecha de Cierre</th>
                </tr>
              </thead>
              <tbody>
                {students.map((item, index) => (
                  <tr key={index}>
                    <td className={styles.td}>{item.name}</td>
                    <td className={styles.td}>{item.lastName}</td>
                    <td className={styles.td}>
                        {item.status ? (<span className={`${styles.status} ${styles.active}`}>Activo</span>) : (<span className={`${styles.status} ${styles.inactive}`}>Inactivo</span>)}
                      </td>
                    <td className={styles.td}>{item.paymentDate}</td>
                    <td className={styles.td}>{item.startDate}</td>
                    <td className={styles.td}>{item.closingDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.pagination}>
                <ReactPaginate
                  previousLabel={<IconChevronLeft stroke={2} />}
                  nextLabel={<IconChevronRight stroke={2} />}
                  pageCount={3}
                  onPageChange={handlePage}
                  pageClassName='pagination__item'
                  containerClassName='pagination'
                  previousLinkClassName='pagination__link'
                  nextLinkClassName='pagination__link'
                  disabledClassName='pagination__link--disabled'
                  activeClassName='pagination__link--active'
                />
              </div>
          </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  )
}

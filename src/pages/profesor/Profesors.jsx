import { teacherAdapter } from '@/adapters/teacher-adapter'
import { useCallback, useEffect, useState } from 'react'
import styles from './Profesores.module.css'
import { IconChevronLeft, IconChevronRight, IconEye, IconPlus, IconSearch } from '@tabler/icons-react'
import ReactPaginate from 'react-paginate'
import '../Pagination.css'

export default function Profesores () {
  const [loading, setLoading] = useState(true)
  const [teachers, setTeachers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  const fetchTeachers = useCallback(async (page, limit = 10) => {
    try {
      const { teachers } = await teacherAdapter.getTeachers(page, limit, search)
      setTeachers(teachers)
    } catch (error) {
      console.error('Error fetching teachers:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleView = (id) => {
    console.log(`Ver docente ${id}`)
  }

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
    console.log('Buscar docente:', searchValue)
    setSearch(searchValue)
  }

  const handlePage = (page) => {
    console.log(`Página ${page.selected + 1}`)
    setCurrentPage(page.selected + 1)
  }

  useEffect(() => {
    console.log('Obtener docentes de la página ', currentPage)
    fetchTeachers(currentPage)
  }, [currentPage, search, fetchTeachers])

  return (
    <div>
      <h2 className={styles.title}>
        administración de docentes
      </h2>
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
              placeholder='Buscar docente'
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
            <p>Agregar docente</p>
          </button>
        </div>
        <div>
          {loading && <p>Cargando...</p>}
          {!loading && teachers.length === 0 && <p>No hay profesores</p>}
          {!loading && teachers.length > 0 && (
            <div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>ID</th>
                    <th className={styles.th}>Nombre</th>
                    <th className={styles.th}>Estado</th>
                    <th className={styles.th}>Curso</th>
                    <th className={styles.th}>Calificación</th>
                    <th className={styles.th} />
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((item, index) => (
                    <tr key={index}>
                      <td className={styles.td}>{item.id}</td>
                      <td className={styles.td}>{item.name}</td>
                      <td className={styles.td}>
                        {item.status ? (<span className={`${styles.status} ${styles.active}`}>Activo</span>) : (<span className={`${styles.status} ${styles.inactive}`}>Inactivo</span>)}
                      </td>
                      <td className={styles.td}>{item.course}</td>
                      <td className={`${styles.td} ${styles.qualification}`}>{item.qualification}</td>
                      <td className={styles.td}>
                        <button onClick={() => handleView(item.id)} className={styles.buttonDetail}><IconEye stroke={2} color='#0D2610' /></button>
                      </td>
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
    </div>
  )
}

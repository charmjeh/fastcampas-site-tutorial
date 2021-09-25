import type { NextPage } from 'next'
import styles from '../styles/Index.module.css'

const Detail: NextPage = () => {
  return (
    <div className={styles.container}>
      <nav aria-label="fastcampas">
        fastcampas
      </nav>

      <div role="banner">
        <h1>배너</h1>
      </div>

      <div title="lectureList">
        <h1>강의 목록</h1>
      </div>
    </div>
  )
}

export default Detail

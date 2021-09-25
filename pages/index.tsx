import type { NextPage } from 'next'
import styles from '../styles/Index.module.css'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import LectureGroup from '../components/lecture/LectureGroup'

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Banner />
      <LectureGroup />
    </div>
  )
}

export default Index
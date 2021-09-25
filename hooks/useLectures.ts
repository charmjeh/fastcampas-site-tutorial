import { useQuery } from "react-query";

const useLectures = (categories: string) => {
  return useQuery('lecture_list', () =>
    fetch(`/api/lectures?categories=${categories}`)
      .then(res => res.json())
      .then(res => res)
  )
}

export default useLectures;
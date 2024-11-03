import AllPosts from "../components/AllPosts"
import styles from "./Posts.module.css"
const Posts = () => {
  return (
    <div className={styles.posts}>
      <h1>All Posts</h1>
      <AllPosts />
      
    </div>
  )
}

export default Posts
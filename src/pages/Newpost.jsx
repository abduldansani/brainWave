import { MdSend } from "react-icons/md"
import styles from "./Newpost.module.css"
import { GrClear } from "react-icons/gr"
function Newpost() {
  return (
    <div className={`container ${styles.newpost}`}>
        <h1>New Post</h1>
        <div className={styles.newpost__action}>
            <GrClear className={styles.newpost__clear} />
            <MdSend className={styles.newpost__send} />
        </div>
        <form action="">
            <label htmlFor="title" className={styles.newpost__title}>
                <h4>Title</h4>
                <input type="text" />
            </label>
            <label htmlFor="body" className={styles.newpost__body}>
                <h4>Body</h4>
                <textarea name="body" id="body"></textarea>
            </label>
            <label htmlFor="" className={styles.newpost__category}>
                <h4>Category</h4>
                <select name="category" id="category">
                    <option value="">Select category</option>
                    <option value="option1">option1</option>
                    <option value="option1">option1</option>
                    <option value="option1">option1</option>
                </select>
            </label>
        </form>
    </div>
  )
}

export default Newpost
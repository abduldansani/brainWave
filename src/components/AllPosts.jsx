import { BiSolidDislike, BiSolidLike } from "react-icons/bi"
import styles from "./AllPosts.module.css"
import { PiPlus } from "react-icons/pi"

const posts = [
  {
    author: "Abduldansani",
    title: "Lorem ipsum dolor sit",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque quam omnis necessitatibus, porro blanditiis odio explicabo culpa tenetur ex quis fugiat est? Id molestias dolore eveniet a inventore. Pariatur.",
    timestamp: "11/10/2020",
    category: "category",
    likes: 4,
    dislikes: 0,
  },
  {
    author: "Abduldansani",
    title: "Lorem ipsum dolor sit",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque quam omnis necessitatibus, porro blanditiis odio explicabo culpa tenetur ex quis fugiat est? Id molestias dolore eveniet a inventore. Pariatur.",
    timestamp: "11/10/2020",
    category: "category",
    likes: 4,
    dislikes: 0,
  },
  {
    author: "Abduldansani",
    title: "Lorem ipsum dolor sit",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque quam omnis necessitatibus, porro blanditiis odio explicabo culpa tenetur ex quis fugiat est? Id molestias dolore eveniet a inventore. Pariatur.",
    timestamp: "11/10/2020",
    category: "category",
    likes: 4,
    dislikes: 0,
  }
]

function AllPosts() {
  return (
    <div className={`container ${styles.posts}`}>
        {posts.map(post => (
            <>
                <div 
                    className={styles.posts__post}
                >
                    <div className={styles.post__category}>{post.category}</div>
                    <div className={styles.post__content}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                    <div className={styles.post__action}></div>
                    <div className={styles.post__info}>
                        <div className={styles.post__reactions}>
                            <div className={styles.post__reaction}>
                                <BiSolidLike /> {post.likes}
                            </div>
                            <div className={styles.post__reaction}>
                                {post.dislikes} <BiSolidDislike />
                            </div>
                        </div>
                        <div className={styles.post__author}>
                            <p>{post.author}</p>
                            <p>{post.timestamp}</p>
                        </div>
                    </div>
                </div>
            </>
        ))
        }
        <div className={styles.posts__new}>
            <PiPlus className={styles.posts__plus} />
        </div>
    </div>
  )
}

export default AllPosts
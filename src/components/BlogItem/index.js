// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItems} = props
  const {title, publishedDate, description} = blogItems

  return (
    <li className="listOrder">
      <div className="row-cont">
        <h1 className="heading-Name">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem

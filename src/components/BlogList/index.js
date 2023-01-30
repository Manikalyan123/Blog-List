// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props
  return (
    <ul className="blogList">
      {blogList.map(each => (
        <BlogItem blogItems={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList

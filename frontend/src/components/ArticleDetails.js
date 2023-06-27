import { useArticlesContext } from '../hooks/useArticlesContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ArticleDetails = ({ article, isHome }) => {
  const { dispatch } = useArticlesContext()
  const { user } = useAuthContext()

  console.log('user:', user);
  console.log('article.user:', article.user);

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/articles/' + article._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_ARTICLE', payload: json})
    }
  }


  return (
    <div className="article-details">
      <h4>{article.title}</h4>
      <p><strong>Author: </strong>{article.author}</p>
      <p><strong>Content: </strong><div>{article.content}</div></p>
      <p>{formatDistanceToNow(new Date(article.createdAt), { addSuffix: true })}</p>
      {isHome ? null : <span className="material-symbols-outlined" onClick={handleClick}>delete</span>}
    </div>
  )
}

export default ArticleDetails

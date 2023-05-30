import { useArticlesContext } from "../hooks/useArticlesContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { useAuthContext } from '../hooks/useAuthContext'

const ArticleDetails = ({ article }) => {
    const { dispatch } = useArticlesContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
          return
        }    

        const response = await fetch('/api/article/' + article._id, {
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
            <p>{formatDistanceToNow(new Date(article.createdAt), {addSuffix: true})}</p>
            <pre><strong>Content: </strong>
                <p>{article.body}</p>
            </pre>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default ArticleDetails
import { useState } from "react"
import { useArticlesContext } from '../hooks/useArticlesContext'
import { useAuthContext } from '../hooks/useAuthContext'

const ArticleForm = () => {
    const {dispatch} = useArticlesContext()
    const { user } = useAuthContext()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!user) {
            setError('You must be logged in')
            return
          }      

        const article = {title, author, body}

        const response = await fetch('/api/article', {
            method: 'POST',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setAuthor('')
            setBody('')
            setError(null)
            setEmptyFields([])
            console.log('new article added', json)
            dispatch({type: 'CREATE_ARTICLE', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Article</h3>
            <label>Article Title: </label>
            <textarea
            rows="2"
            cols="50"
             type="text"
             onChange={(e) => setTitle(e.target.value)}
             value={title}
             className={emptyFields.includes('title') ? 'error' : ''}
             style={{ fontFamily: 'Poppins' }} 
            />

            <label>Author: </label>
            <textarea
            rows="2"
            cols="50"
             type="text"
             onChange={(e) => setAuthor(e.target.value)}
             value={author}
             className={emptyFields.includes('author') ? 'error' : ''}
             style={{ fontFamily: 'Poppins' }} 
            />

            <label>Content: </label>
            <textarea
            rows="15"
            cols="50"
             type="text"
             onChange={(e) => setBody(e.target.value)}
             value={body}
             className={emptyFields.includes('body') ? 'error' : ''}
             style={{ fontFamily: 'Poppins' }} 
            />  
            <button>Add Article</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ArticleForm
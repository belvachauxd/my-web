import { useEffect }from 'react'
import { useArticlesContext } from "../hooks/useArticlesContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import ArticleDetails from '../components/ArticleDetails'
import ArticleForm from '../components/ArticleForm'

const Home = () => {
  const {articles, dispatch} = useArticlesContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles", {
        headers: { 'Authorization': `Bearer ${user.token}` },
    });

      if (!response.ok) {
        const message = await response.json();
        console.error("Error fetching articles:", message.error);
        return;
      }

      const data = await response.json();
      dispatch({ type: "SET_ARTICLES", payload: data });
    };

    fetchArticles();
  }, [dispatch, user.token]);


  return (
    <div className="home">
      <div className="articles">
        {articles && articles.map((article) => (
          <ArticleDetails key={article._id} article={article} isHome={true}/>
        ))}
      </div>
      <ArticleForm />
    </div>
  )
}

export default Home
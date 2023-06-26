import { useEffect } from 'react';
import { useArticlesContext } from '../hooks/useArticlesContext';
import { useAuthContext } from '../hooks/useAuthContext';

import ArticleDetails from '../components/ArticleDetails';


const MyArticles = () => {
  const { articles, dispatch } = useArticlesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(`/api/articles`, {
        headers: { 'Authorization': `Bearer ${user.token}` },
      });

      if (!response.ok) {
        const message = await response.json();
        console.error('Error fetching articles:', message.error);
        return;
      }

      const json = await response.json();
      dispatch({ type: 'SET_ARTICLES', payload: json });
    };

    fetchArticles();
  }, [dispatch, user]);

  return (
    <div className="my-articles">
      <h2>My Articles</h2>
      <div className="articles">
        {articles && articles.map((article) => (
        <ArticleDetails key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default MyArticles;
// import { useEffect } from 'react';
// import { useArticlesContext } from '../hooks/useArticlesContext';

// import ArticleDetails from '../components/ArticleDetails';
// import ArticleForm from '../components/ArticleForm';


// const Home = () => {
//   const { articles, dispatch } = useArticlesContext();

//   useEffect(() => {
//     const fetchArticles = async () => {
//       const token = localStorage.getItem('token');
    
//       const response = await fetch('/api/article/all', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
    
//       if (!response.ok) {
//         const message = await response.json();
//         console.error('Error fetching articles:', message.error);
//         return;
//       }
    
//       const json = await response.json();
//       dispatch({ type: 'SET_ARTICLES', payload: json });
//     };
//       fetchArticles();
//   }, [dispatch]);
  
//   return (
//     <div className="home">
//       <div className="articles">
//         {articles && articles.map((article) => (
//           <ArticleDetails key={article._id} article={article} />
//         ))}
//       </div>
//       <ArticleForm />
//     </div>
//   )
// }

// export default Home;

// // const Home = () => {
// //   const { articles, dispatch } = useArticlesContext();
// //   const { user } = useAuthContext();

// //   useEffect(() => {
// //     const fetchArticles = async () => {
// //       const response = await fetch('/api/article', {
// //         headers: {'Authorization': `Bearer ${user.token}`},
// //       });
// //       const json = await response.json();

// //       if (response.ok) {
// //         dispatch({ type: 'SET_ARTICLES', payload: json });
// //       }
// //     };
// //     if (user) {
// //       fetchArticles();
// //     }
// //   }, [dispatch, user]);
  
// //   return (
// //     <div className="home">
// //       <div className="articles">
// //         {articles && articles.map((article) => (
// //           <ArticleDetails key={article._id} article={article} />
// //         ))}
// //       </div>
// //       <ArticleForm />
// //     </div>
// //   )
// // }

// // export default Home;

import { useEffect } from 'react';
import { useArticlesContext } from '../hooks/useArticlesContext';

import ArticleDetails from '../components/ArticleDetails';
import ArticleForm from '../components/ArticleForm';

const Home = () => {
  const { articles, dispatch } = useArticlesContext();

  useEffect(() => {
    dispatch({ type: 'SET_ARTICLES', payload: articles });
  }, [articles, dispatch]);

  return (
    <div className="home">
      <div className="articles">
        {articles && articles.map((article) => (
          <ArticleDetails key={article._id} article={article} />
        ))}
      </div>
      <ArticleForm />
    </div>
  );
};

export default Home;
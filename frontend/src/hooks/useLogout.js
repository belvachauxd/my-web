import { useAuthContext } from './useAuthContext'
import { useArticlesContext } from './useArticlesContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchArticles } = useArticlesContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchArticles({ type: 'SET_ARTICLES', payload: null })
  }

  return { logout }
}
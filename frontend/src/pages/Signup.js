import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>Email address:</label>
      <div> <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        style={{ width: "100%" }}
      /></div>
     
      <label>Password:</label>
       <div> <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        style={{ width: "100%" }}
      /></div>

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup
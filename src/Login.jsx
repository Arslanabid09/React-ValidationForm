import React, { useState } from 'react'

const Login = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')

  const handleValidation = (e) => {
    e.preventDefault()

    // Email regex pattern
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Password regex pattern (At least one letter, one number, and one special character)
    const passwordValidate = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if fields are empty
    if (!name || !email || !password) {
      // Display error message for 1 second
      setError('Please fill all the fields');
      setTimeout(() => {
        setError('');
      }, 1500);
      return;
    }

    // Email validation
    if (!email.match(emailValidate)) {
      setError('Please enter a valid email');
      return;
    }

    // Password length validation
    if (password.length < 8) {
      setError('Password should be at least 8 characters long');
      setTimeout(() => {
        setError('');
      }, 1500);
      return;
    }

    // Password character validation
    if (!password.match(passwordValidate)) {
      setError('Password should contain at least one letter, one number, and one special character');
      setTimeout(() => {
        setError('');
      }, 1500);
      return;
    }

// success 
    setSuccess("Registered successfully");
    setTimeout(() => {
      setSuccess('');
    },3000)
    console.log(name, email, password);
  }
  
  return (
    <form className='flex flex-col w-11/12 space-y-4 bg-white p-10 rounded-xl mr-32 h-5/6 mb-4 '>
    <h1 className='text-4xl text-center font-extrabold my-4'>Sign Up</h1>
    <div className='flex flex-col'>
      <label htmlFor="username" className='font-bold my-2'>Username</label>
      <input type="text" className='border-2 px-10 py-2 rounded-xl font-semibold outline-1 outline-orange-400' placeholder='Enter Your Username' name="username" id="username"
      onChange={(e)=>setName(e.target.value)}
      value={name}
      />
    </div>
    <div className='flex flex-col'>
      <label htmlFor="email" className='font-bold my-2'>Email</label>
      <input type="email" className='border-2 px-10 py-2 font-semibold rounded-xl outline-1 outline-orange-400' name="email" placeholder='Enter Your Email' id="email"
      onChange={(e)=>setEmail(e.target.value)}
        value={email}
      
      />
    </div>
    <div className='flex flex-col'>
      <label htmlFor="password" className='font-bold my-2'>Password</label>
      <input type="password" className='border-2 px-10 font-semibold py-2 rounded-xl outline-1 outline-orange-400' name="password" placeholder='Enter Your Password' id="password"
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
/>
    </div>
    {error ? (
       <p className='text-red-500 text-center  font-semibold '>
       {error}
     </p>
) : (
  <p className='text-blue-700 text-center  font-semibold '>
  {success}
</p>
)}

    <button className='bg-orange-400 hover:bg-orange-500 duration-300 font-bold text-white px-10 py-2 rounded-xl'
    onClick={handleValidation}
    >Sign Up</button>
    </form>
  )
}

export default Login
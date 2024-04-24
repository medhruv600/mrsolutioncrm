"use client"
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordStrengthIndicator = ({ password }: { password: string }) => {
  const getColor = (strength: string) => {
    switch (strength) {
      case 'weak':
        return 'text-red-500';
      case 'moderate':
        return 'text-yellow-500';
      case 'strong':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const calculateStrength = (password: string | any[]) => {
    if (password.length < 6) {
      return 'weak';
    }
    if (password.length < 10) {
      return 'moderate';
    }
    return 'strong';
  };

  const strength = calculateStrength(password);

  return (
    <p className={`text-sm mt-1 ${getColor(strength)}`}>
      {password.length > 0 ? `Password strength : ${strength.toUpperCase()}`: '\u00A0'}
    </p>
  );
};

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Load rememberMe state from localStorage on mount
  // useEffect(() => {
  //   const rememberMeValue = localStorage.getItem('rememberMe');
  //   setRememberMe(rememberMeValue === 'true');
  // }, []);

  // Save rememberMe state to localStorage when it changes
  // useEffect(() => {
  //   localStorage.setItem('rememberMe', rememberMe.toString());
  // }, [rememberMe]);

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Perform basic client-side validation
    // if (!email || !password) {
    //   toast.error('Please fill in all fields');
    //   return;
    // }

    setLoading(true);

    // Simulate API call to validate email and password
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const users = await response.json();
    // console.log("users",users)

    // Find the user with matching email and password
    const user = users.find((u: { email: string; username: string; }) => u.email === email && u.username === password);

      if (user) {
      toast.success('Login successful')
      // You may want to store the user data in localStorage or set a state for authentication
      // localStorage.setItem('user', JSON.stringify(user));
      setTimeout(()=>{
        router.push('/dashboard');
      }, 1000);
      return;
    } else {
      // toast.error('Invalid credentials', {
        //   position: 'top-center',
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        toast.error('Invalid email or password');
      return;
    }
    } catch (error) {
      // console.error(error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    } 
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-blue-500 text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email (
            <span className=" text-red-500">*</span>)
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id="email"
              type="email"
              placeholder="user@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
              aria-required="true"
              required
            />
          </div>
          <div className="mb-6 relative">
          <fieldset>
            <legend className="block text-gray-700">
              Password (
              <span className=" text-red-500">*</span>)
            </legend>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              aria-required="true"
              required
            />
            {/* Add password strength indicator here */}
            <PasswordStrengthIndicator password={password} />
            </fieldset>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 leading-tight"
              // Implement "Remember Me" functionality here
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember Me
            </label>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            type="submit"
            disabled={loading}
            // onClick={handleLogin}
          >
            {/* Login */}
            {loading ? 'Logging in...' : 'Login'}
          </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginPage;
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { stLogin } from './LoginAtom'
import {  useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate()
  const setIsLogin = useSetRecoilState(stLogin);
  const handleLogin = () => {
    setIsLogin(true);
    navigate('/home')
  }
  return (
    <button onClick={handleLogin} className='bg-yellow-300 w-10 h-10'></button>
  )
}

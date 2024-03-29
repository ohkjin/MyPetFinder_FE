import React, { useState } from 'react'
import LoginJoinForm from '../UI/LoginJoinForm'
import kakao from '../../../assets/images/oauth/kakao_join_medium_wide.png'
// import welsh from '../../../assets/images/welcome/tricatwelcome.jpg'
import { userJoin } from './JoinApi'
import { useNavigate } from 'react-router-dom'

function Join() {
  const [email, setEmail] = useState('');
  const [emailAlert,setEmailAlert] = useState('');
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const [pwd,setPwd] = useState('');
  const [pwdAlert,setPwdAlert] = useState('');
  const pwdRegex = /^[A-Za-z0-9]*$/;
  const [pwdCheckAlert,setPwdCheckAlert] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  const [errMessage,setErrMessage] = useState(<></>);

  const userDetail = {
    "userId": email,
    "password": pwd,
    "nickname": nickname
  }
  // const userDetail = {
  //   "userId": 'qwer@qwer.com',
  //   "password": 'qwerqwer',
  //   "nickname": 'qwer'
  // }
  
  const handleEmail = (e) => {
    e.preventDefault();
    console.log(!emailRegex.test(e.target.value))
    if(!emailRegex.test(e.target.value)){
      setEmailAlert('올바른 이메일 형식이 아닙니다.')
      return
    }
    setEmailAlert('')
    setEmail(e.target.value)
  }
  const handlePwd = (e) => {
    e.preventDefault()
    if(e.target.value.length<8 || e.target.value.length>20||!pwdRegex.test(e.target.value)){
      setPwdAlert('비밀번호는 문자와 숫자만을 사용하여 8-20자로 입력해주세요.')
      return
    }
    setPwdAlert('')
    setPwd(e.target.value);
  }

  const handlePwdCheck = (e) => {
    e.preventDefault()
    if(pwd!==e.target.value){
      setPwdCheckAlert('비밀번호가 동일하지 않습니다. 다시 입력해주세요.')
      return
    }
    setPwdCheckAlert('')
  }
 
  const handleJoin = (e) => {
    e.preventDefault();
    if(email===''||nickname===''||pwd===''||emailAlert!==''||pwdAlert!==''||pwdCheckAlert!==''){
      setErrMessage(<div className='w-full text-red-500 text-sm font-bold flex justify-center items-center'>모든 칸은 입력되어야하며 에러사항이 없도록 확인해주세요</div>)
      return
    }
    try{
    userJoin(userDetail)
      .then(data => {
        console.log(data)
        // setPopup({
        //     open: true,
        //     title: 'Confirm',
        //     message: data.message,
        //     callback: function () { navigate('/user/login') }
        //   })
          navigate('../user/login')
      }).catch(err => {
        console.log(err.response)
        if(err.response){
          setErrMessage(<div className='flex-wrap  text-red-500 text-sm font-bold flex justify-center items-center'>{err.response.data.status.message}</div>)
        }
      })
    }catch(e){
      console.log(e)
    }
  }

  const handleKakaoJoin = () => {

  }
  const inputs =  <>
  <input type='email' maxLength={30} onChange={handleEmail} placeholder='이메일' className='mt-10 w-[300px] h-[42px]  p-3 border-b border-slate-200' />
  <div className='text-xs text-red-500 w-[300px]'>{emailAlert}</div>
  <input type='text'  maxLength={10} onChange={e => setNickname(e.target.value)} placeholder='닉네임' className='mt-3 w-[300px] h-[42px]  p-3 border-b border-slate-200' />
  <input type='password'  maxLength={20} onChange={handlePwd} placeholder='비밀번호' className='mt-3 w-[300px] h-[42px]  p-3 border-b border-slate-200' />
  <div className='text-xs text-red-500 w-[300px]'>{pwdAlert}</div>
  <input type='password'  maxLength={20} onChange={handlePwdCheck} placeholder='비밀번호 확인' className='mt-3 w-[300px] h-[42px]  p-3 border-b border-slate-200' />
  <div className='text-xs text-red-500 mb-7 w-[300px]'>{pwdCheckAlert}</div>
</>


  return (
    <div className='totalContainer'>
      <div className='innerContainer whiteContainer min-w-96 p-10 flex flex-col items-center'>
        <div className='login_img'>
          {/* <img src={welsh} alt='welcome welsh' className='w-[400px]' /> */}
        </div>
        <LoginJoinForm kakao={kakao} errMsgDiv={errMessage} handleKakao={handleKakaoJoin} functionText={'회원가입'}  inputs = {inputs} handleButton={handleJoin} emailShown={true}/>
      </div>
    </div>
  )
}

export default Join
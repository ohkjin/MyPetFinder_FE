import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { stLogin } from '../user/atom/LoginAtom'

export default function Navbar() {
    const isLogin = useRecoilValue(stLogin);
    const linkShape = 'block pt-3 pb-2 px-3 rounded-md lg:inline-block lg:mt-0 mr-4 flex flex-row justify-center items-center'
    const linkFont = 'text-slate-800 font-tenada '
    const linkDesign = 'border border-yellow-300 border-2 '
    const linkHover = 'hover:bg-orange-400 hover:text-white '
    return (
        <nav className="container w-full">
        <div className="w-full mx-auto bg-white p-4 shadow-md flex flex-row items-center">
            <div className='basis-2/5 flex flex-row justify-evenly items-center'>
                <Link to="/home" className={`${linkShape}${linkDesign}${linkHover}${linkFont}`}>
                    홈
                </Link>
                <Link to="/home" className={`${linkShape}${linkDesign}${linkHover}${linkFont}`}>
                    홈
                </Link>
            </div>
            <div className={`basis-1/5 flex justify-center items-center text-2xl ${linkFont} `}>
                MyPetFinder
            </div>
            <div className='basis-2/5 flex flex-row justify-evenly items-center'>
                
                {isLogin?
                <Link to="/user/mypage" className={`${linkShape}${linkDesign}${linkHover}${linkFont}`}>
                    MyPage
                </Link>
                :
                <Link to="/user/login" className={`${linkShape}${linkDesign}${linkHover}${linkFont}`}>
                    로그인
                </Link>
                }
                <Link to="/user/join" className={`${linkShape}${linkDesign}${linkHover}${linkFont}`}>
                    회원가입
                </Link>
            </div>
        </div>
    </nav>
    )
}
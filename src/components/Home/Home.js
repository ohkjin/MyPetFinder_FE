// import welcomeHome from '../../assets/images/welcome/welcomeHome.jpg'
export default function Home() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='BgImage w-4/5 ' >
        <div className={`bg-[url('./assets/images/welcome/welcomeHome.jpg')] bg-cover`}>
          
        </div>
        {/* <img src={welcomeHome} alt='welcome Home'/> */}
      </div>
        <div className='Title '>
          Home
        </div>
    </div>
  )
}

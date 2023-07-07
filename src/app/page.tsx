import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <div  className="flex flex-col justify-center  center text-center">
     <div className='p-8'><h1>welcome page is here</h1></div>
     <div className='p-4'><Link className='text-[#276e2c]' href={"/register"}>register page</Link></div>
     <div className='p-4'><Link className='text-[#276e2c]' href={"/signin"}>sign in page</Link></div>
     </div>
    </main>
  )
}

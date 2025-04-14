import { isAuthenticated, signOut } from '@/lib/actions/auth.actions'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const RootLayout =async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated){
    redirect('/sign-in');
  }
  return (
    <div className='root-layout'>
      <nav className='flex justify-between'>
        <Link href="/" className='flex gap-2 items-center'>
          <Image src={"/logo.svg"} alt="logo" height={32} width={38}/>
          <h2 className='text-primary-100'>SpeakToCrack</h2>
        </Link>
        {
          isUserAuthenticated ? (
            
              <button onClick={signOut} className='btn-secondary'>Log Out</button>
          ) : (
            <Link href="/sign-in" className='btn-primary'>Sign In</Link>
          )
        }
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
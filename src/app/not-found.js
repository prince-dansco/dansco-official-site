import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className=''>
        <div className="flex flex-col items-center gap-1 text-center py-5 justify-between w-full ">
            <h1 className='text-5xl text-blue-400'> This page was not found</h1>
            <p className='text-balance '> please it seem like the file path you just enter is not correct  check to see if it exist in the folder structure</p>
            <p>please go back to <Link href='/' className='text-blue-400'>Homepage</Link></p>
        </div>
    </div>
  )
}

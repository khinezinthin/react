import React from 'react'
import { Loader } from '@mantine/core';

const Loading = () => {
  return (
    <div className='flex h-screen justify-center'>
        <Loader color="violet" variant="bars" />
    </div>
  )
}

export default Loading
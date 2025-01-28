import React from 'react'
import {
   Html , 
   Body , 
   Container ,
    Text , 
    Link , 
    Preview,
    Tailwind
   } from '@react-email/components'
const welcomeEmail = ({name}: {name: string}) => {
  return (
    <Html>
        <Preview>Welcome abroad !</Preview>
        <Tailwind>
        <Body className='bg-cyan-700'>
            <Container>
                <Text className='text-xl text-cyan-400'>Hello {name}</Text>
                <Link href='https://ahmedharedy.com'>
                Contact us
                </Link>
            </Container>
        </Body>
        </Tailwind>
    </Html>
  )
}

export default welcomeEmail
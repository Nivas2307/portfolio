import { TypeAnimation } from 'react-type-animation';
import React from 'react'

const Mern = () => {
  return (
    <div>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'MERN-FULL STACK Developer...',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web_Developer...',
        1000,
        'Front_End Developer...',
        1000,
        'Back_End Developer...',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}

export default Mern
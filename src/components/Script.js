import React from 'react'
import {useScript} from '@hooks';

export const Script = () => {
  const reCaptcha = 'https://www.google.com/recaptcha/api.js';

  // We can use isLoaded or isError for showing different UI depending on demands
  const [isLoaded, isError] = useScript(reCaptcha); 
  
  return (
    <div>
      I can load any scripts      
    </div>
  )
}
 
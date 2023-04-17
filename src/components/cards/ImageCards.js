import React from 'react'
import { Box } from '../elements'
import {Text} from '../elements'
export default function ImageCards({className,Imgsrc,alt,productTitle}) {
  return (
    
        <Box className={'image-card-box '}>
            <img src={Imgsrc} alt='img'/>
            <Text className={'image-card-overlay-text f-13'}  as="span">{productTitle}</Text>
        </Box>
  )
}

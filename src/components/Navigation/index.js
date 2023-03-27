import React from 'react'

import { useNavigate } from 'react-router-dom'

// mui components
import Box from '@mui/material/Box'

// assets
import Logo from 'src/assets/icons/logo.svg'
import Frame01Pink from 'src/assets/icons/frame-01-pink.svg'
import Frame01White from 'src/assets/icons/frame-01-white.svg'
import Frame02Pink from 'src/assets/icons/frame-02-pink.svg'
import Frame02White from 'src/assets/icons/frame-02-white.svg'
import Frame03Pink from 'src/assets/icons/frame-03-pink.svg'
import Frame03White from 'src/assets/icons/frame-03-white.svg'
import Frame04Pink from 'src/assets/icons/frame-04-pink.svg'
import Frame04White from 'src/assets/icons/frame-04-white.svg'
import Frame05Pink from 'src/assets/icons/frame-05-pink.svg'
import Frame05White from 'src/assets/icons/frame-05-white.svg'
import Frame06Pink from 'src/assets/icons/frame-06-pink.svg'
import Frame06White from 'src/assets/icons/frame-06-white.svg'
import Frame07Pink from 'src/assets/icons/frame-07-pink.svg'
import Frame07White from 'src/assets/icons/frame-07-white.svg'
import Frame08Pink from 'src/assets/icons/frame-08-pink.svg'
import Frame08White from 'src/assets/icons/frame-08-white.svg'

const Navigation = props => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        boxSizing: 'border-box',
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '30px',
        paddingBottom: '40px',
        width: 80,
        height: '100vh',
        backgroundColor: '#05030f',
        borderRight: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
        <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src={Logo} alt="" />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={Frame01White} alt="" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={Frame02White} alt="" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={Frame03White} alt="" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={Frame04White} alt="" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={Frame05White} alt="" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={Frame06White} alt="" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={Frame07White} alt="" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img src={Frame08White} alt="" />
          </Box>
        </Box>
      </Box>
      <Box>aaa</Box>
    </Box>
  )
}

export default Navigation

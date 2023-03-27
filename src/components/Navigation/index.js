import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

// mui components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

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
import Line from 'src/assets/icons/horizontal-line-white.svg'
import DotsCircle from 'src/assets/icons/dots-horizontal-circle-outline-white.svg'

const Navigation = props => {
  const location = useLocation()
  const navigate = useNavigate()

  // styles
  const container = {
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
  }

  const navContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    minWidth: '40px',
    height: '40px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
  }

  const activeNavContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    minWidth: '40px',
    height: '40px',
    backgroundColor: '#18142C',
    borderRadius: '8px',
  }

  const updateNavigation = path => {
    navigate(path)
  }

  return (
    <Box sx={container}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
        <Button onClick={() => navigate('/')}>
          <img src={Logo} alt="" />
        </Button>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <Button
            sx={location.pathname === '/01' ? activeNavContainer : navContainer}
            onClick={() => updateNavigation('/01')}
          >
            <img src={location.pathname === '/01' ? Frame01Pink : Frame01White} alt="" />
          </Button>
          <Button
            sx={location.pathname === '/02' ? activeNavContainer : navContainer}
            onClick={() => updateNavigation('/02')}
          >
            <img src={location.pathname === '/02' ? Frame02Pink : Frame02White} alt="" />
          </Button>
          <Button
            sx={location.pathname === '/03' ? activeNavContainer : navContainer}
            onClick={() => updateNavigation('/03')}
          >
            <img src={location.pathname === '/03' ? Frame03Pink : Frame03White} alt="" />
          </Button>
          <Button
            sx={location.pathname === '/04' ? activeNavContainer : navContainer}
            onClick={() => updateNavigation('/04')}
          >
            <img src={location.pathname === '/04' ? Frame04Pink : Frame04White} alt="" />
          </Button>
          <Button
            sx={location.pathname === '/05' ? activeNavContainer : navContainer}
            onClick={() => updateNavigation('/05')}
          >
            <img src={location.pathname === '/05' ? Frame05Pink : Frame05White} alt="" />
          </Button>
          <Button
            sx={location.pathname === '/06' ? activeNavContainer : navContainer}
            onClick={() => updateNavigation('/06')}
          >
            <img src={location.pathname === '/06' ? Frame06Pink : Frame06White} alt="" />
          </Button>
          <Button
            sx={location.pathname === '/07' ? activeNavContainer : navContainer}
            onClick={() => updateNavigation('/07')}
          >
            <img src={location.pathname === '/07' ? Frame07Pink : Frame07White} alt="" />
          </Button>
          <Button
            sx={location.pathname === '/08' ? activeNavContainer : navContainer}
            onClick={() => updateNavigation('/08')}
          >
            <img src={location.pathname === '/08' ? Frame08Pink : Frame08White} alt="" />
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        <img src={Line} alt="" />
        <Button onClick={() => updateNavigation('')}>
          <img src={DotsCircle} alt="" />
        </Button>
      </Box>
    </Box>
  )
}

export default Navigation

import React from 'react'

// mui components
import Box from '@mui/material/Box'

// custom components
import Navigation from 'src/components/Navigation'

// assets
import Background from 'src/assets/images/background.png'

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'noWrap',
        overflow: 'hidden',
      }}
    >
      <Navigation />
      <Box sx={{ flexGrow: 1, position: 'relative', maxHeight: '100vh' }}>
        <Box sx={{ position: 'absolute', inset: 0 }}>
          <img src={Background} alt="" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </Box>
        {children}
      </Box>
    </Box>
  )
}

export default Layout

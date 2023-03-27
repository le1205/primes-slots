import React from 'react'

// mui components
import Box from '@mui/material/Box'

// custom components
import Navigation from 'src/components/Navigation'

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'noWrap' }}>
      <Navigation />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Box>
  )
}

export default Layout

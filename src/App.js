import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'

import { Routes, Route } from 'react-router-dom'

// mui components
import Box from '@mui/material/Box'

import Home from 'src/pages/Home'

const App = () => {
  const font = 'Inter'
  const theme = createTheme({
    typography: {
      fontFamily: font,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Routes>
          <Route redirect="/01" path="/" element={<Home />} />
          <Route path="/01" element={<Home />} />
          <Route path="/02" element={<Home />} />
          <Route path="/03" element={<Home />} />
          <Route path="/04" element={<Home />} />
          <Route path="/05" element={<Home />} />
          <Route path="/06" element={<Home />} />
          <Route path="/07" element={<Home />} />
          <Route path="/08" element={<Home />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App

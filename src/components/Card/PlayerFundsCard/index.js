import React from 'react'

// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// assets
import SOLIcon from 'src/assets/icons/sol.svg'

const PlayerFundsCard = props => {
  const { funds } = props
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 0,
        alignItems: 'center',
        gap: '8px',
        marginTop: '10px',
        padding: '20px 50px',
        ':before': {
          width: '100%',
          content: '""',
          position: 'absolute',
          zIndex: -1,
          inset: 0,
          padding: '2px',
          borderRadius: '15px',
          background: 'linear-gradient(to top, #8D0AF4, #EF127C)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        },
      }}
    >
      <img src={SOLIcon} alt="" />
      <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>{funds} SOL</Typography>
    </Box>
  )
}

export default PlayerFundsCard

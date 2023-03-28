import React from 'react'

// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// assets
import SOLIcon from 'src/assets/icons/sol.svg'

const TimeCount = props => {
  const { funds } = props
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 0,
        alignItems: 'center',
        boxSizing: 'border-box',
        gap: '8px',
        ':before': {
          width: 'calc(100% - 4px)',
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
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 0,
          alignItems: 'center',
          gap: '8px',
          padding: '20px',
          backgroundColor: '#EF127C',
          borderRadius: '15px',
        }}
      >
        <img src={SOLIcon} alt="" />
        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>{funds.toLocaleString('en-US')} SOL</Typography>
      </Box>
      <Box sx={{ width: '100%', padding: '7px 24px 14px 24px', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'block' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#EF127C', lineHeight: '1' }}>24</Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>DAY</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#EF127C', lineHeight: '1' }}>:</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#EF127C', lineHeight: '1' }}>13</Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>HR</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#EF127C', lineHeight: '1' }}>:</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#EF127C', lineHeight: '1' }}>08</Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>MIN</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#EF127C', lineHeight: '1' }}>:</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#EF127C', lineHeight: '1' }}>02</Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>SEC</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default TimeCount

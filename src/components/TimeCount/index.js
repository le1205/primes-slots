import React, { useEffect, useState } from 'react'

// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// custom functions
import { calculateTimeLeft } from 'src/utils'

// assets
import SOLIcon from 'src/assets/icons/sol.svg'

const TimeCount = props => {
  const { funds } = props

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(1683676800000)) // 1683676800000: 2023/05/10 00:00:00

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(1683676800000))
    }, 1000)

    return () => clearTimeout(timer)
  })

  const titleStyle = {
    textAlign: 'left',
    width: '31px',
    fontSize: '24px',
    fontWeight: '700',
    color: '#EF127C',
    lineHeight: '1',
  }

  const colonStyle = { fontSize: '24px', fontWeight: '700', color: '#EF127C', lineHeight: '1' }
  const subTitleStyle = { fontSize: '12px', fontWeight: '700' }

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
          <Typography sx={titleStyle}>{timeLeft['days']}</Typography>
          <Typography sx={subTitleStyle}>DAY</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={colonStyle}>:</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={titleStyle}>{timeLeft['hours']}</Typography>
          <Typography sx={subTitleStyle}>HR</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={colonStyle}>:</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={titleStyle}>{timeLeft['minutes']}</Typography>
          <Typography sx={subTitleStyle}>MIN</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={colonStyle}>:</Typography>
        </Box>
        <Box sx={{ display: 'block' }}>
          <Typography sx={titleStyle}>{timeLeft['seconds']}</Typography>
          <Typography sx={subTitleStyle}>SEC</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default TimeCount

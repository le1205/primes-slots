import React from 'react'

// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// assets
import CatPinkIcon from 'src/assets/icons/cat-pink.svg'

const TitleCard = props => {
  const { title, description } = props
  return (
    <Box
      sx={{
        display: 'block',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 0,
        alignItems: 'center',
        gap: '8px',
        marginTop: '50px',
        padding: '20px 50px 64px 50px',
        ':before': {
          width: '100%',
          content: '""',
          position: 'absolute',
          zIndex: -1,
          inset: 0,
          padding: '2px',
          borderRadius: '60px 60px 0px 0px',
          background: 'linear-gradient(to top, #8D0AF4, #EF127C)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        },
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', height: '2px', marginTop: '-20px' }}>
        <Box sx={{ width: '170px', height: '2px', backgroundColor: '#0a0427' }} />
      </Box>
      <Box sx={{ marginTop: '-40px' }}>
        <img src={CatPinkIcon} alt="" />
      </Box>
      <Typography
        sx={{
          fontSize: '58px',
          fontWeight: '900',
          lineHeight: '84px',
          textShadow: '0px 0px 5px #EF127C',
          marginTop: '-40px',
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: '20px', fontWeight: '600', lineHeight: '24px', color: '#EF127C' }}>
        {description}
      </Typography>
    </Box>
  )
}

export default TitleCard

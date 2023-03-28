import React from 'react'

// mui components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// assets
import SolIcon from 'src/assets/icons/sol.svg'

const OutlineButton = props => {
  const { price, active, onClick } = props

  // style
  const activeButtonStyle = {
    width: '100%',
    height: '65px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 0,
    borderRadius: '10px',
    alignItems: 'center',
    gap: '4px',
    background: '#EF127C',
    boxShadow: '0px 0px 10px rgba(239, 18, 124, 0.8)',
  }

  const buttonStyle = {
    width: '100%',
    height: '65px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 0,
    borderRadius: '10px',
    alignItems: 'center',
    gap: '4px',
    background: '#0A0527',
    boxShadow: '0px 0px 10px rgba(96, 1, 252, 0.5);',
    ':before': {
      width: '100%',
      content: '""',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      padding: '2px',
      borderRadius: '10px',
      background: 'linear-gradient(to top, #8D0AF4, #EF127C)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
    },
  }

  return (
    <Button sx={active ? activeButtonStyle : buttonStyle} onClick={() => onClick(price)}>
      <img src={SolIcon} alt="" style={{ paddingLeft: '4px' }} />
      <Typography sx={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>
        {price.toLocaleString('en-US')} SOL
      </Typography>
    </Button>
  )
}

export default OutlineButton

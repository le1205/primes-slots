import React from 'react'

// mui components
import Button from '@mui/material/Button'

// assets
import UserWhiteIcon from 'src/assets/icons/user-white.svg'

const AccountButton = props => {
  return (
    <Button
      sx={{
        width: '50px',
        minWidth: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 0,
        borderRadius: '10px',
        alignItems: 'center',
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
      }}
    >
      <img src={UserWhiteIcon} alt="" style={{ paddingLeft: '4px' }} />
    </Button>
  )
}

export default AccountButton

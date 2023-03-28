import { useEffect, useState } from 'react'
// mui components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// custom components
import Layout from 'src/components/Layouts'

// assets
import SOLIcon from 'src/assets/icons/sol.svg'

const Home = () => {
  const [communityFunds, setCommunityFunds] = useState()
  return (
    <Layout>
      <Box sx={{ padding: '40px 240px' }}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: '0', right: '0px', color: 'white', display: 'block' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Player Funds</Typography>
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
                  '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  '-webkit-mask-composite': 'xor',
                  maskComposite: 'exclude',
                },
              }}
            >
              <img src={SOLIcon} alt="" />
              <Typography>12,786 SOL</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Community Funds</Typography>
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '10px',
              padding: '20px 51px',
              border: '2px solid transparent',
              borderRadius: '15px',
              background:
                'linear-gradient(to bottom, #0A0527, #0A0527) padding-box, linear-gradient(to bottom, #8D0AF4, #EF127C) border-box',
            }}
          >
            <img src={SOLIcon} alt="" />
            <Typography>12,786 SOL</Typography>
          </Box> */}
        </Box>
      </Box>
    </Layout>
  )
}

export default Home

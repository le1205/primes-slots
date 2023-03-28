import { useEffect, useState } from 'react'

// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// custom components
import Layout from 'src/components/Layouts'
import PlayerFundsCard from 'src/components/Card/PlayerFundsCard'

const Home = () => {
  const [communityFunds, setCommunityFunds] = useState()
  return (
    <Layout>
      <Box sx={{ padding: '40px 240px' }}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: '0', right: '0px', color: 'white', display: 'block' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Player Funds</Typography>
            <PlayerFundsCard funds={12786} />
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Community Funds</Typography>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home

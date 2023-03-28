import { useState } from 'react'

// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// custom components
import Layout from 'src/components/Layouts'
import PlayerFundsCard from 'src/components/Card/PlayerFundsCard'
import TimeCount from 'src/components/TimeCount'

const Home = () => {
  const [communityFunds, setCommunityFunds] = useState(12786)
  const [playerFunds, setPlayerFunds] = useState(12786)
  return (
    <Layout>
      <Box sx={{ padding: '40px 240px' }}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: '0', right: '0px', color: 'white', display: 'block' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>Player Funds</Typography>
            <PlayerFundsCard funds={playerFunds} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={{ width: '100%', fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>
            Community Funds
          </Typography>
          <Box sx={{ width: '233px' }}>
            <TimeCount funds={communityFunds} />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home

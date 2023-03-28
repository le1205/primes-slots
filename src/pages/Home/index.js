import { useState } from 'react'

// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// custom components
import Layout from 'src/components/Layouts'
import PlayerFundsCard from 'src/components/Card/PlayerFundsCard'
import TimeCount from 'src/components/TimeCount'
import TitleCard from 'src/components/Card/TitleCard'
import OutlineButton from 'src/components/Button/OutlineButton'

const Home = () => {
  const [communityFunds, setCommunityFunds] = useState(12786)
  const [playerFunds, setPlayerFunds] = useState(12786)
  const [price, setPrice] = useState(0.05)
  const handleChangePrice = price => {
    setPrice(price)
  }

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
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '233px' }}>
              <TimeCount funds={communityFunds} />
            </Box>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
            <Box sx={{ width: '500px' }}>
              <TitleCard title="Primes Slots" description="Spin and win your prize" />
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: '850px',
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
              gap: '20px',
            }}
          >
            <OutlineButton
              price={0.05}
              active={price === 0.05 ? true : false}
              onClick={price => handleChangePrice(price)}
            />
            <OutlineButton
              price={0.1}
              active={price === 0.1 ? true : false}
              onClick={price => handleChangePrice(price)}
            />
            <OutlineButton
              price={0.25}
              active={price === 0.25 ? true : false}
              onClick={price => handleChangePrice(price)}
            />
            <OutlineButton
              price={0.5}
              active={price === 0.5 ? true : false}
              onClick={price => handleChangePrice(price)}
            />
            <OutlineButton price={1} active={price === 1 ? true : false} onClick={price => handleChangePrice(price)} />
            <OutlineButton price={2} active={price === 2 ? true : false} onClick={price => handleChangePrice(price)} />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home


import { Container, Typography, Box, Paper, Button } from '@mui/material'

function App() {
  const serviceList = ["Service 1", "Service 2", "Service 3"]

  return (
    <Container>
      <Typography
        variant='h1'
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}>
        Services
      </Typography>
      <Typography variant="h3">Overview</Typography>
      <Box sx={{
        display: "flex",
        flexDirection: {xs: "column", md:"row"},
        pt: 4,
        justifyContent: "space-between",
        gap: 4,
      }}>
        {serviceList.map((service) => (
          <Paper elevation={3} sx={{width:{xs:1, md:350}}}>
            <Box sx={{m: 3}}>
            <Typography variant="h4">{service}</Typography>
            <Typography sx={{mt:2}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volumtate velit esse cillum dolore eu fugiat nulla pariaur. Excepteur sint occaencat cupidatat non proident, sunt in culp qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Button sx={{m:2}} variant='outlined'>
              Learn More
            </Button>
            </Box>
          </Paper>





        ))}
      </Box>
    </Container>

  )
}

export default App

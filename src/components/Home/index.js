//home screan

import { Box, Typography, FilledInput, IconButton } from '@mui/material'

import {
  Search as SearchIcon,
  Bookmark as BookmarkIcon,
} from '@mui/icons-material'

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <img src="/assets/book.png" alt="Book" />
        <Typography
          color="primary"
          sx={{
            mt: 3,
            mb: 1,
          }}
          variant="h4"
        >
          Dictionary
        </Typography>
        <Typography>全ア</Typography>
        <FilledInput />
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </Box>
    </div>
  )
}

export default Home

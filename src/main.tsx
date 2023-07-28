import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.ts'
import { Box, Container, CssBaseline } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{my: 4}}>
            <App />    

          </Box>
        </Container>
      </LocalizationProvider>
    </ThemeProvider>    
  </React.StrictMode>,
)

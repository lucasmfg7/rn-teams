import Groups from '@screens/Groups'
import theme from '@theme'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  )
}

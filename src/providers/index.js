import { Provider as StoreProvider } from 'react-redux'
import store from 'src/store'

export default function Providers({ children }) {
  return <StoreProvider store={store}>{children}</StoreProvider>
}

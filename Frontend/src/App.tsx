import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes';
import './App.css'

const App: React.FC = () => {
  return <RouterProvider router={routes} />
}

export default App

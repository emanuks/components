import { render } from 'react-dom'

import { App } from './App'
import { SelectedGenreIdContextProvider } from './contexts/SelectedGenreIdContext';

render(
    <SelectedGenreIdContextProvider>
        <App />
    </SelectedGenreIdContextProvider>
, document.getElementById('root'))
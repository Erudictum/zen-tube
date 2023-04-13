import './App.css'
import { SearchInput } from './components/SearchInput';
import { Watch } from './components/Watch';
import { ListVideos } from './components/ListVideos';
import { Footer } from './components/Footer';


function App() {

  return (
    <div className="App">
      <SearchInput />
      <Watch />
      <ListVideos />
      <Footer />
    </div>
  )
}

export default App

import { Routes, Route, Link} from 'react-router-dom'
import HomePage from './Pages/Home'
import NewsPage from './Pages/News'
import ContactPage from './Pages/Contact'


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/news" element={ <NewsPage /> } />
        <Route path='' element={ <ContactPage /> } />
      </Routes>
    </div>
  );
}

export default App;

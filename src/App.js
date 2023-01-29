
import Home from './pages/HomeScreen ';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BlogPostScreen from './pages/BlogPostScreen';
// import Blog from './components/blog/Blog';
import NewBlogScreen from './pages/NewBlogScreen';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path='/create' element={<BlogPostScreen/>}  />
        <Route path='/blog/:id' element={<NewBlogScreen/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

import './Home.css';
import BlogSection from '../components/sections/BlogSection';
import LeftSection from '../components/sections/LeftSection';
import RightSection from '../components/sections/RightSection';


export default function Home() {
  return (
    <>
        <div className="home-container">
          <LeftSection />  

          <BlogSection /> 

          <RightSection /> 
        </div>

    </>

  )
}

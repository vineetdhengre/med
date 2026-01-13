import  Layout  from "./components/sideBar";
import { Outlet } from "react-router-dom";
// import LiveHero from "./pages/liveHero";

export default function App() {
  return (
    <>
      <Layout>
        <Outlet />
        {/* <LiveHero /> */}
      </Layout>
    
    </>

  
  );
}
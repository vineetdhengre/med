import { useLocation, useNavigate } from 'react-router-dom';
import { TfiHome, TfiCommentAlt, TfiHeart, TfiUser } from 'react-icons/tfi';

export default function LeftSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="left-sidebar">
      <div className="nav-icons">
        <button
          className={`nav-icon ${isActive('/') ? 'active' : ''}`}
          onClick={() => navigate('/')}
          aria-label="Home"
        >
          <TfiHome style={{ width: '22px', height: '22px' }} />
        </button>

        <button
          className={`nav-icon ${isActive('/messages') ? 'active' : ''}`}
          onClick={() => navigate('/messages')}
          aria-label="Threads"
        >
          <TfiCommentAlt style={{ width: '22px', height: '22px' }} />
        </button>

        <button
          className={`nav-icon ${isActive('/webinars') ? 'active' : ''}`}
          onClick={() => navigate('/webinars')}
          aria-label="Likes"
        >
          <TfiHeart style={{ width: '22px', height: '22px' }} />
        </button>

        <button
          className={`nav-icon ${isActive('/profile') ? 'active' : ''}`}
          onClick={() => navigate('/profile')}
          aria-label="Profile"
        >
          <TfiUser style={{ width: '22px', height: '22px' }} />
        </button>
      </div>
    </div>
  );
}



// import  { useState } from 'react';
// import { TfiCommentAlt, TfiHeart, TfiHome, TfiUser } from "react-icons/tfi";
// import { useNavigate } from 'react-router-dom'

// export default function LeftSection() {
//     const navigate = useNavigate();
//     const [activeNav, setActiveNav] = useState('home');
    
//   return (
//     <>
//       <div className="left-sidebar">
//         <div className="nav-icons">
//           <button 
//             className={`nav-icon ${activeNav === 'home' ? 'active' : ''}`}
//             onClick={() => {
//               setActiveNav('home');
//               navigate('/');
//             }}
//             aria-label="Home"
//           >
//             <TfiHome style={{ width: '22px' , height: '22px' }} />
           
//           </button>
//           <button 
//             className={`nav-icon ${activeNav === 'messages' ? 'active' : ''}`}
            
//             onClick={() => {
//               setActiveNav('messages');
//               navigate('/messages');
//             }}
//             aria-label="Threads"
//           >
//              <TfiCommentAlt style={{ width: '22px' , height: '22px' }} />
//           </button>
//           <button 
//             className={`nav-icon ${activeNav === 'likes' ? 'active' : ''}`}
//             onClick={() => setActiveNav('likes')}
//             aria-label="Likes"
//           >
//             <TfiHeart style={{ width: '22px' , height: '22px' }} />
//           </button>
//           <button 
//             className={`nav-icon ${activeNav === 'profile' ? 'active' : ''}`}
//             onClick={() => setActiveNav('profile')}
//             aria-label="Profile"
//           >
//              <TfiUser style={{ width: '22px' , height: '22px' }} />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

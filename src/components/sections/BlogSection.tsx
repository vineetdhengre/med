
import { useState } from 'react'


export default function BlogSection() {

  const [threadText, setThreadText] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);

  const handleFileRemove = () => {
    setAttachedFile(null);
  };

  return (
    <>
           <div className="center-feed">
        {/* User Input Section */}
        <div className="feed-header">
          <div className="user-profile-header">
            <div className="profile-pic-small">
              <img src="https://i.pravatar.cc/150?img=12" alt="Dr. Satvik Prakash" />
            </div>
            <span className="user-name"> Dr. Satvik Prakash</span>
          </div>
        </div>

        <div className="thread-input-section">
          <textarea 
            className="thread-input"
            placeholder="Start a thread..."
            value={threadText}
            onChange={(e) => setThreadText(e.target.value)}
            rows={3}
          />
          <button className="post-btn">Post</button>
        </div>

        {attachedFile && (
          <div className="attached-file">
            <span className="file-name">{attachedFile}</span>
            <button className="remove-file-btn" onClick={handleFileRemove} aria-label="Remove file">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        )}

        <div className="input-actions">
          <button className="attach-btn" onClick={() => setAttachedFile('vacation02.jpg' as any)}>
            Attach file
          </button>
          <select className="reply-dropdown">
            <option>Anyone can replay</option>
            <option>Followers only</option>
            <option>Mentioned only</option>
          </select>
        </div>

        {/* Posts */}
        <div className="posts-container">
          {/* Post 1 - Devon Lane */}
          <div className="post">
            <div className="post-header">
              <div className="post-author">
                <div className="profile-pic-small">
                  <img src="https://i.pravatar.cc/150?img=7" alt="Dr. Prashant" />
                </div>
                <div className="author-info">
                  <span className="author-name">Dr. Prashant Khedekar</span>
                  <span className="post-time">6m</span>
                </div>
              </div>
              <button className="menu-btn" aria-label="More options">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10.8333C10.4603 10.8333 10.8333 10.4603 10.8333 10C10.8333 9.53976 10.4603 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53976 9.16667 10C9.16667 10.4603 9.53976 10.8333 10 10.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 5.00001C10.4603 5.00001 10.8333 4.62692 10.8333 4.16667C10.8333 3.70643 10.4603 3.33334 10 3.33334C9.53976 3.33334 9.16667 3.70643 9.16667 4.16667C9.16667 4.62692 9.53976 5.00001 10 5.00001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 16.6667C10.4603 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4603 15 10 15C9.53976 15 9.16667 15.3731 9.16667 15.8333C9.16667 16.2936 9.53976 16.6667 10 16.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="post-content">
              <p className="post-text">
                Pioneering healthcare innovators are revolutionizing medical technology and patient care through advanced diagnostics and personalized treatment approaches.
              </p>
              <div className="embedded-card">
                <button className="card-follow-btn">Follow Us</button>
                <div className="card-content">
                  <h3 className="card-title">The Man Behind the first operation</h3>
                  <p className="card-subtitle"> The first successful open-heart surgery in history. </p>
                </div>
                <div className="card-image">
                  <div className="card-bg"></div>
                </div>
              </div>
            </div>
            <div className="post-engagement">
              <button className="engagement-btn" aria-label="Like">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="engagement-btn" aria-label="Comment">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="engagement-btn" aria-label="Repost">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3L21 7L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 21L3 17L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="engagement-btn" aria-label="Share">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="engagement-stats">
              <span>3 replies • Liked by cursodefigmapro and others</span>
            </div>
          </div>

          {/* Post 2 - Jerome Bell */}
          <div className="post">
            <div className="post-header">
              <div className="post-author">
                <div className="profile-pic-small">
                  <img src="https://i.pravatar.cc/150?img=8" alt="Dr. Sachin" />
                </div>
                <div className="author-info">
                  <span className="author-name"> Dr. Sachin</span>
                  <span className="post-time">9m</span>
                </div>
              </div>
              <button className="menu-btn" aria-label="More options">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10.8333C10.4603 10.8333 10.8333 10.4603 10.8333 10C10.8333 9.53976 10.4603 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53976 9.16667 10C9.16667 10.4603 9.53976 10.8333 10 10.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 5.00001C10.4603 5.00001 10.8333 4.62692 10.8333 4.16667C10.8333 3.70643 10.4603 3.33334 10 3.33334C9.53976 3.33334 9.16667 3.70643 9.16667 4.16667C9.16667 4.62692 9.53976 5.00001 10 5.00001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 16.6667C10.4603 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4603 15 10 15C9.53976 15 9.16667 15.3731 9.16667 15.8333C9.16667 16.2936 9.53976 16.6667 10 16.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="post-content">
              <p className="post-text">
                Exploring the intersection of technology and healthcare
              </p>
              <div className="embedded-card card-2">
                <div className="card-image">
                  <div className="card-bg card-bg-2"></div>
                </div>
              </div>
            </div>
            <div className="post-engagement">
              <button className="engagement-btn" aria-label="Like">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="engagement-btn" aria-label="Comment">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="engagement-btn" aria-label="Repost">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3L21 7L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 21L3 17L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="engagement-btn" aria-label="Share">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
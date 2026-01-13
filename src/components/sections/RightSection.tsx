export default function RightSection() {

    const followSuggestions = [
        { id: 1, name: 'Dr. Satvik Prakash', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 2, name: 'Dr. Anjali Mehta', avatar: 'https://i.pravatar.cc/150?img=2' },
        { id: 3, name: 'Dr. Michael Thompson', avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: 4, name: 'Dr. Sarah Lopez', avatar: 'https://i.pravatar.cc/150?img=4' },
        { id: 5, name: 'Dr. Rajesh Kumar', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: 6, name: 'Dr. Kristin Watson', avatar: 'https://i.pravatar.cc/150?img=6' },
      ];

  return (
    <>
      <div className="right-sidebar">
        {/* Follow Suggestions */}
        <div className="sidebar-section">
          <div className="section-header">
            <h3 className="section-title">Follow suggestions</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="suggestions-list">
            {followSuggestions.map((user) => (
              <div key={user.id} className="suggestion-item">
                <div className="profile-pic-small">
                  <img src={user.avatar} alt={user.name} />
                </div>
                <span className="suggestion-name">{user.name}</span>
                <button className="follow-btn">Follow</button>

              </div>
            ))}
          </div>
        </div>

        {/* Today on Threads */}
        <div className="sidebar-section-threads">
          <div className="section-header-threads">
            <h3 className="section-title">Today on Threads</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="trending-card">
            <div className="trending-author">
              <div className="profile-pic-small">
                <img src="https://i.pravatar.cc/150?img=9" alt="Dr. Satish Ray" />
              </div>
              <span className="trending-author-name"> Dr. Satish Ray</span>
            </div>
            <p className="trending-text">
              Just published a new article on the latest advancements in cardiology. Check it out!
            </p>
            <div className="trending-image">
              <div className="vr-headset"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

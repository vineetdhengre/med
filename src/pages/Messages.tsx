import { useState } from 'react';
import './Messages.css';
import './Home.css';
import { TfiSearch } from 'react-icons/tfi';
import LeftSection from '../components/sections/LeftSection';

interface Contact {
  id: number;
  name: string;
  avatar: string;
  role: string;
  lastMessage: string;
  timestamp: string;
  isTyping?: boolean;
  isActive?: boolean;
  isSentByMe?: boolean;
}

interface Message {
  id: number;
  text: string;
  timestamp: string;
  isSentByMe: boolean;
  isRead?: boolean;
}

interface UserDetails {
  name: string;
  avatar: string;
  location: string;
  status: string;
  position: string;
  level: string;
}

export default function Messages() {
  const [activeView, setActiveView] = useState<'chat' | 'schedule'>('chat');
  const [selectedContact, setSelectedContact] = useState<number>(2);
  const [searchQuery, setSearchQuery] = useState('');

  const contacts: Contact[] = [
    {
      id: 1,
      name: 'Dr. Kathryn Murphy',
      avatar: 'https://i.pravatar.cc/150?img=1',
      role: 'Pediatrician',
      lastMessage: 'You: Looking forward to our meeting tomorrow.',
      timestamp: '5min ago',
    },
    {
      id: 2,
      name: 'Dr. Abhijeet Singh',
      avatar: 'https://i.pravatar.cc/150?img=4',
      role: 'Neurologist',
      lastMessage: ' Typing...',
      timestamp: '3min ago',
      isTyping: true,
      isActive: true,
    },
    {
      id: 3,
      name: 'Dr. Jane Cooper',
      avatar: 'https://i.pravatar.cc/150?img=5',
      role: 'Cardiologist',
      lastMessage: 'You: I will review your portfolio and get back...',
      timestamp: '20min ago',
      isSentByMe: true,
    },
    {
      id: 4,
      name: 'Dr. Kristin Watson',
      avatar: 'https://i.pravatar.cc/150?img=6',
      role: 'Oncologist',
      lastMessage: 'You: Thanks for your interest. We will contact...',
      timestamp: '1hr ago',
      isSentByMe: true,
    },
  ];

  const selectedContactData = contacts.find(c => c.id === selectedContact);
  const userDetails: UserDetails = {
    name: selectedContactData?.name || 'Dr. Satvik Prakash',
    avatar: selectedContactData?.avatar || 'https://i.pravatar.cc/150?img=4',
    location: 'Mumbai, India',
    status: 'Available',
    position: 'MBBS',
    level: 'Senior',
  };

  const messages: Message[] = [
    {
      id: 1,
      text: 'Hello Dr. Singh, I wanted to discuss the new case study with you.',
      timestamp: '11:23 am',
      isSentByMe: false,
    },
    {
      id: 2,
      text: 'Hi Dr. Prakash, sure! Let me know your thoughts.',
      timestamp: '11:29 am',
      isSentByMe: true,
      isRead: true,
    },
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="messages-wrapper">
      <div className="messages-container">
        {/* Left Sidebar */}
        <LeftSection />

        <div className="messages-main-wrapper">
          {/* Top Navigation Bar */}
          <div className="top-nav">
            <div className="top-nav-content">
              <button className="top-nav-item">
                Friends <span className="nav-badge">16</span>
              </button>
              <button className="top-nav-item">
                Patients <span className="nav-badge">16</span>
              </button>
            </div>
          </div>

          {/* Messages Header */}
          <div className="messages-header">
            <div className="messages-header-content">
              <div className="messages-title-section">
                <h1 className="messages-title">Your Connections</h1>
              </div>
              <div className="messages-view-tabs">
                <button
                  className={`view-tab ${activeView === 'chat' ? 'active' : ''}`}
                  onClick={() => setActiveView('chat')}
                >
                  Chat
                </button>
                <button
                  className={`view-tab ${activeView === 'schedule' ? 'active' : ''}`}
                  onClick={() => setActiveView('schedule')}
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>

          {/* User Information Section */}
          <div className="user-info-section">
            <div className="user-info-content">
              <div className="user-info-main">
                <div className="user-avatar-large">
                  <img src={userDetails.avatar} alt={userDetails.name} />
                </div>
                <h2 className="user-name-large">{userDetails.name}</h2>
              </div>
              <div className="user-details-grid">
                <div className="user-detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{userDetails.location}</span>
                </div>
                <div className="user-detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value">{userDetails.status}</span>
                </div>
                <div className="user-detail-item">
                  <span className="detail-label">Position:</span>
                  <span className="detail-value">{userDetails.position}</span>
                </div>
                <div className="user-detail-item">
                  <span className="detail-label">Level:</span>
                  <span className="detail-value">{userDetails.level}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="messages-main-content">
            {/* Left Panel - Contact List */}
            <div className="contacts-panel">
              <div className="contacts-panel-header">
                <div className="search-container">
                  <TfiSearch className="search-icon" />
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search message..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="add-contact-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
              <div className="contacts-list">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`contact-item ${contact.isActive ? 'active' : ''}`}
                    onClick={() => setSelectedContact(contact.id)}
                  >
                    <div className="contact-avatar">
                      <img src={contact.avatar} alt={contact.name} />
                    </div>
                    <div className="contact-info">
                      <div className="contact-header">
                        <span className="contact-name">{contact.name}</span>
                        <span className="contact-timestamp">{contact.timestamp}</span>
                      </div>
                      <div className="contact-role">{contact.role}</div>
                      <div className="contact-message-preview">
                        {contact.isTyping ? (
                          <span className="typing-indicator">Typing...</span>
                        ) : (
                          contact.lastMessage
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Chat Conversation */}
            <div className="chat-panel">
              <div className="chat-header">
                <div className="chat-header-info">
                  <div className="chat-avatar">
                    <img src={selectedContactData?.avatar || userDetails.avatar} alt={selectedContactData?.name} />
                  </div>
                  <div className="chat-header-text">
                    <h3 className="chat-contact-name">{selectedContactData?.name || userDetails.name}</h3>
                    {selectedContactData?.isTyping && (
                      <span className="chat-typing-indicator">Typing...</span>
                    )}
                  </div>
                </div>
                <button className="chat-menu-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </button>
              </div>
              <div className="chat-messages">
                <div className="date-separator">Today</div>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message-bubble ${message.isSentByMe ? 'sent' : 'received'}`}
                  >
                    <p className="message-text">{message.text}</p>
                    <div className="message-footer">
                      <span className="message-time">{message.timestamp}</span>
                      {message.isSentByMe && message.isRead && (
                        <svg className="message-read-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="chat-input-container">
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Type a message..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



import React, { useState } from 'react';
import { MessageSquare, X, Send, Smile } from 'lucide-react';

const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission (in a real app, this would send to a backend)
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-brand-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="mr-2 hidden md:inline-block">שאלות? דבר איתנו!</span>
        </button>
      )}
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden w-72 md:w-96 border border-gray-200 animate-scale-in">
          {/* Chat Header */}
          <div className="bg-brand-blue text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">צוות התמיכה שלנו</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            <div className="bg-gray-200 rounded-lg p-3 mr-auto max-w-[80%] mb-3">
              <p className="text-gray-800">שלום! אנחנו כאן כדי לעזור לך בכל שאלה בנוגע להחזרי מס. איך נוכל לסייע?</p>
              <span className="text-xs text-gray-500 block mt-1">10:30</span>
            </div>
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
            <button 
              type="button"
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              <Smile className="h-5 w-5" />
            </button>
            
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="הקלד הודעה..."
              className="flex-1 border-none focus:outline-none focus:ring-0 p-2"
            />
            
            <button 
              type="submit"
              className="text-brand-blue hover:text-blue-700 p-2"
              disabled={!message.trim()}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChatWidget;

import React, { useState } from 'react';
import { MessageSquare, Search } from 'lucide-react';
import ChatWindow from '../../components/chat/ChatWindow';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const chats: Chat[] = [
    {
      id: '1',
      name: 'John Smith',
      lastMessage: 'Looking forward to discussing the project further',
      timestamp: '2024-03-15T10:30:00Z',
      unread: true
    },
    {
      id: '2',
      name: 'Sarah Wilson',
      lastMessage: 'Thanks for your time!',
      timestamp: '2024-03-15T09:15:00Z',
      unread: false
    },
    {
      id: '3',
      name: 'Mike Johnson',
      lastMessage: 'When would you be available for a call?',
      timestamp: '2024-03-14T18:45:00Z',
      unread: true
    }
  ];

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex">
      {/* Chat List */}
      <div className="w-80 border-r border-gray-700">
        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="space-y-2">
            {filteredChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`w-full p-3 rounded-lg text-left transition-colors ${
                  selectedChat === chat.id
                    ? 'bg-gray-700'
                    : 'hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">{chat.name}</h3>
                  {chat.unread && (
                    <span className="bg-cyan-500 w-2 h-2 rounded-full" />
                  )}
                </div>
                <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1">
        {selectedChat ? (
          <ChatWindow
            recipientId={selectedChat}
            recipientName={chats.find(c => c.id === selectedChat)?.name || ''}
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <MessageSquare size={48} className="mx-auto mb-4 text-gray-500" />
              <p className="text-gray-400">Select a conversation to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
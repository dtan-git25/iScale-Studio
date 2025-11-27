import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const CHATBOT_RESPONSES = [
  "That's a great question! Our team specializes in AI development, workflow automation, and custom software solutions. How can we help you today?",
  "We'd love to learn more about your project! Feel free to tell us about your business goals and challenges.",
  "Our typical projects involve AI integration, process automation, or custom app development. What are you interested in?",
  "Thanks for reaching out! Our team in the Philippines is ready to help you scale with AI and automation.",
  "Feel free to ask about our services, portfolio, or how we can transform your business!",
  "I can help answer questions about AI development, workflow automation, or you can schedule a consultation with our team.",
];

export function CoDaveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey 👋 I'm CoDave AI! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: CHATBOT_RESPONSES[Math.floor(Math.random() * CHATBOT_RESPONSES.length)],
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#9929ea] to-[#5808fb] text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-40 group"
        data-testid="button-chat-toggle"
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence
        >

        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-[#9929ea] opacity-30"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 w-full sm:w-96 max-w-[calc(100vw-2rem)] sm:max-w-96 h-[500px] sm:h-[600px] max-h-[calc(100vh-200px)] bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-40"
            data-testid="chat-window"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#9929ea] to-[#5808fb] px-6 py-6 text-white">
              <h2 className="font-display font-bold text-lg">CoDave AI</h2>
              <p className="text-sm text-white/80">AI Support Assistant</p>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-6 space-y-4"
              data-testid="chat-messages"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white rounded-br-none"
                        : "bg-gray-100 text-gray-900 rounded-bl-none"
                    }`}
                    data-testid={`message-${message.sender}-${message.id}`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, delay: 0 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-white/20 p-4 bg-white/50 backdrop-blur-sm">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#9929ea] focus:ring-1 focus:ring-[#9929ea] transition-all"
                  data-testid="input-chat-message"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                  data-testid="button-send-message"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2 px-2">
                💡 AI powered by CoDave
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

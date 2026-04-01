import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./AIChat.css";

function AIChat() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I’m your school assistant. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // toggle state

  const whatsappNumber = "2348012345678";
  const whatsappMessage = "Hello! I want to inquire about admissions.";

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Sorry, I couldn’t process that. Please try again." },
      ]);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <div className="ai-chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        Chat
      </div>

      {/* Chat widget */}
      <div className={`ai-chat-widget ${isOpen ? "show" : ""}`}>
        <div className="chat-header">School Assistant</div>
        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={msg.from === "bot" ? "bot-msg" : "user-msg"}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about admissions, classes, fees..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
        <div className="whatsapp-fallback">
          <p>Still need help? Chat with us on WhatsApp:</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="whatsapp-icon" /> Contact WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

export default AIChat;
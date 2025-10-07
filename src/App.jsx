import React, { useState, useRef } from 'react';
import Hero from './components/Hero';
import ChatHeader from './components/ChatHeader';
import MessagesList from './components/MessagesList';
import MessageInput from './components/MessageInput';

export default function App() {
  const [messages, setMessages] = useState([
    { id: 1, author: 'Nova', text: 'Hey! Welcome to Nova Messenger ✨', time: '09:41', me: false },
    { id: 2, author: 'Me', text: 'Wow, this looks beautiful on my phone!', time: '09:41', me: true },
    { id: 3, author: 'Nova', text: 'Totally! Type a message below and hit send.', time: '09:42', me: false },
  ]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg = { id: Date.now(), author: 'Me', text, time, me: true };
    setMessages((prev) => [...prev, newMsg]);

    // playful auto-reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, author: 'Nova', text: 'Got it! 🚀', time, me: false },
      ]);
    }, 600);
  };

  const phoneRef = useRef(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative">
        <Hero />

        {/* Phone shell */}
        <section className="relative z-10 mx-auto -mt-10 max-w-md px-4 pb-24 sm:-mt-20">
          <div
            ref={phoneRef}
            className="mx-auto w-full rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-800/50 to-slate-900/70 p-2 shadow-2xl backdrop-blur-md"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          >
            <div className="relative h-[72vh] w-full overflow-hidden rounded-[1.6rem] bg-slate-950 ring-1 ring-white/10">
              {/* Notch */}
              <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-6 w-40 -translate-x-1/2 rounded-b-2xl bg-black/60"></div>

              <div className="flex h-full flex-col">
                <ChatHeader name="Nova" status="Online" />
                <MessagesList messages={messages} />
                <MessageInput onSend={sendMessage} />
              </div>

              {/* Subtle glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-white/5"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-4xl px-6 py-10 text-center text-sm text-slate-400">
        Designed for mobile. Built with React, Tailwind, and Spline.
      </footer>
    </div>
  );
}

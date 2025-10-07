import React, { useEffect, useRef } from 'react';

export default function MessagesList({ messages = [] }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-slate-900/40 to-slate-950 px-3 py-4">
      {messages.map((m) => (
        <div key={m.id} className={`flex ${m.me ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-[78%] rounded-2xl px-3 py-2.5 text-sm shadow-lg ${
            m.me
              ? 'bg-cyan-500 text-slate-900 shadow-cyan-500/20'
              : 'bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/10'
          }`}>
            <p className="whitespace-pre-wrap break-words leading-relaxed">{m.text}</p>
            <div className={`mt-1.5 text-[10px] ${m.me ? 'text-slate-900/70' : 'text-white/60'}`}>{m.time}</div>
          </div>
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
}

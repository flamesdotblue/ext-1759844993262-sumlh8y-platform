import React, { useState } from 'react';
import { Plus, Smile, Send, Image } from 'lucide-react';

export default function MessageInput({ onSend }) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (!value.trim()) return;
    onSend?.(value);
    setValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-white/5 bg-slate-900/70 p-3 backdrop-blur">
      <div className="flex items-end gap-2">
        <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-slate-200 transition hover:bg-white/10">
          <Plus size={18} />
        </button>

        <div className="flex w-full items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10 focus-within:ring-cyan-400/50">
          <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-300 hover:text-white">
            <Smile size={18} />
          </button>
          <textarea
            rows={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Message Nova..."
            className="max-h-28 min-h-[36px] w-full resize-none bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
          />
          <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-300 hover:text-white">
            <Image size={18} />
          </button>
        </div>

        <button
          onClick={handleSend}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
          aria-label="Send"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

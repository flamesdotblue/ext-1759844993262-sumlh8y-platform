import React from 'react';
import { ChevronLeft, Phone, Video, MoreVertical, ShieldCheck } from 'lucide-react';

export default function ChatHeader({ name = 'Nova', status = 'Online' }) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-white/5 bg-slate-900/60 px-3 py-3 backdrop-blur">
      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-white/10">
        <ChevronLeft size={18} />
      </button>

      <div className="flex min-w-0 items-center gap-3">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=128&auto=format&fit=crop"
            alt="Avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="absolute -right-0.5 -bottom-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 ring-2 ring-slate-900">
            <ShieldCheck className="h-3 w-3 text-slate-900" />
          </span>
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{name}</p>
          <p className="truncate text-xs text-emerald-400">{status}</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-white/10">
          <Phone size={16} />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-white/10">
          <Video size={16} />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-white/10">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
}

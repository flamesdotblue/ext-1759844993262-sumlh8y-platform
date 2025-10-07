import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[56vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for readability, but keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/10 to-slate-950"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-4xl items-end justify-center px-6 pb-6 sm:items-center sm:pb-0">
        <div className="text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/20 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Iridescent Identity Aesthetic
          </div>
          <h1 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Nova Messenger
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
            A modern, vibrant messenger designed for phones. Clean, fluid, and delightfully futuristic.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="#app" className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              Try the Demo
            </a>
            <a href="#" className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

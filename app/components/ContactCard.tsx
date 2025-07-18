'use client'

import { useState } from 'react'
import Image from 'next/image'
import phoenixPfp from '../assets/phoenix_pfp.jpg'
import phoenixnetLabs from '../assets/phoenixnet_labs.png'

export default function ContactCard() {
  const [isFlashing, setIsFlashing] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  return (
    <div className={`bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 max-w-5xl w-full border border-slate-700/50 transition-transform duration-100 ${isShaking ? 'animate-pulse' : ''}`} style={isShaking ? { animation: 'shake 0.5s ease-in-out' } : {}}>
      {/* Header Section - Full Width */}
      <div className="flex items-center justify-center lg:justify-start space-x-6 mb-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div
            className="w-20 h-20 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-110 cursor-pointer relative"
            onClick={() => {
              setIsShaking(true);
              setTimeout(() => setIsShaking(false), 500);
            }}
          >
            <Image
              src={phoenixPfp}
              alt="Phoenix Profile Picture"
              className="object-cover"
              fill
            />
          </div>
        </div>

        {/* Name and Description */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2 group cursor-pointer">
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:animate-bounce group-hover:[animation-delay:0ms]">P</span>
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:animate-bounce group-hover:[animation-delay:100ms]">h</span>
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:animate-bounce group-hover:[animation-delay:200ms]">o</span>
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:animate-bounce group-hover:[animation-delay:300ms]">e</span>
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:animate-bounce group-hover:[animation-delay:400ms]">n</span>
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:animate-bounce group-hover:[animation-delay:500ms]">i</span>
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:animate-bounce group-hover:[animation-delay:600ms]">x</span>
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            He/Him | <span
              className="cursor-pointer hover:text-slate-100 transition-colors duration-200 select-none"
              onClick={() => {
                const audio = new Audio('/bark.mp3');
                audio.volume = 0.5;
                audio.play().catch(e => console.log('Audio play failed:', e));
              }}
              title="🐕 Woof!"
            >
              Dog
            </span> | Rhythm Games, Tech, and <span
              className="cursor-pointer hover:text-slate-100 transition-colors duration-200 select-none"
              onClick={() => {
                const audio = new Audio('/click.mp3');
                audio.volume = 0.5;
                audio.play().catch(e => console.log('Audio play failed:', e));

                // Trigger flash animation
                setIsFlashing(true);
                setTimeout(() => setIsFlashing(false), 1200);
              }}
              title="📷 Click!"
            >
              Photography!
              <span className={`inline-block ml-1 transition-all duration-300 ${isFlashing ? 'opacity-100 animate-pulse scale-110' : 'opacity-0'}`}>📸</span>
            </span>
          </p>
        </div>
      </div>

      {/* Horizontal Rule - Full Width */}
      <hr className="border-slate-600 my-6" />

      <div className="flex flex-col lg:flex-row gap-8 h-full">
        {/* Left Side - Profile Info and Content */}
        <div className="flex-[2] flex flex-col">

          {/* Main Content */}
          <div className="flex-1 space-y-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3 group cursor-pointer relative">
                Info
                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-180">ℹ️</span>
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Hi, It looks like you've found my personal website! Thanks for visiting!<br />
                Here's a few links to my social accounts and personal projects, feel free to have a look around!
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3 group cursor-pointer relative">
                A little about myself
                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse">✨</span>
              </h2>
              <ul className="text-slate-300 leading-relaxed space-y-1">
                <li className="flex"><span className="text-slate-400 font-mono mr-2 flex-shrink-0">&gt;</span><span>I'm from Saint Louis, Missouri and have lived here most of my life!</span></li>
                <li className="flex"><span className="text-slate-400 font-mono mr-2 flex-shrink-0">&gt;</span><span><strong>I went to college for, am passionionate about, and have a career in IT!</strong>
                  <br /><em>(like the website you're reading totally didn't give it away, haha-)</em></span></li>
                <li className="flex"><span className="text-slate-400 font-mono mr-2 flex-shrink-0">&gt;</span><span>I also enjoy listening to a wide variety of music, and playing rhythm games like Clone Hero and YARG when I'm not tinkering in my lab.</span></li>
                <li className="flex"><span className="text-slate-400 font-mono mr-2 flex-shrink-0">&gt;</span><span>When I'm at cons, you'll more than likely find me taking tons of pictures!</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Links - Show on mobile, hidden on large screens */}
          <div className="lg:hidden mb-6">
            <div className="flex flex-col space-y-3">
              <a
                href="https://phoenixnet-labs.com"
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-3 group"
              >
                <div className="w-8 h-8 bg-slate-600 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center relative transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                  <Image
                    src={phoenixnetLabs}
                    alt="PhoenixNet-Labs Logo"
                    className="object-cover"
                    fill
                  />
                </div>
                <span className="text-left">PhoenixNet-Labs</span>
              </a>

              <a
                href="https://photography.phoenixnet.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-3 group"
              >
                <div className="w-8 h-8 bg-slate-600 rounded-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                  <span className="text-lg">📷</span>
                </div>
                <span className="text-left">Photography Portfolio</span>
              </a>

              <a
                href="https://onlysheps.com"
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-3 group"
              >
                <div className="w-8 h-8 bg-slate-600 rounded-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                  <span className="text-lg">🐕</span>
                </div>
                <span className="text-left">OnlySheps.com</span>
              </a>

              <a
                href="https://tendiedex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-3 group"
              >
                <div className="w-8 h-8 bg-slate-600 rounded-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                  <span className="text-lg">🐔</span>
                </div>
                <span className="text-left">TendieDex</span>
              </a>

              <a
                href="mailto:phoenix@phoenixnet-labs.com"
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium hover:opacity-90 flex items-center space-x-3 group"
              >
                <div className="w-8 h-8 bg-slate-600 rounded-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                  <span className="text-lg">💬</span>
                </div>
                <span className="text-left">Contact</span>
              </a>
            </div>
          </div>


        </div>

        {/* Right Side - Contact Button Links - Hidden on mobile, shown on large screens */}
        <div className="hidden lg:flex flex-1 flex-col justify-center">
          {/* Button Links */}
          <div className="flex flex-col space-y-3">
            <a
              href="https://phoenixnet-labs.com"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 bg-slate-600 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center relative transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                <Image
                  src={phoenixnetLabs}
                  alt="PhoenixNet-Labs Logo"
                  className="object-cover"
                  fill
                />
              </div>
              <span className="text-left">PhoenixNet-Labs</span>
            </a>

            <a
              href="https://photography.phoenixnet.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 bg-slate-600 rounded-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                <span className="text-lg">📷</span>
              </div>
              <span className="text-left">Photography Portfolio</span>
            </a>

            <a
              href="https://onlysheps.com"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 bg-slate-600 rounded-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                <span className="text-lg">🐕</span>
              </div>
              <span className="text-left">OnlySheps.com</span>
            </a>

            <a
              href="https://tendiedex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 bg-slate-600 rounded-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                <span className="text-lg">🐔</span>
              </div>
              <span className="text-left">TendieDex</span>
            </a>

            <a
              href="mailto:phoenix@phoenixnet-labs.com"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors font-medium hover:opacity-90 flex items-center space-x-3 group"
            >
              <div className="w-8 h-8 bg-slate-600 rounded-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                <span className="text-lg">💬</span>
              </div>
              <span className="text-left">Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Rule - Full Width */}
      <hr className="border-slate-600 my-6" />

      {/* Social Media Icons - Full Width */}
      <div className="flex items-center space-x-4 justify-center lg:justify-start">
        <a
          href="https://github.com/PhoenixSheppy"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://bsky.app/profile/gsheps.net"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
          aria-label="Bluesky"
        >
          <svg className="w-5 h-5" viewBox="0 0 600 530">
            <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="#1185fe" />
          </svg>
        </a>

        <a
          href="https://www.reddit.com/user/PhoenixTheDoggo/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
          aria-label="Reddit"
        >
          <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
          </svg>
        </a>

        <a
          href="https://t.me/PhoenixSheppy"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
          aria-label="Telegram"
        >
          <svg className="w-5 h-5" fill="#399dd1" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        </a>

        <a
          href="https://vrchat.com/home/user/usr_9fc2b73c-a267-4946-bada-163eb742410b"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
          aria-label="VRChat"
        >
          <svg className="w-5 h-5" viewBox="0 0 508.66 510.9">
            <g>
              <g>
                <path fill="white" stroke="black" strokeWidth="8" d="m0.03 64.66c-0.02-43.107-0.01-21.553 0 0zm430.45 295h13.77c25.72-0.14 42.11-16.57 42.12-42.28v-253c0-25.77-16.41-42.16-42.14-42.16h-337.1c-15 0-30-0.15-45 0-22.29 0.29-39.36 17.18-39.38 39.34-0.1 86.193-0.1 172.37 0 258.53-0.10051 7.7138 2.1492 15.276 6.45 21.68 8.68 12.89 21.12 18 36.35 17.94 82.36-0.1 164.72-0.14333 247.08-0.13 3.2883-0.23188 6.455 1.2887 8.33 4 28.32 36.593 56.733 73.11 85.24 109.55 3.1567 4.293 6.7788 8.2236 10.8 11.72 2.39 1.94 6.93 3.71 9.17 2.68s3-5.61 4.41-8.66c0.11982-0.4876 0.14022-0.99434 0.06-1.49-0.04-26.447-0.0733-52.893-0.1-79.34-0.07-12.59-0.06-25.19-0.06-38.38z" />
                <g>
                  <path fill="white" stroke="black" strokeWidth="8" d="m419.74 510.85c-13.09-3.46-22.14-12.19-30.14-22.53-26.61-34.32-53.37-68.57-80-102.93-2.24-2.9-4.66-3.55-8.06-3.55q-118.54 0.12-237.1 0.05c-31 0-55.61-18.65-62.29-47.46a80 80 0 0 1-2.03-17.77q-0.18-126-0.09-252c-0.03-37.83 26.97-64.66 64.97-64.66h379.66c37.35 0 64 26.53 64 63.83v254.05c0 33.82-20.79 58.1-54.31 63.51a10.6 10.6 0 0 0-1.68 0.69v5.44q0.06 45.17 0.09 90.34c0 10.21-2.57 19.67-10.86 26.27-3.78 3-8.72 4.56-13.13 6.77zm10.74-151.19h13.77c25.72-0.14 42.11-16.57 42.12-42.28v-253c0-25.77-16.41-42.16-42.14-42.16h-337.1c-15 0-30-0.15-45 0-22.29 0.29-39.36 17.18-39.38 39.34q-0.15 129.29 0 258.53a38 38 0 0 0 6.45 21.68c8.68 12.89 21.12 18 36.35 17.94q123.54-0.15 247.08-0.13a9.33 9.33 0 0 1 8.33 4q42.48 54.89 85.24 109.55a72.24 72.24 0 0 0 10.8 11.72c2.39 1.94 6.93 3.71 9.17 2.68s3-5.61 4.41-8.66a3.74 3.74 0 0 0 0.06-1.49q-0.06-39.67-0.1-79.34c-0.07-12.59-0.06-25.19-0.06-38.38z" />
                  <path fill="black" d="M361.26,203.26c12.17,22.54,24,44.48,35.87,66.4,3.54,6.55,3.56,11-1.64,16.25a37.58,37.58,0,0,1-12.16,8.3c-8.55,3.52-15.31.57-19.58-7.66-12.63-24.36-25.25-48.7-37.65-73.19-1.77-3.49-3.68-4.89-7.6-4.65-5.81.36-11.65.1-18.16.1-.1,2.11-.27,4-.27,5.92v64.38c0,8.68-2.89,12.42-11.48,14.17a35.94,35.94,0,0,1-10.4.65c-11.27-1.07-15.13-5.51-15.13-16.68V103.08c0-11.82,3.69-15.53,15.52-15.52,19.17,0,38.35-.16,57.51.25a100.75,100.75,0,0,1,21.24,2.82c22.27,5.39,36.05,19.22,39.76,42.12a80.5,80.5,0,0,1-1.68,35.6C390.41,185.76,379.12,197.34,361.26,203.26Zm-60.94-23.41h31c21.14-.11,31.54-11.42,29.92-32.5-.09-1.15-.24-2.31-.37-3.46-1.57-14-9.35-22.42-23.35-23.39-12.08-.84-24.26-.35-36.39-.41-.24,0-.49.39-.86.7Z" />
                  <path fill="black" d="m162.24 247.33c3-10.63 5.67-20 8.32-29.45q17-60.24 33.88-120.47c2.07-7.33 5.26-10.1 12.86-9.69a39.3 39.3 0 0 1 13 3c9.82 4.13 11.83 9.17 8.71 19.35q-26.1 85.34-52.12 170.7c-2.29 7.57-6.89 12.44-14.31 13.55a71.27 71.27 0 0 1-20.21 0.16c-7.78-1.11-12.67-6.13-15.09-14.07q-26.16-86.09-52.8-172.06c-2.35-7.64-1.11-12.37 6-15.83a48.44 48.44 0 0 1 17-4.63c7.12-0.6 10.12 2.38 12.12 9.31l40.89 144.34c0.38 1.53 0.89 3.04 1.75 5.79v" />
                </g>
              </g>
            </g>
          </svg>
        </a>

        <a
          href="https://koito.phoenixnet.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
          aria-label="Koito Music"
        >
          <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
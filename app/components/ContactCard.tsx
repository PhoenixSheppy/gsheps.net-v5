export default function ContactCard() {
  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 max-w-5xl w-full min-h-[600px] border border-slate-700/50">
      <div className="flex gap-8 h-full">
        {/* Left Side - Profile Info and Content */}
        <div className="flex-[2] flex flex-col">
          {/* Header Section */}
          <div className="flex items-center space-x-6 mb-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-110 cursor-pointer" style={{ background: 'linear-gradient(to bottom right, #33416A, #2a3555)' }}>
                <span className="text-white font-bold text-lg">🏢</span>
              </div>
            </div>

            {/* Name and Description */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                Phoenix
              </h1>
              <p className="text-slate-300 text-base leading-relaxed">
                He/Him | Dog | Rhythm Games, Tech, and Photography!
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">About</h2>
              <p className="text-slate-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Experience</h2>
              <p className="text-slate-300 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Skills</h2>
              <p className="text-slate-300 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>

          {/* Social Media Icons at Bottom */}
          <div className="flex space-x-4 pt-4 border-t border-slate-700">
            <a
              href="https://github.com/phoenixnet-labs"
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
              href="https://linkedin.com/company/phoenixnet-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://twitter.com/phoenixnetlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            <a
              href="https://discord.gg/phoenixnet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110"
              aria-label="Discord"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Contact Button Links */}
        <div className="flex-1 flex flex-col">
          {/* Spacer to align with content headers */}
          <div className="h-[140px]"></div>

          {/* Button Links */}
          <div className="flex flex-col space-y-3">
            <a
              href="mailto:contact@phoenixnet-labs.com"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-lg transition-colors text-center font-medium"
            >
              📧 Email
            </a>

            <a
              href="https://phoenixnet-labs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-lg transition-colors text-center font-medium"
            >
              🌐 Website
            </a>

            <a
              href="/portfolio"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-lg transition-colors text-center font-medium"
            >
              💼 Portfolio
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-lg transition-colors text-center font-medium"
            >
              📄 Resume
            </a>

            <a
              href="/contact"
              className="text-white px-6 py-4 rounded-lg transition-colors text-center font-medium hover:opacity-90"
              style={{ backgroundColor: '#33416A' }}
            >
              💬 Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Bot,
  Layers,
  Globe,
  BookOpen,
  Hammer,
  Wrench,
  Search,
  Briefcase,
  Music,
  Smartphone,
  Users,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Shield,
  Eye,
  Lock,
  FileText
} from 'lucide-react';

// --- BRAND LOGOS (SVG Components) ---

// ChatGPT Logo - OpenAI style
const ChatGPTLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500879C16.1708 0.495378 14.0893 1.16447 12.3614 2.41142C10.6335 3.65837 9.34853 5.41893 8.68544 7.43155C7.30101 7.58717 5.96906 8.01095 4.76959 8.67485C3.57012 9.33876 2.52944 10.2275 1.70869 11.2859C0.597709 12.6866 -0.136172 14.3413 -0.425712 16.0979C-0.715251 17.8546 -0.551099 19.6558 0.050834 21.3321C-0.397722 22.6787 -0.553188 24.1054 -0.405543 25.5169C-0.257898 26.9284 0.189594 28.292 0.906813 29.5166C1.97037 31.3688 3.59483 32.8352 5.54574 33.7043C7.49666 34.5734 9.67327 34.8002 11.7615 34.352C12.7034 35.4135 13.8611 36.2615 15.1573 36.8394C16.4535 37.4172 17.8581 37.7115 19.2772 37.7019C21.4119 37.7077 23.4932 37.0389 25.221 35.7922C26.9489 34.5455 28.2338 32.7853 28.8972 30.7731C30.2816 30.6175 31.6135 30.1937 32.813 29.5298C34.0125 28.8659 35.0531 27.9771 35.8739 26.9187C36.9844 25.518 37.7181 23.8634 38.0074 22.107C38.2968 20.3506 38.1324 18.5497 37.5324 16.8707ZM19.2772 35.1921C17.8282 35.1974 16.4082 34.7983 15.1733 34.0402C15.2121 34.0184 15.2844 33.977 15.3354 33.9456L22.7791 29.6478C22.9719 29.5375 23.1319 29.3773 23.2425 29.1845C23.353 28.9917 23.4104 28.773 23.409 28.551V17.9742L26.6317 19.8357C26.6478 19.8443 26.6617 19.8564 26.6722 19.8711C26.6828 19.8858 26.6897 19.9026 26.6924 19.9203V28.6636C26.6896 30.3949 26.0025 32.0541 24.7785 33.2778C23.5545 34.5015 21.8952 35.1891 20.1639 35.1921H19.2772ZM5.54866 28.8846C4.82481 27.6193 4.52569 26.1553 4.69642 24.7093C4.73286 24.7329 4.80245 24.7782 4.85745 24.8096L12.3011 29.1074C12.4922 29.2206 12.7105 29.2803 12.9329 29.2803C13.1554 29.2803 13.3737 29.2206 13.5647 29.1074L22.7169 23.8229V27.546C22.7174 27.5644 22.7134 27.5827 22.7052 27.5994C22.6969 27.6161 22.6848 27.6307 22.6697 27.6418L15.1401 32.0042C13.6383 32.8704 11.8834 33.1802 10.1801 32.8804C8.47679 32.5806 6.93642 31.6906 5.83016 30.3676L5.54866 28.8846ZM3.58219 13.2346C4.30008 11.9667 5.41936 10.9692 6.76344 10.3986C6.76344 10.4422 6.76086 10.5256 6.76086 10.5885V19.1836C6.75967 19.4053 6.81716 19.6237 6.92749 19.8163C7.03782 20.0089 7.19739 20.1693 7.38979 20.2803L16.5421 25.5649L13.3194 27.4264C13.3041 27.436 13.2868 27.4419 13.2689 27.4436C13.2509 27.4454 13.2328 27.443 13.2161 27.4366L5.68141 23.0711C4.18165 22.2029 3.03233 20.8375 2.43163 19.2122C1.83092 17.5869 1.81685 15.8022 2.39216 14.1676L3.58219 13.2346ZM30.1171 20.7197L20.9649 15.4352L24.1875 13.5737C24.2028 13.5641 24.2202 13.5582 24.2381 13.5565C24.256 13.5547 24.2741 13.5571 24.2909 13.5636L31.8255 17.929C32.8702 18.5302 33.7391 19.3961 34.3438 20.4392C34.9485 21.4822 35.2671 22.6666 35.2671 23.8721C35.2671 25.0776 34.9485 26.262 34.3438 27.305C33.7391 28.3481 32.8702 29.214 31.8255 29.8152V21.419C31.8247 21.1974 31.7655 20.9797 31.6541 20.7876C31.5426 20.5956 31.3826 20.4359 31.1903 20.3256L30.1171 20.7197ZM33.3191 14.2909C33.2822 14.2674 33.2126 14.222 33.1576 14.1907L25.7139 9.89283C25.5229 9.77971 25.3046 9.71994 25.0821 9.71994C24.8597 9.71994 24.6413 9.77971 24.4503 9.89283L15.2981 15.1774V11.4543C15.2975 11.4359 15.3016 11.4176 15.3099 11.4009C15.3181 11.3842 15.3302 11.3696 15.3454 11.3585L22.8749 6.9961C23.9196 6.39475 25.1066 6.07604 26.3146 6.07604C27.5226 6.07604 28.7096 6.39475 29.7543 6.9961C30.7991 7.59746 31.668 8.46336 32.2727 9.50641C32.8774 10.5495 33.196 11.7339 33.196 12.9394C33.196 13.404 33.1529 13.8641 33.0699 14.3142L33.3191 14.2909ZM14.0843 23.0261L10.8617 21.1646C10.8457 21.156 10.8318 21.1439 10.8212 21.1292C10.8107 21.1145 10.8037 21.0976 10.801 21.08V12.3366C10.8013 11.1297 11.1209 9.94404 11.7273 8.90055C12.3337 7.85706 13.2047 6.99182 14.2516 6.39252C15.2984 5.79322 16.4861 5.48021 17.6933 5.48629C18.9005 5.49237 20.0849 5.81729 21.1256 6.42708C21.0868 6.44894 21.0145 6.49031 20.9635 6.52165L13.5198 10.8195C13.327 10.9298 13.167 11.09 13.0565 11.2828C12.9459 11.4756 12.8885 11.6943 12.8899 11.9163L14.0843 23.0261ZM15.2981 19.5L18.9945 17.3656L22.6909 19.5V23.769L18.9945 25.9036L15.2981 23.769V19.5Z" fill="currentColor"/>
  </svg>
);

// Claude Logo - Anthropic style
const ClaudeLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.302 3.928c-.403-.958-1.312-1.512-2.455-1.512H9.153c-1.143 0-2.052.554-2.455 1.512L3.013 12l3.685 8.072c.403.958 1.312 1.512 2.455 1.512h5.694c1.143 0 2.052-.554 2.455-1.512L20.987 12l-3.685-8.072Z" fill="currentColor"/>
    <path d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" fill="#0f172a"/>
  </svg>
);

// Gemini Logo - Google style
const GeminiLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="url(#gemini-gradient)"/>
    <defs>
      <linearGradient id="gemini-gradient" x1="2" y1="12" x2="22" y2="12">
        <stop stopColor="#4285F4"/>
        <stop offset="0.33" stopColor="#9B72CB"/>
        <stop offset="0.66" stopColor="#D96570"/>
        <stop offset="1" stopColor="#F9AB00"/>
      </linearGradient>
    </defs>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="white" fillOpacity="0.3"/>
  </svg>
);

// Perplexity Logo
const PerplexityLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor"/>
    <path d="M12 4L4 8v8l8 4 8-4V8l-8-4z" stroke="#0f172a" strokeWidth="1.5" fill="none"/>
    <path d="M12 4v16M4 8l8 4 8-4M4 16l8-4 8 4" stroke="#0f172a" strokeWidth="1.5"/>
  </svg>
);

// NotebookLM Logo - Google style
const NotebookLMLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="16" height="20" rx="2" fill="currentColor"/>
    <path d="M8 6h8M8 10h8M8 14h5" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="17" cy="17" r="4" fill="#FBBC04"/>
    <path d="M15.5 17l1 1 2-2" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Logo color mapping
const BRAND_COLORS = {
  ChatGPT: '#10a37f',
  Claude: '#cc785c',
  Gemini: '#4285F4',
  Perplexity: '#20808D',
  NotebookLM: '#EA4335'
};

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // --- DATA & CONTENT ---
  const slides = [
    {
      id: 'title',
      layout: 'breakthrough',
      title: 'The AI Breakdown',
      subtitle: 'Real Tools for Real Life',
      tagline: 'Demystifying AI for our community',
      presenter: 'Adam Gurski'
    },
    {
      id: 'intro',
      layout: 'profile',
      title: 'Who Am I?',
      subtitle: 'Electrician. Marketer. Creator.',
      quote: "I love empowering people to be more capable at doing the things they want and love.",
      points: [
        { icon: Zap, text: 'Telecommunications Electrician & Marketing Pro' },
        { icon: Music, text: 'Music visual fan — drawn to AI via Image Creation' },
        { icon: Smartphone, text: 'Content Creator & Workflow Builder' },
        { icon: Users, text: 'Here to break things down so they make sense' }
      ]
    },
    {
      id: 'landscape',
      layout: 'toolbox',
      title: 'The AI Landscape',
      subtitle: "It's not just one tool anymore. It's a toolbox.",
      description: 'We categorize them into "Everyday Assistants" (Chatbots) and "Specialists" (Research/Search).',
    },
    {
      id: 'everyday-ai',
      layout: 'three-col',
      title: 'The Big Three',
      subtitle: 'Your general-purpose assistants. Click to launch.',
      cards: [
        {
          title: 'ChatGPT',
          brand: 'OpenAI',
          url: 'https://chatgpt.com',
          badge: 'The All-Rounder',
          logo: ChatGPTLogo,
          logoColor: BRAND_COLORS.ChatGPT,
          description: 'Best for logical reasoning, data analysis, and following strict instructions.',
          features: ['DALL-E 3 Images', 'Voice Mode', 'Data Analysis']
        },
        {
          title: 'Claude',
          brand: 'Anthropic',
          url: 'https://claude.ai',
          badge: 'The Writer',
          logo: ClaudeLogo,
          logoColor: BRAND_COLORS.Claude,
          description: 'Most "human" writing style. Excellent at coding and safe, nuanced responses.',
          features: ['Large Context', 'Coding', 'Creative Writing']
        },
        {
          title: 'Gemini',
          brand: 'Google',
          url: 'https://gemini.google.com',
          badge: 'The Integrator',
          logo: GeminiLogo,
          logoColor: BRAND_COLORS.Gemini,
          description: 'Connected to Google Workspace. Fastest processing speed for large files.',
          features: ['Google Docs/Drive', 'Video Analysis', 'Web Search']
        }
      ]
    },
    {
      id: 'specialist-ai',
      layout: 'split-cards',
      title: 'The Specialists',
      subtitle: 'Accuracy & Research. Click to launch.',
      cards: [
        {
          title: 'Perplexity',
          brand: 'The Search Engine Killer',
          url: 'https://www.perplexity.ai',
          logo: PerplexityLogo,
          logoColor: BRAND_COLORS.Perplexity,
          content: `Don't just "Google it." Perplexity gives you a direct answer with citations. Great for checking competitors, market trends, or finding local suppliers instantly.`
        },
        {
          title: 'NotebookLM',
          brand: 'The Private Analyst',
          url: 'https://notebooklm.google.com',
          logo: NotebookLMLogo,
          logoColor: BRAND_COLORS.NotebookLM,
          content: 'A "walled garden." Upload YOUR documents (PDFs, price lists). It answers questions ONLY using your data. Zero hallucinations.'
        }
      ]
    },
    {
      id: 'use-cases',
      layout: 'grid-local',
      title: 'Practical Use Cases',
      subtitle: 'How different groups can use these tools tomorrow.',
      items: [
        { title: 'Hospitality', icon: '🏨', desc: 'Lodging & Dining', use: `Drafting event menus, writing "Things to do" guides for guests.` },
        { title: 'Real Estate', icon: '🏡', desc: 'Agents & Managers', use: 'Turning rough notes into polished listing descriptions. Market analysis.' },
        { title: 'Trades', icon: '🛠️', desc: 'Contractors', use: 'Drafting professional estimates. Safety checklists. Payment emails.' },
        { title: 'Libraries', icon: '📚', desc: 'Community Hubs', use: 'Creating reading lists. Summarizing articles. Event brainstorming.' },
        { title: 'Retail', icon: '🛍️', desc: 'Shops & Boutiques', use: 'Generating social captions. Brainstorming window display themes.' },
        { title: 'Job Seekers', icon: '💼', desc: 'Applications', use: 'Matching resume keywords. Practicing interviews with Voice Mode.' }
      ]
    },
    {
      id: 'demo-prompt',
      layout: 'framework',
      title: 'The "Power Prompt" Formula',
      subtitle: "Don't just ask. Direct.",
      steps: [
        { label: 'Role', text: 'Act as a professional marketing consultant...' },
        { label: 'Task', text: 'Write a Facebook post for my coffee shop...' },
        { label: 'Context', text: 'We just launched a new Honey Lavender Latte...' },
        { label: 'Format', text: 'Keep it under 3 sentences, friendly tone, include emojis.' }
      ]
    },
    {
      id: 'safety',
      layout: 'list-highlight',
      title: 'Safety & Ethics',
      subtitle: 'Keep your business safe.',
      items: [
        { label: 'Privacy', text: 'Never put client passwords or banking info into public AI.', icon: Lock },
        { label: 'Verification', text: 'AI can hallucinate (lie). Always fact-check numbers.', icon: Search },
        { label: 'Ownership', text: 'You generally own the output, but laws are evolving.', icon: FileText },
        { label: 'Disclosure', text: `If AI writes a blog, it's good ethics to review/edit it first.`, icon: Eye }
      ]
    },
    {
      id: 'closing',
      layout: 'cta',
      title: 'Visualizing the Future',
      subtitle: 'Let\'s Build Something Cool',
      content: [
        { text: 'NotebookLM: Turn a PDF into a Podcast', url: 'https://notebooklm.google.com' },
        { text: 'DALL-E 3: Visualize your new logo', url: 'https://chatgpt.com' },
        { text: 'Perplexity: Instant market research', url: 'https://www.perplexity.ai' }
      ],
      contact: {
        name: 'Adam Gurski',
        phone: '(217) 381-5394',
        email: 'adam88gur@gmail.com',
        note: 'Live Q&A: Your specific workflow challenges'
      }
    }
  ];

  // --- CONTROLS ---
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
    if (slideRef.current) slideRef.current.scrollTop = 0;
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
    if (slideRef.current) slideRef.current.scrollTop = 0;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Swipe
  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  // --- BACKGROUND ---
  const Background = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-slate-950" />
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full mix-blend-screen" />
    </div>
  );

  // --- ANIMATIONS ---

  const RobotBreakthrough = () => {
    const [broken, setBroken] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setBroken(true), 600);
      return () => clearTimeout(timer);
    }, []);
    const bricks = Array.from({ length: 16 });

    return (
      <div className="relative flex items-center justify-center w-full h-64 mb-8 overflow-visible z-10">
        <div className={`absolute inset-0 grid grid-cols-4 gap-0.5 transition-all duration-700 ${broken ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {bricks.map((_, i) => (
             <div
               key={i}
               className="bg-slate-800 border border-slate-700/50 shadow-inner"
               style={{
                 transform: broken
                   ? `translate(${Math.random() * 800 - 400}px, ${Math.random() * 800 - 400}px) rotate(${Math.random() * 720}deg) scale(0)`
                   : 'none',
                 transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
               }}
             />
          ))}
        </div>
        <div className={`transition-all duration-700 delay-300 transform ${broken ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-orange-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative bg-slate-900 border border-blue-500/50 p-6 rounded-3xl shadow-2xl text-blue-400">
              <Bot size={80} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RobotToolbox = () => {
    const [step, setStep] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setStep((p) => (p + 1) % 5), 1800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-end justify-center h-48 mb-12 gap-6 z-10 relative">
             <div className="relative z-10">
                <div className="bg-slate-900 border border-blue-500/30 p-4 rounded-2xl text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    <Bot size={48} />
                </div>
                <div className={`absolute -right-3 top-8 w-10 h-2 bg-slate-700 rounded-full transition-transform duration-500 origin-left ${step > 0 ? '-rotate-45' : 'rotate-45'}`} />
             </div>

             <div className="relative">
                {/* Tools */}
                {[
                  { icon: Hammer, color: 'text-orange-500' },
                  { icon: Wrench, color: 'text-cyan-400' },
                  { icon: Search, color: 'text-emerald-400' }
                ].map((Tool, i) => (
                   <div key={i} className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 transition-all duration-700 ${step === i + 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-50'}`}>
                      <div className="bg-slate-800 border border-slate-700 p-3 rounded-full shadow-lg">
                        <Tool.icon className={Tool.color} size={28} />
                      </div>
                   </div>
                ))}

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 w-28 h-20 rounded-lg flex items-center justify-center relative z-20 shadow-2xl">
                    <div className="w-full h-1 bg-orange-500/50 absolute top-2" />
                    <Briefcase className="text-slate-600" size={36} />
                </div>
             </div>
        </div>
    );
  };

  // --- RENDERERS ---

  const renderBreakthrough = (slide) => (
    <div className="flex flex-col items-center justify-center min-h-full py-12 px-6 text-center z-10 relative">
      <RobotBreakthrough />
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-lg">
        THE AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">BREAKDOWN</span>
      </h1>
      <div className="space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-light text-slate-300">
          {slide.subtitle}
        </h2>
        <div className="inline-block">
            <span className="text-sm md:text-lg font-bold tracking-[0.2em] text-orange-400 uppercase border border-orange-500/30 bg-orange-500/10 py-3 px-8 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.2)]">
            {slide.tagline}
            </span>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800/50 w-full max-w-sm mx-auto">
        <p className="text-lg font-medium text-slate-500 uppercase tracking-widest">Presented By</p>
        <p className="text-xl font-bold text-white mt-1">{slide.presenter}</p>
      </div>
    </div>
  );

  const renderProfileSlide = (slide) => (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-12 z-10 relative">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-8">
                {/* Profile Photo */}
                <div className="flex justify-center md:justify-start mb-4">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full blur-lg opacity-50" />
                        <img
                            src="/images/adam-gurski.jpg"
                            alt="Adam Gurski"
                            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Fallback avatar */}
                        <div className="hidden relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 items-center justify-center text-4xl md:text-5xl font-bold text-white border-4 border-slate-800 shadow-2xl">
                            AG
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-2">{slide.title}</h2>
                    <p className="text-2xl md:text-3xl text-blue-400 font-light">{slide.subtitle}</p>
                </div>
                <blockquote className="border-l-4 border-orange-500 pl-6 py-2">
                    <p className="text-xl text-slate-300 italic leading-relaxed">"{slide.quote}"</p>
                </blockquote>
            </div>

            <div className="grid gap-4">
                {slide.points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                    <div className="p-3 bg-slate-950 rounded-lg text-orange-500 group-hover:scale-110 transition-transform">
                        <point.icon size={24} />
                    </div>
                    <span className="text-lg text-slate-200 font-medium">{point.text}</span>
                </div>
                ))}
            </div>
        </div>
    </div>
  );

  const renderToolboxSlide = (slide) => (
    <div className="flex flex-col items-center justify-center min-h-full px-4 py-8 text-center z-10 relative">
        <RobotToolbox />
        <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl md:text-7xl font-black text-white">{slide.title}</h2>
            <p className="text-2xl md:text-3xl text-blue-300 font-light">{slide.subtitle}</p>
            <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 max-w-2xl mx-auto backdrop-blur-sm">
                <p className="text-xl text-slate-300 leading-relaxed">{slide.description}</p>
            </div>
        </div>
    </div>
  );

  const renderThreeCol = (slide) => (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-8 z-10 relative">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-3">{slide.title}</h2>
        <p className="text-xl text-slate-400">{slide.subtitle}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-7xl">
        {slide.cards.map((card, i) => (
          <a
            key={i}
            href={card.url}
            target="_blank"
            rel="noreferrer"
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-1 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col h-full"
          >
            {/* Top Border Highlight */}
            <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: card.logoColor }} />

            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                        {/* Brand Logo */}
                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-slate-700 transition-colors" style={{ color: card.logoColor }}>
                            {card.logo && <card.logo size={32} />}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{card.title}</h3>
                            <p className="text-sm font-mono text-slate-500 uppercase">{card.brand}</p>
                        </div>
                    </div>
                    <ExternalLink className="text-slate-600 group-hover:text-orange-500 transition-colors" size={20} />
                </div>

                <div className="mb-6">
                    <span className="inline-block py-1 px-3 rounded text-xs font-bold uppercase tracking-wider bg-slate-800 border border-slate-700" style={{ color: card.logoColor }}>
                        {card.badge}
                    </span>
                </div>

                <p className="text-slate-400 mb-8 flex-grow">{card.description}</p>

                <div className="space-y-3 pt-6 border-t border-slate-800">
                    {card.features.map((feat, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.logoColor }} />
                            {feat}
                        </div>
                    ))}
                </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  const renderSplitCards = (slide) => (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-8 z-10 relative">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-3">{slide.title}</h2>
        <p className="text-xl text-slate-400">{slide.subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {slide.cards.map((card, i) => (
          <a
            key={i}
            href={card.url}
            target="_blank"
            rel="noreferrer"
            className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col hover:bg-slate-800/50 transition-all duration-300"
            style={{ '--hover-color': card.logoColor }}
          >
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-opacity-50 transition-colors" style={{ color: card.logoColor, borderColor: card.logoColor + '30' }}>
                        {card.logo && <card.logo size={36} />}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white transition-colors" style={{ color: 'white' }}>{card.title}</h3>
                        <p className="text-sm text-slate-500 uppercase font-bold tracking-wide">{card.brand}</p>
                    </div>
                </div>
                <ExternalLink className="text-slate-700 transition-colors" style={{ color: card.logoColor }} />
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">{card.content}</p>
          </a>
        ))}
      </div>
    </div>
  );

  const renderGridLocal = (slide) => (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-8 z-10 relative">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-3">{slide.title}</h2>
        <p className="text-xl text-slate-400">{slide.subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {slide.items.map((item, i) => (
          <div key={i} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800 transition-all group">
            <div className="flex items-start gap-4">
              <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">{item.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">{item.desc}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.use}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFramework = (slide) => (
    <div className="flex flex-col items-center justify-center min-h-full px-4 py-8 z-10 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-3">{slide.title}</h2>
        <p className="text-xl text-slate-400">{slide.subtitle}</p>
      </div>
      <div className="w-full max-w-3xl space-y-4">
        {slide.steps.map((step, i) => (
          <div key={i} className="flex items-center bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
             <div className="w-8 shrink-0 flex justify-center mr-4">
                 <CheckCircle className="text-slate-700 group-hover:text-green-500 transition-colors" size={24} />
             </div>
             <div className="w-24 shrink-0 font-bold text-right pr-6 uppercase text-sm tracking-wider text-blue-500">
                {step.label}
             </div>
             <div className="h-8 w-px bg-slate-800 mr-6 hidden md:block" />
             <div className="text-lg text-slate-200 font-medium font-mono">
               "{step.text}"
             </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderList = (slide) => (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-8 z-10 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-3">{slide.title}</h2>
        <p className="text-xl text-slate-400">{slide.subtitle}</p>
      </div>
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6">
        {slide.items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-5 p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-red-500/40 transition-colors group">
            <div className="shrink-0 p-3 rounded-lg bg-slate-950 text-slate-500 group-hover:text-red-500 transition-colors">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{item.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCTA = (slide) => (
    <div className="flex flex-col items-center justify-center min-h-full text-center space-y-12 px-6 py-8 z-10 relative">
      <div>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
          VISUALIZE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">FUTURE</span>
        </h2>
        <p className="text-2xl text-slate-400 font-light">{slide.subtitle}</p>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        {slide.content.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all group">
             <span className="text-xl text-white font-medium group-hover:text-orange-400 transition-colors">{item.text}</span>
             <ArrowRight className="text-slate-600 group-hover:text-orange-500 transition-colors" />
          </a>
        ))}
      </div>

      <div className="pt-8 border-t border-slate-800 w-full max-w-md">
        <p className="text-3xl font-bold text-white mb-2">{slide.contact.name}</p>
        <p className="text-xl text-blue-400 font-mono mb-4">{slide.contact.phone}</p>
        <p className="text-slate-500">{slide.contact.email}</p>
      </div>
    </div>
  );

  const renderContent = () => {
    const slide = slides[currentSlide];
    switch (slide.layout) {
      case 'breakthrough': return renderBreakthrough(slide);
      case 'profile': return renderProfileSlide(slide);
      case 'toolbox': return renderToolboxSlide(slide);
      case 'three-col': return renderThreeCol(slide);
      case 'split-cards': return renderSplitCards(slide);
      case 'grid-local': return renderGridLocal(slide);
      case 'framework': return renderFramework(slide);
      case 'list-highlight': return renderList(slide);
      case 'cta': return renderCTA(slide);
      default: return null;
    }
  };

  return (
    <div
      className="flex flex-col h-screen w-full bg-slate-950 font-sans text-slate-200 overflow-hidden relative"
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
    >
      <Background />

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-900 shrink-0 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <main ref={slideRef} className="flex-1 w-full max-w-[1400px] mx-auto overflow-y-auto scroll-smooth z-10 relative">
        <div key={currentSlide} className="w-full min-h-full">
          {renderContent()}
        </div>
      </main>

      {/* Navigation */}
      <nav className="bg-slate-950/80 backdrop-blur-md border-t border-slate-800 px-6 py-4 flex items-center justify-between z-20 shrink-0">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full hover:bg-slate-800 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={32} />
        </button>

        <span className="text-sm font-bold text-slate-600 uppercase tracking-widest font-mono">
           {currentSlide + 1} / {slides.length}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight size={32} />
        </button>
      </nav>

      {/* Styles */}
      <style>{`
        @keyframes bounceSlow { 0%, 100% { transform: translateY(-3%); } 50% { transform: translateY(0); } }
        .animate-bounce-slow { animation: bounceSlow 3s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Presentation;

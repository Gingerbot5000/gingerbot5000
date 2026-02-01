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
          description: 'Best for logical reasoning, data analysis, and following strict instructions.',
          features: ['DALL-E 3 Images', 'Voice Mode', 'Data Analysis']
        },
        {
          title: 'Claude',
          brand: 'Anthropic',
          url: 'https://claude.ai',
          badge: 'The Writer',
          description: 'Most "human" writing style. Excellent at coding and safe, nuanced responses.',
          features: ['Large Context', 'Coding', 'Creative Writing']
        },
        {
          title: 'Gemini',
          brand: 'Google',
          url: 'https://gemini.google.com',
          badge: 'The Integrator',
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
          icon: Globe,
          content: "Don't just "Google it." Perplexity gives you a direct answer with citations. Great for checking competitors, market trends, or finding local suppliers instantly."
        },
        {
          title: 'NotebookLM',
          brand: 'The Private Analyst',
          url: 'https://notebooklm.google.com',
          icon: BookOpen,
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
        { title: 'Hospitality', icon: '🏨', desc: 'Lodging & Dining', use: 'Drafting event menus, writing "Things to do" guides for guests.' },
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
        { label: 'Disclosure', text: 'If AI writes a blog, it's good ethics to review/edit it first.', icon: Eye }
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
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{card.title}</h3>
                        <p className="text-sm font-mono text-slate-500 uppercase">{card.brand}</p>
                    </div>
                    <ExternalLink className="text-slate-600 group-hover:text-orange-500 transition-colors" size={20} />
                </div>

                <div className="mb-6">
                    <span className="inline-block py-1 px-3 rounded text-xs font-bold uppercase tracking-wider bg-slate-800 text-blue-300 border border-slate-700">
                        {card.badge}
                    </span>
                </div>

                <p className="text-slate-400 mb-8 flex-grow">{card.description}</p>

                <div className="space-y-3 pt-6 border-t border-slate-800">
                    {card.features.map((feat, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
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
            className="group bg-slate-900 border border-slate-800 hover:border-orange-500/50 rounded-3xl p-8 flex flex-col hover:bg-slate-800/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-slate-950 rounded-xl text-orange-500 border border-slate-800 group-hover:border-orange-500/30 transition-colors">
                        <card.icon size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{card.title}</h3>
                        <p className="text-sm text-slate-500 uppercase font-bold tracking-wide">{card.brand}</p>
                    </div>
                </div>
                <ExternalLink className="text-slate-700 group-hover:text-orange-500 transition-colors" />
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

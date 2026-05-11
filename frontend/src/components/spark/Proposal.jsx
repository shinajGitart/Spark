import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Layers, 
  Map, 
  FileText, 
  Calendar, 
  Users, 
  Monitor, 
  ShieldCheck, 
  Search, 
  Zap,
  Globe,
  Briefcase,
  Layout,
  Mail,
  Printer,
  ChevronRight,
  Info,
  AlertCircle
} from 'lucide-react';

const COLORS = {
  electricBlue: '#2F347D',
  royalBlue: '#27306B',
  energyRed: '#A92A2E',
  sparkRed: '#C63A3A',
  silver: '#D9D9DE',
  offWhite: '#F8F9FB',
  glass: 'rgba(255, 255, 255, 0.7)',
  glassDark: 'rgba(39, 48, 107, 0.05)',
};

const Section = ({ title, children, className = "" }) => (
  <section className={`py-12 px-6 max-w-7xl mx-auto ${className}`}>
    {title && (
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#27306B] relative inline-block">
          {title}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#C63A3A] rounded-full"></div>
        </h2>
      </div>
    )}
    {children}
  </section>
);

const GlassCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const Proposal = () => {
  useEffect(() => {
    document.title = "SPARK Website Development Proposal";
    window.scrollTo(0, 0);
    
    // Add light theme class to body
    document.body.classList.add('proposal-light-theme');
    return () => {
      document.body.classList.remove('proposal-light-theme');
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-800 font-body selection:bg-[#2F347D] selection:text-white overflow-x-hidden relative">
      {/* Background Reset for the dark theme body */}
      <div className="fixed inset-0 bg-[#F8F9FB] -z-20"></div>
      
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 print:hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#2F347D]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-[#C63A3A]/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-[#27306B]/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 print:hidden">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2F347D] rounded flex items-center justify-center">
              <Zap className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-[#2F347D]">SPARK</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#summary" className="hover:text-[#2F347D] transition-colors">Summary</a>
            <a href="#phase1" className="hover:text-[#2F347D] transition-colors">Phase 1</a>
            <a href="#structure" className="hover:text-[#2F347D] transition-colors">Structure</a>
            <a href="#milestones" className="hover:text-[#2F347D] transition-colors">Milestones</a>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-[#2F347D] text-white px-5 py-2.5 rounded-full hover:bg-[#27306B] transition-all shadow-lg shadow-[#2F347D]/20 active:scale-95 font-bold"
            >
              <Printer size={16} />
              <span>Export PDF</span>
            </button>
          </div>
          
          <button onClick={handlePrint} className="md:hidden p-2 text-[#2F347D]">
            <Printer size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F347D]/10 text-[#2F347D] font-bold text-xs mb-8 tracking-wider uppercase">
              <Zap size={14} className="animate-pulse" /> Project Proposal 2026
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-[#27306B] mb-8 leading-tight tracking-tighter">
              SPARK Website <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F347D] via-[#A92A2E] to-[#C63A3A] pb-2">
                Development Proposal
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 mb-12 max-w-3xl font-light leading-relaxed">
              Full Website Design & Development <br />
              <span className="font-bold text-[#27306B]">Phase 1 Completion + Phase 2 Proposal</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-sm flex flex-col gap-1 min-w-[220px]">
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Client</span>
                <span className="text-[#27306B] font-bold text-xl">SPARK - Client Review</span>
              </div>
              <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-sm flex flex-col gap-1 min-w-[160px]">
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Document Date</span>
                <span className="text-[#27306B] font-bold text-xl">May 2026</span>
              </div>
              <div className="bg-[#2F347D]/5 backdrop-blur-md p-5 rounded-2xl border border-[#2F347D]/10 shadow-sm flex flex-col gap-1 min-w-[240px]">
                <span className="text-[#2F347D] text-[10px] font-black uppercase tracking-[0.2em]">Current Stage</span>
                <span className="text-[#2F347D] font-bold text-xl flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2F347D] animate-ping"></div>
                  Design Approval Stage
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="group bg-gradient-to-br from-[#2F347D] to-[#27306B] p-8 rounded-[2.5rem] text-white shadow-2xl hover:translate-y-[-8px] transition-all duration-500">
                <div className="mb-6 bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div className="text-4xl font-display font-black mb-1">110h</div>
                <div className="text-white/70 text-[10px] font-black uppercase tracking-[0.15em]">Phase 1 Completed</div>
              </div>
              <div className="group bg-white p-8 rounded-[2.5rem] text-slate-800 border border-slate-100 shadow-xl hover:translate-y-[-8px] transition-all duration-500">
                <div className="mb-6 bg-[#A92A2E]/10 w-12 h-12 rounded-2xl flex items-center justify-center text-[#A92A2E]">
                  <Layers size={24} />
                </div>
                <div className="text-4xl font-display font-black mb-1 text-[#A92A2E]">221h</div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">Phase 2 Proposed</div>
              </div>
              <div className="group bg-white p-8 rounded-[2.5rem] text-slate-800 border border-slate-100 shadow-xl hover:translate-y-[-8px] transition-all duration-500">
                <div className="mb-6 bg-[#2F347D]/10 w-12 h-12 rounded-2xl flex items-center justify-center text-[#2F347D]">
                  <Clock size={24} />
                </div>
                <div className="text-4xl font-display font-black mb-1 text-[#27306B]">331h</div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">Total Project Effort</div>
              </div>
              <div className="group bg-white p-8 rounded-[2.5rem] text-slate-800 border border-slate-100 shadow-xl hover:translate-y-[-8px] transition-all duration-500">
                <div className="mb-6 bg-[#C63A3A]/10 w-12 h-12 rounded-2xl flex items-center justify-center text-[#C63A3A]">
                  <Monitor size={24} />
                </div>
                <div className="text-4xl font-display font-black mb-1 text-[#C63A3A]">15</div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">Key Milestones</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#structure" className="px-10 py-5 bg-[#2F347D] text-white rounded-2xl font-bold shadow-2xl shadow-[#2F347D]/30 hover:bg-[#27306B] transition-all flex items-center justify-center gap-3 group text-lg">
                View Website Structure
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#milestones" className="px-10 py-5 bg-white text-[#2F347D] border-2 border-[#2F347D] rounded-2xl font-bold hover:bg-[#2F347D]/5 transition-all flex items-center justify-center text-lg">
                View Milestones
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-0.5 bg-[#D9D9DE]"></div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">
                Prepared by Nama Injaz IT
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hero Background Elements */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20 print:hidden">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_120s_linear_infinite]">
            <path fill="#2F347D" d="M47.7,-63.2C59.9,-54.4,66.7,-38.4,70.9,-22.1C75,-5.8,76.5,10.8,70.5,25.1C64.5,39.4,51,51.4,36,58.8C21.1,66.2,4.6,69,-12.3,66.8C-29.2,64.6,-46.6,57.5,-58.5,44.7C-70.5,31.9,-77,13.4,-75.4,-4.1C-73.8,-21.6,-64.1,-38.2,-50.2,-46.6C-36.2,-55,-18.1,-55.1,-0.3,-54.7C17.5,-54.2,35.4,-72,47.7,-63.2Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      {/* Main Note Card */}
      <Section id="summary" className="-mt-16 relative z-20">
        <GlassCard className="p-10 md:p-16 bg-gradient-to-br from-white to-[#F8F9FB] border-l-[12px] border-l-[#C63A3A] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C63A3A]/5 rounded-bl-full"></div>
          <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
            <div className="bg-[#C63A3A]/10 p-6 rounded-3xl text-[#C63A3A] shadow-inner">
              <AlertCircle size={48} />
            </div>
            <div>
              <h3 className="text-3xl font-display font-black text-[#27306B] mb-6">Important Phase Note</h3>
              <p className="text-xl text-slate-600 leading-relaxed italic font-light">
                "The current demo represents only the homepage concept prepared for client review and design approval. 
                Full website pages, backend functions, final content, SEO, security testing, production deployment, 
                and handover are still pending and covered in the Phase 2 scope."
              </p>
            </div>
          </div>
        </GlassCard>
      </Section>


      {/* Executive Summary */}
      <Section title="Executive Summary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-slate-600 leading-relaxed">
            This proposal explains the completed Phase 1 homepage concept work and the proposed Phase 2 full website development scope. 
            The purpose is to clearly show the client what has already been completed, what pages and modules will be developed next, 
            the milestone-wise delivery plan, estimated effort, final deliverables, and required inputs from the client.
          </p>
        </div>
      </Section>

      {/* Phase 1 Completed Work */}
      <Section title="Phase 1: Completed Work Summary" id="phase1" className="bg-[#27306B]/[0.02]">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#2F347D] text-white px-4 py-1.5 rounded-full text-sm font-bold">Total Effort: 110 Hours</div>
            <div className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
              <CheckCircle2 size={14} /> 100% Completed
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Strategy & Research", items: ["Client company profile review", "SPARK services & sector review", "Market & competitor research", "Brand color study (SPARK Logo)"] },
            { title: "Planning & Architecture", items: ["Website structure planning", "Wireframe & layout planning", "Design visual direction", "Animation concept testing"] },
            { title: "Frontend Development", items: ["React + Tailwind setup", "Homepage hero development", "Premium dark theme implementation", "Core capabilities section"] },
            { title: "Content & Modules", items: ["About / Who We Are section", "Global partners integration", "Partner logo optimization", "Approved vendors section"] },
            { title: "Optimization", items: ["Frontend bug fixing", "Build issue resolution", "Responsive testing", "Performance optimization"] },
            { title: "Deployment", items: ["Vercel deployment", "GitHub integration", "Badge & watermark cleanup", "Homepage demo preparation"] }
          ].map((cat, idx) => (
            <GlassCard key={idx} className="p-6 h-full" delay={idx * 0.1}>
              <h4 className="text-[#2F347D] font-bold text-lg mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="w-8 h-8 rounded-lg bg-[#2F347D]/10 flex items-center justify-center text-[#2F347D]">{idx + 1}</span>
                {cat.title}
              </h4>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Proposed Website Structure */}
      <Section title="Proposed Website Structure" id="structure">
        <div className="relative p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Layout size={200} />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Root Node */}
            <div className="w-full max-w-xs p-4 bg-[#2F347D] text-white rounded-xl text-center font-bold shadow-lg mb-12 relative">
              SPARK Website
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-[#2F347D]/20"></div>
            </div>

            {/* Grid of Main Pages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 w-full">
              {[
                { title: "Home Page", sub: ["Hero Banner", "Capabilities Overview", "Sectors Preview", "Global Partners"] },
                { title: "About Us", sub: ["Vision & Mission", "Business Values", "Company Background", "Market Focus"] },
                { title: "Services", sub: ["Industrial Solutions", "Renewable Energy", "Automation", "Technical Support"] },
                { title: "Sectors", sub: ["Industrial & Energy", "Oil & Gas", "Commercial", "Infrastructure"] },
                { title: "Experience", sub: ["Project Categories", "Reference Works", "Industry Showcases", "Photo Gallery"] },
                { title: "Contact Us", sub: ["Contact Details", "Location Map", "Enquiry Form", "Social Links"] }
              ].map((page, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className="w-full p-4 bg-white border-2 border-[#2F347D]/10 rounded-xl text-center font-bold text-[#27306B] shadow-sm mb-4 group-hover:border-[#2F347D]/30 transition-all">
                    {page.title}
                  </div>
                  <div className="w-full space-y-2">
                    {page.sub.map((s, i) => (
                      <div key={i} className="text-xs bg-slate-50 p-2 rounded-lg text-slate-500 border border-slate-100 flex items-center gap-2">
                        <ChevronRight size={12} className="text-[#A92A2E]" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 w-full max-w-2xl bg-[#A92A2E]/5 border border-dashed border-[#A92A2E]/20 p-6 rounded-2xl">
              <h5 className="text-[#A92A2E] font-bold mb-3 flex items-center gap-2">
                <Layers size={18} /> Additional Modules
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-white rounded-xl shadow-sm text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Approved Vendors</div>
                <div className="p-3 bg-white rounded-xl shadow-sm text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Service Detail Layouts</div>
                <div className="p-3 bg-white rounded-xl shadow-sm text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Backend Forms</div>
                <div className="p-3 bg-white rounded-xl shadow-sm text-[10px] font-bold text-slate-600 uppercase tracking-tighter">SEO & Security</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Page Count Table */}
      <Section title="Estimated Page & Module Count">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#27306B] text-white">
              <tr>
                <th className="p-6 font-bold">Page / Module</th>
                <th className="p-6 font-bold">Category</th>
                <th className="p-6 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: "Home Page", cat: "Main Page", status: "Demo Completed, Polish Pending", color: "text-[#2F347D]" },
                { name: "About Us", cat: "Inner Page", status: "To be developed", color: "text-slate-400" },
                { name: "Services / Core Capabilities", cat: "Inner Page", status: "To be developed", color: "text-slate-400" },
                { name: "Individual Service Details", cat: "Dynamic Sections", status: "To be developed", color: "text-slate-400" },
                { name: "Sectors We Serve", cat: "Inner Page / Section", status: "To be developed", color: "text-slate-400" },
                { name: "Global Partners & Approved Vendors", cat: "Inner Page / Section", status: "To be developed", color: "text-slate-400" },
                { name: "Projects / Experience", cat: "Recommended Addition", status: "To be developed", color: "text-[#A92A2E]" },
                { name: "Contact Us", cat: "Inner Page", status: "To be developed", color: "text-slate-400" },
                { name: "Backend Contact Form", cat: "Functional Module", status: "To be developed", color: "text-slate-400" },
                { name: "SEO / Security / QA", cat: "Technical Module", status: "To be completed", color: "text-slate-400" },
                { name: "Final Deployment & Handover", cat: "Delivery Module", status: "To be completed", color: "text-slate-400" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-semibold text-slate-700">{row.name}</td>
                  <td className="p-6 text-slate-500">{row.cat}</td>
                  <td className={`p-6 font-medium ${row.color}`}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-8 bg-slate-50 border-t border-slate-100">
            <p className="text-[#2F347D] font-bold text-lg">
              Total Estimated Website Scope: <span className="text-[#A92A2E]">8 to 10 main website pages/sections</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Including frontend pages, contact form functionality, responsive design, testing, SEO setup, security review, and deployment support.
            </p>
          </div>
        </div>
      </Section>

      {/* Phase 2 Milestones */}
      <Section title="Phase 2: Milestone-Based Delivery Plan" id="milestones">
        <div className="flex items-center gap-4 mb-12 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="bg-[#A92A2E] text-white px-6 py-3 rounded-xl font-bold text-2xl shadow-lg shadow-[#A92A2E]/20">
            221h
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#27306B]">Total Phase 2 Effort</h4>
            <p className="text-slate-500 text-sm">Estimated timeline: 10 to 12 working days</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { m: 1, task: "Final homepage polish based on client feedback", hrs: 8, out: "Approved final homepage" },
            { m: 2, task: "Website structure finalization and content alignment", hrs: 10, out: "Final sitemap and content flow" },
            { m: 3, task: "About Us page development", hrs: 10, out: "Completed About page" },
            { m: 4, task: "Services / Core Capabilities page development", hrs: 14, out: "Completed services page" },
            { m: 5, task: "Individual service detail sections", hrs: 14, out: "Detailed service sections" },
            { m: 6, task: "Sectors We Serve page / section", hrs: 8, out: "Industry-based solution section" },
            { m: 7, task: "Global Partners and Approved Vendors setup", hrs: 16, out: "Partner/vendor pages or sections" },
            { m: 8, task: "Projects / Experience page", hrs: 10, out: "Project showcase page" },
            { m: 9, task: "Contact Us page and enquiry form", hrs: 16, out: "Working contact page and form" },
            { m: 10, task: "Backend form handling and email notification", hrs: 16, out: "Enquiry submission flow" },
            { m: 11, task: "Mobile, tablet, and browser responsiveness", hrs: 18, out: "Responsive website" },
            { m: 12, task: "UI/UX refinement and animation optimization", hrs: 22, out: "Smooth professional frontend" },
            { m: 13, task: "SEO, performance, and metadata setup", hrs: 14, out: "Basic SEO-ready website" },
            { m: 14, task: "Security testing and vulnerability review", hrs: 22, out: "Security-tested frontend/forms" },
            { m: 15, task: "Final QA, bug fixing, deployment, and handover", hrs: 23, out: "Production-ready website" },
          ].map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col md:flex-row gap-4 md:items-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#2F347D]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-[#27306B] group-hover:bg-[#2F347D] group-hover:text-white transition-colors shrink-0">
                {milestone.m}
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-[#27306B]">{milestone.task}</h5>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-green-500" />
                  Deliverable: {milestone.out}
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-[#A92A2E]">{milestone.hrs} hrs</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Est. Effort</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final Deliverables */}
      <Section title="Final Deliverables Section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Layout, title: "Full Website Design", desc: "Complete modern SPARK website design with premium visual style" },
            { icon: CheckCircle2, title: "Homepage", desc: "Final polished homepage based on approved demo" },
            { icon: Users, title: "About Us Page", desc: "Company profile, mission, vision, and business overview" },
            { icon: Briefcase, title: "Services Page", desc: "Full service and capability presentation" },
            { icon: Layers, title: "Service Details", desc: "Detailed explanation for each major service area" },
            { icon: Map, title: "Sectors Page", desc: "Industry-wise solution presentation" },
            { icon: Globe, title: "Partners Page", desc: "Global partner/vendor brand showcase" },
            { icon: ShieldCheck, title: "Approved Vendors", desc: "Organized vendor display with logos/details" },
            { icon: Monitor, title: "Projects Page", desc: "Professional project/reference showcase" },
            { icon: Mail, title: "Contact Page", desc: "Contact details, map/location, and enquiry form" },
            { icon: Zap, title: "Backend Handling", desc: "Contact form processing and email notification" },
            { icon: Layout, title: "Responsive Design", desc: "Mobile, tablet, laptop, and desktop compatibility" },
            { icon: Search, title: "SEO Setup", desc: "Title, meta description, keywords, and sitemap basics" },
            { icon: ShieldCheck, title: "Security Testing", desc: "Form validation, dependency review, and vulnerability checks" },
            { icon: Zap, title: "Performance", desc: "Page loading and frontend smoothness improvement" },
            { icon: Globe, title: "Final Deployment", desc: "Production deployment and domain support" }
          ].map((item, idx) => (
            <GlassCard key={idx} className="p-6 border-b-4 border-b-[#2F347D]/10 hover:border-b-[#2F347D] transition-all">
              <div className="w-10 h-10 bg-[#2F347D]/5 rounded-xl flex items-center justify-center text-[#2F347D] mb-4">
                <item.icon size={20} />
              </div>
              <h5 className="font-bold text-[#27306B] mb-2">{item.title}</h5>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Required Inputs from Client */}
      <Section title="Required Inputs from Client" className="bg-[#A92A2E]/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Content Assets", items: ["Final company profile", "Final list of services", "Project photos or references"] },
            { title: "Brand Assets", items: ["Approved vendor/partner logos", "Official contact details", "Location/map details"] },
            { title: "Technical Inputs", items: ["Official email addresses", "Final content approval", "Domain/DNS access (if required)"] }
          ].map((cat, idx) => (
            <GlassCard key={idx} className="p-6 border-t-4 border-t-[#A92A2E]/40">
              <h4 className="text-[#A92A2E] font-bold text-lg mb-6 flex items-center gap-2">
                <Info size={20} />
                {cat.title}
              </h4>
              <div className="space-y-4">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#A92A2E]"></div>
                    <span className="text-sm font-medium text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="mt-12 p-6 bg-[#27306B] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="bg-white/20 p-3 rounded-full shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <p className="font-bold text-lg">Timeline Note</p>
              <p className="text-white/70 text-sm">The remaining Phase 2 work is estimated to require approximately 10 to 12 working days.</p>
            </div>
          </div>
          <div className="text-center md:text-right text-xs text-white/50 italic">
            Subject to client feedback turnaround, final content availability, and approval timing.
          </div>
        </div>
      </Section>

      {/* Scope Disclaimer */}
      <Section>
        <div className="bg-[#A92A2E] p-1 rounded-[2.5rem] shadow-2xl shadow-[#A92A2E]/20">
          <div className="bg-white px-8 py-10 md:px-16 rounded-[2.3rem] flex flex-col md:flex-row gap-10 items-center">
            <div className="bg-[#A92A2E]/10 p-6 rounded-3xl text-[#A92A2E] shrink-0">
              <ShieldCheck size={60} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-[#27306B] mb-4">What Is Not Included in Current Demo</h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                The homepage concept demo submitted for client review does not include the full website inner pages, 
                backend functions, final production-ready content, SEO setup, meta configuration, security and vulnerability testing, 
                production-level deployment, or domain handover. These items are part of the <span className="text-[#A92A2E] font-bold underline decoration-wavy">Phase 2 scope</span>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2F347D] rounded flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#2F347D]">SPARK</span>
            </div>
            <p className="text-slate-400 text-xs font-medium mt-2">© 2026 SPARK Website Development Proposal</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-1">Confidential Document</p>
            <p className="text-slate-400 text-xs">Prepared for Client Review | May 2026</p>
            <p className="text-[#2F347D] text-[10px] font-black mt-4 uppercase tracking-[0.2em]">Prepared by Nama Injaz IT</p>
          </div>
        </div>
      </footer>

      {/* Print Overlay */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          nav, .print\\:hidden, button { display: none !important; }
          body { background: white !important; }
          .bg-\\[\\#F8F9FB\\] { background: white !important; }
          section { page-break-inside: avoid; padding-top: 2rem !important; padding-bottom: 2rem !important; }
          .max-w-7xl { max-width: 100% !important; width: 100% !important; margin: 0 !important; }
          .GlassCard, div[class*="bg-white"] { 
            box-shadow: none !important; 
            border: 1px solid #eee !important; 
            background: white !important;
            backdrop-filter: none !important;
          }
          h1 { font-size: 3rem !important; }
          .text-transparent { color: #2F347D !important; background: none !important; -webkit-background-clip: initial !important; }
          .bg-gradient-to-br { background: white !important; border: 1px solid #ddd !important; color: black !important; }
          .bg-gradient-to-br div, .bg-gradient-to-br span { color: black !important; }
          .bg-\\[\\#27306B\\] { background: #27306B !important; color: white !important; -webkit-print-color-adjust: exact; }
          .bg-\\[\\#A92A2E\\] { background: #A92A2E !important; color: white !important; -webkit-print-color-adjust: exact; }
          .bg-\\[\\#2F347D\\] { background: #2F347D !important; color: white !important; -webkit-print-color-adjust: exact; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}} />
    </div>
  );
};

export default Proposal;

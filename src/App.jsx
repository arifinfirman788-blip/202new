import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Layers, 
  Lightbulb, 
  Settings, 
  Users, 
  Zap, 
  ShoppingBag, 
  UserCircle,
  LayoutDashboard,
  Cpu,
  ArrowRight,
  PlayCircle,
  Network,
  Share2,
  Rocket
} from 'lucide-react';

const Section = ({ id, title, icon: Icon, children, delay = 0 }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="mb-24 scroll-mt-24"
  >
    <div className="flex items-center gap-4 mb-10">
      <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200">
        <Icon size={32} />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>
        <div className="h-1.5 w-20 bg-indigo-600 rounded-full mt-2" />
      </div>
    </div>
    {children}
  </motion.section>
);

const Card = ({ title, description, imagePlaceholder, delay = 0, badge }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-2"
  >
    <div className="relative h-56 bg-slate-100 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-slate-400 italic group-hover:scale-105 transition-transform duration-500">
        {imagePlaceholder || '图片位置预留'}
      </div>
      {badge && (
        <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {badge}
        </div>
      )}
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
    </div>
  </motion.div>
);

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors group">
    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <Cpu size={24} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">Product <span className="text-indigo-600">Report</span></span>
          </div>
          <nav className="hidden lg:flex gap-10 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#scope" className="hover:text-indigo-600 transition-colors">项目范围</a>
            <a href="#goal" className="hover:text-indigo-600 transition-colors">核心目标</a>
            <a href="#arch" className="hover:text-indigo-600 transition-colors">统一架构</a>
            <a href="#philosophy" className="hover:text-indigo-600 transition-colors">设计思想</a>
          </nav>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-600 transition-all shadow-md">
            联系我们
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="text-center mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-40 -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-black uppercase tracking-widest mb-8">
              Product Design Discussion Basis
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
              云码通转型与 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">
                AI 超级应用设计
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
              统一产品设计思想、架构与运营思路，明确门户级 AI 智能体样板，重构从服务关系到应用生态的完整组织体系。
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#goal" className="bg-indigo-600 text-white px-10 py-4 rounded-full font-black hover:bg-indigo-700 transition-all flex items-center gap-3 shadow-xl shadow-indigo-100 hover:scale-105">
                核心目标 <ArrowRight size={22} />
              </a>
              <button className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-4 rounded-full font-black hover:bg-slate-50 transition-all flex items-center gap-3 hover:scale-105">
                预览样板 <PlayCircle size={22} />
              </button>
            </div>
          </motion.div>
        </section>

        {/* 1. 项目范围明确 */}
        <Section id="scope" title="产品设计讨论基础" icon={LayoutDashboard}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              title="黄小西" 
              description="作为核心试点项目，明确设计现状并进行深度 AI 赋能与样板打造。"
              imagePlaceholder="[黄小西项目现状与规划图]"
              badge="核心试点"
            />
            <Card 
              title="西城家园" 
              description="确立标准化的产品迭代路径，作为后续项目复用的设计基准。"
              imagePlaceholder="[西城家园迭代思路模型]"
              badge="设计基准"
              delay={0.1}
            />
            <Card 
              title="贵人家园" 
              description="深度对标西城家园，采用相同的迭代逻辑实现快速上线与体验优化。"
              imagePlaceholder="[贵人家园复用设计方案]"
              badge="快速迭代"
              delay={0.2}
            />
          </div>
        </Section>

        {/* 2. 汇报核心目标 */}
        <Section id="goal" title="汇报核心目标" icon={Target} delay={0.1}>
          <div className="bg-[#0F172A] rounded-[40px] p-10 md:p-20 text-white overflow-hidden relative border border-white/5">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                  推动云码通转型 <br />
                  <span className="text-indigo-400">输出统一产品思想</span>
                </h3>
                <div className="space-y-8">
                  {[
                    { text: "推广统一的产品架构与设计规范", icon: Share2 },
                    { text: "确立门户级 AI 超级应用的设计样板", icon: LayoutDashboard },
                    { text: "实现各项目间能力的沉淀与互通", icon: Network }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex gap-5 items-start"
                    >
                      <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center shrink-0 border border-indigo-500/30 text-indigo-400">
                        <item.icon size={20} />
                      </div>
                      <span className="text-xl text-slate-300 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 backdrop-blur-2xl rounded-[32px] p-4 border border-white/10 shadow-2xl">
                  <div className="aspect-[4/3] bg-slate-900/50 rounded-2xl flex items-center justify-center italic text-slate-500 border border-white/5 font-medium text-lg">
                    [AI 超级应用设计样板可视化展示]
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-600 rounded-full blur-2xl opacity-40 animate-pulse" />
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50" />
          </div>
        </Section>

        {/* 3. 统一架构内容 */}
        <Section id="arch" title="统一架构层级" icon={Layers} delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "组织级智能体", 
                desc: "门户或区域门户级的调度中心，负责跨企业、跨区域的任务协调与资源分发。", 
                icon: Network, 
                color: "bg-blue-600" 
              },
              { 
                title: "企业级服务智能体", 
                desc: "专注于垂直企业业务，提供高效、精准的业务处理与数字化服务支持。", 
                icon: Settings, 
                color: "bg-purple-600" 
              },
              { 
                title: "个人数字分身级智能体", 
                desc: "高度个性化的数字分身，连接个人名片与社交关系，实现智能化交互。", 
                icon: UserCircle, 
                color: "bg-pink-600" 
              }
            ].map((item, i) => (
              <div key={i} className="group relative pt-12">
                <div className={`absolute top-0 left-10 w-20 h-20 ${item.color} rounded-[24px] flex items-center justify-center text-white shadow-2xl shadow-indigo-100 z-10 group-hover:-translate-y-2 transition-transform duration-300`}>
                  <item.icon size={36} />
                </div>
                <div className="bg-white rounded-[32px] p-10 pt-16 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. 统一设计思想 */}
        <Section id="philosophy" title="统一设计思想" icon={Lightbulb} delay={0.3}>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-slate-900 rounded-[40px] p-10 text-white flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 text-indigo-400">
                  <PlayCircle size={28} />
                  <span className="font-black uppercase tracking-widest text-sm">首页展现方式</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">多模态视频交互 <br />激发用户欲望</h3>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed font-medium">
                  尽可能将功能级或企业级智能体以多模态形式呈现。通过高品质视频内容直接唤起用户的交互欲望，变被动展示为主动交互。
                </p>
              </div>
              <div className="relative z-10 aspect-video bg-slate-800 rounded-3xl border border-white/5 flex items-center justify-center italic text-slate-600 group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                [多模态首页视频交互动态演示]
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]" />
            </div>

            <div className="bg-indigo-50 rounded-[40px] p-10 flex flex-col justify-between border border-indigo-100">
              <div>
                <div className="flex items-center gap-3 mb-8 text-indigo-600">
                  <Zap size={28} />
                  <span className="font-black uppercase tracking-widest text-sm">需求预判</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 leading-tight">主动侦测需求 <br />构建服务闭环</h3>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed font-medium">
                  通过行程轨迹与用户习惯，提前侦测并预判用户下一个动作，在用户感知前完成服务闭环，打造极致的“无感服务”。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '行程自动侦测', icon: Rocket },
                  { label: 'AI 需求预测', icon: Target },
                  { label: '服务无缝触达', icon: Zap },
                  { label: '闭环评价反馈', icon: Share2 }
                ].map((step, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-indigo-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
                    <div className="text-indigo-600">
                      <step.icon size={24} />
                    </div>
                    <span className="font-bold text-slate-700 text-sm tracking-tight">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 5. 共通设计特点 */}
        <Section title="共通设计特点" icon={Settings} delay={0.4}>
          <div className="grid lg:grid-cols-2 gap-10">
            <FeatureItem 
              icon={UserCircle}
              title="全域数字分身入口"
              description="各项目统一设置个人数字分身创建入口。打通个人智能体与数字名片，形成统一的身份识别与交互逻辑，支持跨项目无缝连接。"
            />
            <FeatureItem 
              icon={ShoppingBag}
              title="供应链基础设施"
              description="构建通盘供应链底座。每个项目均内置自营商城与“黄晓曦精选”入口，实现供应链资源的高度集成与共享。"
            />
          </div>
        </Section>

        {/* 6. 统一技术与运营思路 */}
        <Section title="统一技术与运营思路" icon={Users} delay={0.5}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="group p-8 bg-white rounded-[32px] border-l-8 border-indigo-600 shadow-sm hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">统一底层能力</h4>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                  形成让用户“主动注册”的设计方案。个人与企业可随时随地发起注册并快速生成专属智能体，沉淀运营新数据与新能力。
                </p>
              </div>
              <div className="group p-8 bg-white rounded-[32px] border-l-8 border-violet-600 shadow-sm hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">双边运营模式</h4>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                  重构服务关系，将客户从“被服务对象”升级为“平台共建者”。实现从传统服务场景到平台用户的自然迁移。
                </p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-[48px] aspect-square flex items-center justify-center italic text-slate-400 border border-slate-200 shadow-inner overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
              <div className="relative z-10 text-center px-10">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                  <Network size={40} />
                </div>
                <p className="text-lg font-bold text-slate-500 underline underline-offset-8">技术与运营双驱动逻辑图</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 7. 未来应用设想 */}
        <Section title="未来应用设想" icon={Rocket} delay={0.6}>
          <div className="bg-gradient-to-br from-indigo-600 via-violet-700 to-indigo-900 rounded-[48px] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
                  日抛型应用生态 <br />
                  <span className="text-indigo-300">Day-Disposable Apps</span>
                </h3>
                <p className="text-xl md:text-2xl text-indigo-100/80 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
                  AI 使极速生成的“日抛型”应用成为可能。我们将重构销售、运营到开发的完整组织链路，建立全新的敏捷生态体系，让应用随需而生，随用随弃。
                </p>
              </motion.div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: '组织架构重构', desc: '打破传统部门边界' },
                  { label: 'AI 极速生成', desc: '分钟级应用交付' },
                  { label: '生态组织方法', desc: '标准化的敏捷链路' },
                  { label: '敏捷生态理念', desc: '海量日抛应用群' }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
                    <h4 className="text-xl font-black mb-2 group-hover:text-indigo-300 transition-colors">{item.label}</h4>
                    <p className="text-indigo-100/60 text-sm font-bold uppercase tracking-widest">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Background decorative circles */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
          </div>
        </Section>
      </main>

      <footer className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <Cpu size={24} />
              </div>
              <span className="font-black text-2xl tracking-tighter text-slate-900">PRODUCT REPORT</span>
            </div>
            <p className="text-slate-500 font-medium max-w-xs text-center md:text-left">
              致力于打造全球领先的门户级 AI 超级应用样板，重构数字时代的服务关系。
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-black text-xs uppercase tracking-widest text-slate-400">导航</span>
              <a href="#scope" className="font-bold text-slate-900 hover:text-indigo-600 transition-colors">项目范围</a>
              <a href="#goal" className="font-bold text-slate-900 hover:text-indigo-600 transition-colors">核心目标</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-black text-xs uppercase tracking-widest text-slate-400">资源</span>
              <a href="#" className="font-bold text-slate-900 hover:text-indigo-600 transition-colors">设计文档</a>
              <a href="#" className="font-bold text-slate-900 hover:text-indigo-600 transition-colors">架构图解</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 font-bold text-sm tracking-widest">© 2026 产品设计团队. POWERED BY AI TECHNOLOGY.</p>
          <div className="flex gap-8">
            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all cursor-pointer">
              <Share2 size={18} />
            </div>
            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all cursor-pointer">
              <Settings size={18} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

"use client";

import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowLeft, ArrowUp, BarChart3, Bot, Building2, CheckCircle2, FileText, Layers3, ShieldCheck, Sparkles, Trophy, Users, Workflow, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

// =================================================================
// 🧱 المكونات المساعدة
// =================================================================

// مكون عنوان القسم الموحد
function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-slate-950 lg:text-5xl"
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-lg leading-8 text-slate-600"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}

// مكون زر العودة للأعلى
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-amber-400 shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      whileHover={{ scale: 1.1, backgroundColor: '#020617' }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUp className="h-6 w-6" />
    </motion.button>
  );
}

// مكون عارض الفيديو المنبثق
function VideoModal({ isVisible, onClose, videoUrl }: { isVisible: boolean; onClose: () => void; videoUrl: string }) {
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            key="video-modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-2xl bg-slate-900 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 z-10 text-white/80 transition hover:text-white"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video overflow-hidden rounded-2xl">
              <iframe
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// مكون عداد الأرقام المتحرك
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
    return unsubscribe;
  }, [springValue]);

  return <span ref={ref} />;
}

// 🔽🔽 الإضافة الجديدة هنا 🔽🔽
// مكون حاسبة القيمة التفاعلية
function ROICalculator() {
  const [awards, setAwards] = useState(5);
  const [employees, setEmployees] = useState(10);

  // معادلات تقديرية بسيطة (يمكن تعديلها)
  const hoursSaved = awards * employees * 8; // 8 ساعات توفير لكل موظف لكل جائزة
  const qualityIncrease = Math.min(15 + (awards * 2) + (employees * 1.5), 75); // نسبة تحسين الجودة

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:p-12"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-950 lg:text-3xl">احسب قيمة التوفير بنفسك</h3>
        <p className="mt-3 text-lg text-slate-600">حرّك الأشرطة لترى كيف يمكن لمنصة التميز الذكي أن توفر الوقت والجهد في مؤسستك.</p>
      </div>

      {/* المدخلات */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="awards-slider" className="flex justify-between font-medium text-slate-800">
            <span>كم عدد الجوائز التي تشاركون بها سنوياً؟</span>
            <span className="font-bold text-amber-600">{awards}</span>
          </label>
          <input
            id="awards-slider"
            type="range"
            min="1"
            max="20"
            value={awards}
            onChange={(e) => setAwards(Number(e.target.value))}
            className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-amber-500"
          />
        </div>
        <div>
          <label htmlFor="employees-slider" className="flex justify-between font-medium text-slate-800">
            <span>كم عدد الموظفين في فريق العمل؟</span>
            <span className="font-bold text-amber-600">{employees}</span>
          </label>
          <input
            id="employees-slider"
            type="range"
            min="2"
            max="50"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-amber-500"
          />
        </div>
      </div>

      {/* المخرجات (النتائج) */}
      <div className="mt-10 grid gap-6 rounded-2xl bg-slate-900 p-8 sm:grid-cols-2">
        <div className="text-center">
          <p className="text-slate-400">إجمالي ساعات العمل الموفرة (تقديري)</p>
          <motion.p
            key={hoursSaved} // إعادة تشغيل الحركة عند تغير القيمة
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-4xl font-black text-white lg:text-5xl"
          >
            ~{hoursSaved.toLocaleString()}
          </motion.p>
          <p className="mt-1 text-slate-300">ساعة سنوياً</p>
        </div>
        <div className="text-center">
          <p className="text-slate-400">نسبة تحسين جودة الملفات (تقديري)</p>
          <motion.p
            key={qualityIncrease}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-4xl font-black text-white lg:text-5xl"
          >
            ~{Math.round(qualityIncrease)}%
          </motion.p>
          <p className="mt-1 text-slate-300">في الدورة الأولى</p>
        </div>
      </div>
    </motion.div>
  );
}


// =================================================================
// 📄 المكون الرئيسي للصفحة
// =================================================================

export default function UltimateLandingPage() {
  // بيانات الأقسام
  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "التحديات", href: "#challenges" },
    { name: "الاستخدامات", href: "#use-cases" },
    { name: "القدرات", href: "#features" },
    { name: "الفوائد", href: "#benefits" },
    { name: "طلب عرض", href: "#contact" },
  ];

  const workflowSteps = [
    { title: "إنشاء الجائزة", desc: "تحديد النوع، الفئات، المعايير، والجدول الزمني." },
    { title: "إدارة المشاركة", desc: "إضافة المرشحين وتوزيع الأدوار والمسؤوليات." },
    { title: "إعداد الملفات", desc: "كتابة الإجابات ورفع الأدلة وتنظيمها داخل النظام." },
    { title: "التقييم والتحكيم", desc: "توزيع المشاركات على المقيمين وإدارة عملية التقييم." },
    { title: "النتائج والتحسين", desc: "إصدار التقارير، تحليل الأداء، وبناء خطط التحسين." },
  ];

  const aiItems = [
    "تحليل جودة ملفات الترشح واقتراح تحسينات",
    "تحليل الأدلة وربطها بالمعايير واكتشاف نقاط الضعف",
    "مساعدة المقيمين في تلخيص الملفات وتحليل المحتوى",
    "تحليل الفجوات المؤسسية وإصدار تقارير تنفيذية ذكية",
    "اقتراح خطط تحسين وإجراءات قابلة للتنفيذ بعد النتائج",
  ];

  const benefits = [
    { title: "منصة واحدة موحدة", desc: "إدارة منظومات التميز والجوائز عبر بيئة رقمية موحدة بدل الملفات المتفرقة.", icon: Layers3 },
    { title: "تسريع العمل وتقليل الجهد", desc: "تقليل الجهد الإداري المرتبط بإعداد الملفات وتجميع الأدلة ومتابعة الفرق.", icon: Workflow },
    { title: "تحسين جودة المخرجات", desc: "رفع جودة المشاركات وجودة التقييم عبر أدوات مراجعة وتحليل ذكية.", icon: CheckCircle2 },
    { title: "قرار مبني على البيانات", desc: "تقارير ولوحات قيادة تدعم الإدارة العليا في فهم الأداء واتخاذ القرار.", icon: BarChart3 },
    { title: "ذكاء اصطناعي متقدم", desc: "قدرات AI عملية تساعد في الكتابة والتحليل والتقييم والتحسين.", icon: Bot },
    { title: "حوكمة وأمان عالي", desc: "إدارة صلاحيات، سجلات تدقيق، وضبط دخول يضمن خصوصية البيانات ونزاهة الجائزة.", icon: ShieldCheck },
  ];

  // حالات الصفحة
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/EbzbB5CX4i8?autoplay=1";

  const [form, setForm] = useState({ entity: '', name: '', email: '', message: '' }  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main dir="rtl" className="bg-white text-slate-900 font-sans">
      
      <BackToTopButton />
      <VideoModal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={videoUrl} />

      {/* =================== رأس الصفحة (Header) =================== */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 shadow-lg shadow-amber-500/20">
              <Sparkles className="h-5 w-5 text-slate-950" />
            </div>
            <div>
              <div className="text-base font-bold text-white">منصة التميز الذكي</div>
              <div className="text-xs text-slate-400">Smart Excellence Platform</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {item.name}
              </a>
            ))}
          </nav>

          <div>
            <a href="#contact" className="hidden lg:block rounded-2xl bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:scale-[1.02]">
              طلب عرض للنظام
            </a>
          </div>
        </div>
      </header>

      {/* =================== 1. قسم Hero مع لوحة القيادة التفاعلية =================== */}
      <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.24),_transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#1e293b_100%)] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute -left-16 bottom-10 h-80 w-80 rounded-full bg-amber-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* الجزء الأيمن: المحتوى النصي */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-amber-200">
                <Sparkles className="h-4 w-4" />
                منصة رقمية متكاملة لإدارة منظومات التميز
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-6xl">
                منصة التميز الذكي
                <span className="mt-4 block bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  لإدارة الجوائز الحكومية
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 lg:text-xl">
                منصة تساعد الجهات الحكومية على إدارة برامج التميز المؤسسي والجوائز المختلفة، وتنظيم ملفات الترشح والأدلة، وتنفيذ عمليات التقييم والتحكيم، عبر نظام واحد مدعوم بالذكاء الاصطناعي.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-amber-400 px-7 py-3.5 text-base font-bold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:scale-[1.02]">
                  طلب عرض للنظام
                </a>
                <button onClick={() => setIsModalOpen(true)} className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10">
                  مشاهدة الفيديو
                </button>
              </div>
            </motion.div>

            {/* الجزء الأيسر: محاكي لوحة القيادة التفاعلي */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.1 }} 
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-amber-300/20 via-yellow-500/10 to-transparent blur-2xl" />
              <div className="relative rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[28px] bg-slate-950 p-5 shadow-inner">
                  <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3">
                    <div>
                      <div className="text-sm text-slate-400">لوحة قيادة تنفيذية</div>
                      <div className="mt-1 text-xl font-bold text-white">منظومة التميز في منصة واحدة</div>
                    </div>
                    <div className="rounded-xl bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">مباشر</div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "الجوائز النشطة", value: 12 },
                      { label: "الجهات المشاركة", value: 36 },
                      { label: "الملفات الجاهزة", value: 24 },
                    ].map((item) => (
                      <motion.div 
                        key={item.label} 
                        className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
                        whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(250, 204, 21, 0.2)' }}
                      >
                        <div className="text-sm text-slate-400">{item.label}</div>
                        <div className="mt-3 text-3xl font-black text-white">
                          <AnimatedNumber value={item.value} />
                        </div>
                      </motion.div>
                    ))}
                    
                    <motion.div 
                      className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
                      whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(250, 204, 21, 0.2)' }}
                    >
                      <div className="text-sm text-slate-400">معدل الجاهزية</div>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="w-full overflow-hidden rounded-full bg-slate-700">
                          <motion.div 
                            className="h-2 rounded-full bg-amber-400"
                            initial={{ width: '0%' }}
                            animate={{ width: '78%' }}
                            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                          />
                        </div>
                        <div className="text-xl font-black text-white">78%</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================== 2. قسم التحديات =================== */}
      <section id="challenges" className="py-20 px-6 lg:px-8">
        <SectionTitle
          eyebrow="التحديات"
          title="التحديات في إدارة الجوائز المؤسسية"
          desc="إدارة ملفات الترشح يدوياً، صعوبة تنظيم الأدلة، تعدد الجوائز، ومحدودية التحليل، كلها تحديات تحلها منصة التميز الذكي."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "إدارة يدوية للملفات", desc: "اعتماد كبير على ملفات Word وExcel والبريد الإلكتروني.", icon: FileText },
            { title: "أدلة غير منظمة", desc: "صعوبة تصنيف الأدلة وربطها بالمعايير واستخدامها.", icon: Layers3 },
            { title: "تعدد الجوائز والمعايير", desc: "إدارة أكثر من جائزة داخلية وخارجية يرهق المؤسسة.", icon: Workflow },
            { title: "ضعف التحليل المؤسسي", desc: "محدودية التقارير وضعف القدرة على تحليل الفجوات.", icon: BarChart3 },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =================== 3. قسم الاستخدامات =================== */}
      <section id="use-cases" className="bg-slate-50 py-20 px-6 lg:px-8">
        <SectionTitle
          eyebrow="نماذج الاستخدام"
          title="يدعم النظام جميع أنواع الجوائز المؤسسية"
          desc="صُممت المنصة لتخدم برامج التميز الحكومية، الجوائز الداخلية، المشاركات الخارجية، والجوائز التي تنظمها الجهات."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
                { title: "برامج التميز الحكومية", desc: "مثل برامج التميز على مستوى الإمارة أو الحكومة.", icon: Building2 },
                { title: "الجوائز الداخلية", desc: "تكريم الإدارات والموظفين داخل المؤسسة.", icon: Users },
                { title: "الجوائز الخارجية", desc: "إدارة ملفات المشاركة في الجوائز الدولية.", icon: Trophy },
                { title: "الجوائز التي تنظمها الجهات", desc: "إدارة الجوائز المفتوحة للجهات الأخرى.", icon: Layers3 },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 text-amber-700 transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
        </div>
      </section>

      {/* =================== 4. قسم القدرات (كيف يعمل + AI) =================== */}
      <section id="features" className="py-20 px-6 lg:px-8">
        {/* --- جزء "كيف يعمل النظام" --- */}
        <div className="mb-24">
          <SectionTitle
            eyebrow="كيف يعمل النظام"
            title="إدارة دورة حياة الجائزة بالكامل"
            desc="يتيح النظام إدارة دورة حياة الجائزة بالكامل من الإنشاء وحتى النتائج وخطط التحسين، ضمن مسار واضح ومنظم يخدم جميع الأدوار."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 font-black text-amber-400">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-1 leading-7 text-slate-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- جزء "الذكاء الاصطناعي" --- */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-3 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
                ذكاء اصطناعي
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 lg:text-4xl">
                قدرات AI عملية لدعم التميز المؤسسي
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                تستخدم المنصة الذكاء الاصطناعي لتقديم رؤى قابلة للتنفيذ، وتحسين جودة المشاركات، وتسريع عمليات التقييم.
              </p>
              <div className="mt-8 space-y-4">
                {aiItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex h-full min-h-[300px] items-center justify-center rounded-3xl bg-slate-900 p-8 text-center shadow-2xl"
            >
              <div className="space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                  <Bot className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI-Powered Insights</h3>
                <p className="text-slate-300">
                  تحليل ذكي للملفات، دعم للتقييم، وتوصيات للتحسين المستمر.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================== 5. قسم الفوائد =================== */}
      <section id="benefits" className="bg-slate-50 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="القيمة المؤسسية"
            title="القيمة التي تقدمها المنصة للجهات الحكومية"
            desc="من خلال منصة التميز الذكي، تتحول منظومة التميز من جهود متفرقة إلى أصل رقمي متكامل يدعم الابتكار والتحسين المستمر واتخاذ القرار."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* 🔽🔽 الإضافة الجديدة هنا 🔽🔽 */}
          {/* دمج مكون حاسبة القيمة */}
          <ROICalculator />

        </div>
      </section>

      {/* =================== 6. قسم التواصل وطلب العرض =================== */}
      <section id="contact" className="bg-white py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl lg:p-10"
            >
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-amber-200">
                ملائم للقطاع الحكومي
              </div>
              <h3 className="mt-5 text-3xl font-bold lg:text-4xl">مصمم لبرامج التميز والجوائز المؤسسية الحكومية</h3>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                بُنيت منصة التميز الذكي لتخدم الواقع الفعلي للجهات الحكومية وبرامج التميز، سواء كانت الجهة مالكة للجائزة، أو مشاركة في جوائز خارجية، أو منظِّمة لجائزة تدعو الآخرين للمشاركة فيها.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[ "برامج التميز الحكومية", "الجوائز الداخلية", "الأوسمة الفردية", "التقييم والتحكيم", "لوحات القيادة", "خطط التحسين" ].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
            >
              <div className="mb-4 text-sm font-medium text-amber-700">طلب عرض للنظام</div>
              <h3 className="text-3xl font-bold text-slate-950">ابدأ في إدارة منظومة التميز بطريقة أكثر احترافية</h3>
              <p className="mt-4 leading-8 text-slate-600">
                اطلب عرضًا للنظام للتعرّف على كيفية تطبيق منصة التميز الذكي داخل مؤسستك.
              </p>

              <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input name="entity" value={form.entity} onChange={handleInputChange} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="اسم الجهة" />
                <input name="name" value={form.name} onChange={handleInputChange} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="الاسم" />
                <input name="email" value={form.email} onChange={handleInputChange} type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="البريد الإلكتروني" />
                <textarea name="message" value={form.message} onChange={handleInputChange} className="min-h-[100px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="نبذة مختصرة عن البرنامج الذي ترغب بإدارته" />
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:scale-[1.02]">
                  إرسال طلب العرض
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================== تذييل الصفحة (Footer) =================== */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© منصة التميز الذكي {new Date().getFullYear()} — جميع الحقوق محفوظة</div>
          <div className="flex flex-wrap gap-6">
            <a href="#home" className="transition hover:text-slate-900">الرئيسية</a>
            <a href="#features" className="transition hover:text-slate-900">القدرات</a>
            <a href="#contact" className="transition hover:text-slate-900">طلب عرض</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
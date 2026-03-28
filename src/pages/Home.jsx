import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  WhatsappLogo,
  Phone,
  MapPin,
  Star,
  Certificate,
  Sparkle,
  Drop,
  Scan,
  UserCircle,
  ArrowRight,
  List,
  X,
  InstagramLogo,
  Clock,
  ShieldCheck,
  GlobeHemisphereWest,
  GraduationCap,
  Heartbeat,
  Scissors,
} from '@phosphor-icons/react'

const WHATSAPP = '554832254031'
const PHONE = '(48) 3225-4031'
const ADDRESS = 'Av. Trompowsky, 291 - Salas 401-404, Medical Tower, Centro, Florian\u00f3polis - SC'
const CRM = 'CRM-SC 14.282 | RQE 10.934'

const whatsappLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

const TREATMENTS = [
  { icon: <Sparkle size={32} weight="duotone" />, title: 'Rejuvenescimento Facial', desc: 'Protocolos avan\u00e7ados com lasers Fotona, Liftera e tecnologias de \u00faltima gera\u00e7\u00e3o para resultados naturais.' },
  { icon: <Scan size={32} weight="duotone" />, title: 'Laser Picossegundo', desc: 'Remo\u00e7\u00e3o de manchas, melasma e tatuagens com precis\u00e3o e m\u00ednimo tempo de recupera\u00e7\u00e3o.' },
  { icon: <Drop size={32} weight="duotone" />, title: 'Tricologia Capilar', desc: 'Diagn\u00f3stico e tratamento especializado de doen\u00e7as do cabelo e couro cabeludo.' },
  { icon: <Heartbeat size={32} weight="duotone" />, title: 'Dermatologia Cl\u00ednica', desc: 'Cuidado completo da sa\u00fade da pele: acne, dermatite, psor\u00edase e preven\u00e7\u00e3o.' },
  { icon: <Scissors size={32} weight="duotone" />, title: 'Procedimentos Est\u00e9ticos', desc: 'Bioestimuladores, preenchimentos e toxina bot\u00ednica com t\u00e9cnica refinada.' },
  { icon: <ShieldCheck size={32} weight="duotone" />, title: 'Dermatoscopia Digital', desc: 'Acompanhamento de les\u00f5es de pele com tecnologia de alta precis\u00e3o diagn\u00f3stica.' },
]

const TESTIMONIALS = [
  { name: 'Juliana S.', text: 'A Dra. Rafaela \u00e9 excepcional! Fiz tratamento para melasma com laser e os resultados foram surpreendentes. Equipe maravilhosa.', stars: 5 },
  { name: 'Renata C.', text: 'Profissional atenciosa e extremamente competente. A cl\u00ednica \u00e9 linda e moderna. Me senti acolhida desde a primeira consulta.', stars: 5 },
  { name: 'Amanda K.', text: 'Minha pele nunca esteve t\u00e3o bem! A Dra. Rafaela entende exatamente o que a gente precisa. Super indico!', stars: 5 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>Dra. Rafaela Salvato | Dermatologista em Florian\u00f3polis</title>
      </Helmet>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '16px 0',
        background: scrolled ? 'rgba(26,20,24,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(183,110,121,0.15)' : 'none',
        transition: 'all 0.4s',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--rose)' }}>
            Dra. Rafaela <span style={{ fontWeight: 300, color: 'var(--text-muted)' }}>Salvato</span>
          </a>
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {NAV.map(n => (
              <a key={n.href} href={n.href} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                onMouseEnter={e => e.target.style.color = 'var(--rose)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{n.label}</a>
            ))}
            <a href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com a Dra. Rafaela Salvato.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--rose)', color: '#fff', padding: '10px 24px', borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600 }}>
              <WhatsappLogo size={18} weight="duotone" /> Agendar
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ display: 'none', background: 'none', border: 'none', color: 'var(--rose)', cursor: 'pointer' }}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden', background: 'rgba(26,20,24,0.95)', backdropFilter: 'blur(20px)' }}>
              <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {NAV.map(n => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} style={{ color: 'var(--text)', padding: '8px 0', borderBottom: '1px solid var(--dark-border)' }}>{n.label}</a>)}
                <a href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com a Dra. Rafaela Salvato.')} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--rose)', color: '#fff', padding: '12px 24px', borderRadius: '40px', fontWeight: 600, justifyContent: 'center' }}>
                  <WhatsappLogo size={18} weight="duotone" /> Agendar Consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative',
        background: 'linear-gradient(160deg, #1A1418 0%, #2a1f25 40%, #1A1418 100%)', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '15%', right: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(183,110,121,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2, paddingTop: '80px' }}>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
            style={{ color: 'var(--rose)', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '24px' }}>
            Dermatologia de Excel\u00eancia
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, marginBottom: '16px', lineHeight: 1.05 }}>
            Dra. Rafaela<br /><span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>Salvato</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 16px', fontWeight: 300 }}>
            Dermatologista em Florian\u00f3polis com 16 anos de experi\u00eancia. Especialista em
            rejuvenescimento facial, lasers de \u00faltima gera\u00e7\u00e3o e tricologia. Forma\u00e7\u00e3o
            internacional em mais de 30 pa\u00edses.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
            style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '40px' }}>{CRM}</motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com a Dra. Rafaela Salvato.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--rose)', color: '#fff', padding: '16px 36px', borderRadius: '40px', fontSize: '1rem', fontWeight: 600 }}>
              <WhatsappLogo size={22} weight="duotone" /> Agendar Consulta
            </a>
            <a href="#tratamentos" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid var(--rose)', color: 'var(--rose)', padding: '16px 36px', borderRadius: '40px', fontSize: '1rem' }}>
              Tratamentos <ArrowRight size={18} />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginTop: '48px', padding: '12px 24px', background: 'rgba(183,110,121,0.08)', border: '1px solid rgba(183,110,121,0.2)', borderRadius: '60px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} weight="fill" style={{ color: 'var(--rose)' }} />)}
            </div>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text)' }}>4.9</strong> &mdash; 300+ avalia\u00e7\u00f5es no Google</span>
          </motion.div>
        </div>
      </section>

      {/* CREDENCIAIS */}
      <section style={{ padding: '80px 0', background: 'var(--dark-card)', borderTop: '1px solid var(--dark-border)', borderBottom: '1px solid var(--dark-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { icon: <GraduationCap size={36} weight="duotone" />, title: 'UFSC', desc: 'Graduada pela Universidade Federal de Santa Catarina' },
              { icon: <GlobeHemisphereWest size={36} weight="duotone" />, title: '30+ Pa\u00edses', desc: 'Especializa\u00e7\u00f5es internacionais em 4 continentes' },
              { icon: <Certificate size={36} weight="duotone" />, title: 'Harvard', desc: 'Atualiza\u00e7\u00e3o em lasers e procedimentos est\u00e9ticos' },
              { icon: <Heartbeat size={36} weight="duotone" />, title: '10.000+', desc: 'Pacientes atendidos em dermatologia est\u00e9tica' },
            ].map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ padding: '24px' }}>
                <div style={{ color: 'var(--rose)', marginBottom: '12px' }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', marginBottom: '8px' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{
                aspectRatio: '3/4', background: 'linear-gradient(135deg, rgba(183,110,121,0.1), rgba(183,110,121,0.03))',
                borderRadius: '200px 200px 12px 12px', border: '1px solid var(--dark-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <UserCircle size={120} weight="duotone" style={{ color: 'var(--rose)', opacity: 0.3 }} />
                  <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '0.875rem' }}>Dra. Rafaela Salvato</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p style={{ color: 'var(--rose)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Sobre a Especialista</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '24px', lineHeight: 1.2 }}>
                Uma trajet\u00f3ria de <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>excel\u00eancia</span> internacional
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.8 }}>
                A Dra. Rafaela Salvato possui 16 anos de experi\u00eancia m\u00e9dica e uma trajet\u00f3ria internacional
                de excel\u00eancia. Graduada pela UFSC e especializada em S\u00e3o Paulo, possui t\u00edtulo de especialista
                pela <strong style={{ color: 'var(--text)' }}>Sociedade Brasileira de Dermatologia (SBD)</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.8 }}>
                Sua autoridade \u00e9 constru\u00edda por um curr\u00edculo global, com mais de 30 especializa\u00e7\u00f5es
                internacionais na Europa, Am\u00e9rica do Norte, \u00c1sia e Oceania. Destaque para atualiza\u00e7\u00e3o em
                lasers na <strong style={{ color: 'var(--text)' }}>Harvard Medical School (EUA)</strong> e fellowship em
                tricologia em <strong style={{ color: 'var(--text)' }}>Bolonha (It\u00e1lia)</strong>.
              </p>
              <a href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com a Dra. Rafaela Salvato.')} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--rose)', color: '#fff', padding: '14px 32px', borderRadius: '40px', fontWeight: 600 }}>
                <WhatsappLogo size={20} weight="duotone" /> Agendar Consulta
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRATAMENTOS */}
      <section id="tratamentos" style={{ padding: '120px 0', background: 'var(--dark-card)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: 'var(--rose)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Tratamentos</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
              Tecnologia e <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>Cuidado</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>Protocolos personalizados com equipamentos de \u00faltima gera\u00e7\u00e3o.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {TREATMENTS.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ padding: '36px', background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '12px', transition: 'border-color .3s, transform .3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(183,110,121,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ color: 'var(--rose)', marginBottom: '16px' }}>{t.icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', marginBottom: '12px' }}>{t.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href={whatsappLink('Ol\u00e1, gostaria de saber mais sobre os tratamentos da Dra. Rafaela.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--rose)', color: '#fff', padding: '16px 36px', borderRadius: '40px', fontWeight: 600 }}>
              <WhatsappLogo size={20} weight="duotone" /> Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" style={{ padding: '120px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: 'var(--rose)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Diferenciais</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Por que a <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>Dra. Rafaela</span>
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {[
              { icon: <GlobeHemisphereWest size={40} weight="duotone" />, title: 'Forma\u00e7\u00e3o Global', desc: 'Mais de 30 especializa\u00e7\u00f5es internacionais, incluindo Harvard Medical School e fellowship na It\u00e1lia.' },
              { icon: <Sparkle size={40} weight="duotone" />, title: 'Tecnologia de Ponta', desc: 'Equipamentos Liftera, Fotona e Picossegundo para resultados superiores com seguran\u00e7a.' },
              { icon: <Certificate size={40} weight="duotone" />, title: 'SBD Certificada', desc: 'T\u00edtulo de especialista pela Sociedade Brasileira de Dermatologia, refer\u00eancia nacional.' },
              { icon: <Heartbeat size={40} weight="duotone" />, title: 'Abordagem Individualizada', desc: 'Cada paciente recebe um protocolo personalizado, respeitando sua individualidade.' },
            ].map((d, i) => (
              <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                style={{ textAlign: 'center', padding: '32px' }}>
                <div style={{ color: 'var(--rose)', marginBottom: '20px' }}>{d.icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', marginBottom: '12px' }}>{d.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" style={{ padding: '120px 0', background: 'var(--dark-card)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: 'var(--rose)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Depoimentos</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>O que dizem nossos <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>pacientes</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                style={{ padding: '32px', background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                  {[...Array(t.stars)].map((_, j) => <Star key={j} size={16} weight="fill" style={{ color: 'var(--rose)' }} />)}
                </div>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '20px' }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(183,110,121,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <UserCircle size={24} weight="duotone" style={{ color: 'var(--rose)' }} />
                  </div>
                  <div><p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</p><p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Paciente</p></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href={whatsappLink('Ol\u00e1! Vi os depoimentos e gostaria de agendar.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--rose)', color: '#fff', padding: '16px 36px', borderRadius: '40px', fontWeight: 600 }}>
              <WhatsappLogo size={20} weight="duotone" /> Quero Agendar Tamb\u00e9m
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p style={{ color: 'var(--rose)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Contato</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '24px' }}>
                Agende sua <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>consulta</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.8 }}>
                Cuide da sa\u00fade da sua pele com quem entende. A primeira consulta \u00e9 o passo mais importante.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { icon: <MapPin size={24} weight="duotone" />, label: 'Endere\u00e7o', value: ADDRESS },
                  { icon: <Phone size={24} weight="duotone" />, label: 'Telefone', value: PHONE },
                  { icon: <Clock size={24} weight="duotone" />, label: 'Hor\u00e1rio', value: 'Seg \u00e0 Sex \u2014 8h \u00e0s 18h' },
                  { icon: <InstagramLogo size={24} weight="duotone" />, label: 'Instagram', value: '@rafaelasalvato.dermato' },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(183,110,121,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--rose)', flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.label}</p>
                      <p style={{ color: 'var(--text)', fontSize: '0.95rem' }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ padding: '48px', background: 'rgba(183,110,121,0.04)', border: '1px solid rgba(183,110,121,0.15)', borderRadius: '24px', textAlign: 'center' }}>
              <WhatsappLogo size={64} weight="duotone" style={{ color: 'var(--rose)', marginBottom: '24px' }} />
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '16px' }}>WhatsApp</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>Envie sua mensagem e receba atendimento personalizado.</p>
              <a href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta com a Dra. Rafaela Salvato.')} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--rose)', color: '#fff', padding: '16px 40px', borderRadius: '40px', fontWeight: 600, width: '100%', justifyContent: 'center' }}>
                <WhatsappLogo size={22} weight="duotone" /> Enviar Mensagem
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '48px 0 24px', borderTop: '1px solid var(--dark-border)', background: 'var(--dark-card)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', color: 'var(--rose)', fontSize: '1.1rem', marginBottom: '16px' }}>Dra. Rafaela Salvato</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Dermatologista em Florian\u00f3polis.<br />Membro da SBD.<br />{CRM}
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', marginBottom: '16px' }}>Links</h4>
              {NAV.map(n => <a key={n.href} href={n.href} style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px' }}>{n.label}</a>)}
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', marginBottom: '16px' }}>Contato</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{ADDRESS}<br />{PHONE}</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} Dra. Rafaela Salvato. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={whatsappLink('Ol\u00e1, gostaria de agendar uma consulta.')} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: 24, right: 24, width: 60, height: 60, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 999 }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
        <WhatsappLogo size={32} weight="fill" style={{ color: '#fff' }} />
      </a>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .about-grid, .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </>
  )
}

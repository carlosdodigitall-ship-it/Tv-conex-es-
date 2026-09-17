import { useEffect, useState } from 'react';
import { Check, ChevronDown, Play, ShieldCheck, Sparkles, Tv, Wifi, X, Zap } from 'lucide-react';

const faqs = [
  ['Como funciona?', 'Escolha a oferta apresentada pelo responsável pelo serviço e siga as instruções de contratação e acesso.'],
  ['Posso assistir pelo celular?', 'A página foi preparada para uma experiência moderna e responsiva. Os dispositivos compatíveis devem ser confirmados pelo responsável pelo serviço.'],
  ['Existe teste?', 'Se houver período de teste, o responsável pelo serviço poderá informar as condições e a duração antes da contratação.'],
  ['Onde coloco o vídeo?', 'O bloco de apresentação abaixo já está preparado para receber o vídeo do cliente.']
];

export default function App() {
  const [open, setOpen] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f=()=>setScrolled(scrollY>20); f(); addEventListener('scroll',f,{passive:true}); return()=>removeEventListener('scroll',f); }, []);

  return <div className="page">
    <header className={scrolled ? 'header scrolled':'header'}>
      <a className="logo" href="#inicio"><span><Tv/></span><div><b>TV Conexão</b><small>CANAIS • FILMES • SÉRIES</small></div></a>
      <nav><a href="#recursos">Experiência</a><a href="#video">Vídeo</a><a href="#avaliacoes">Avaliações</a><a href="#faq">Dúvidas</a></nav>
      <a className="topBtn" href="#oferta">Conhecer oferta →</a>
    </header>

    <main>
      <section id="inicio" className="hero">
        <div className="grid"/><div className="orb orb1"/><div className="orb orb2"/>
        <div className="container heroGrid">
          <div className="copy">
            <span className="eyebrow"><i/> UMA NOVA EXPERIÊNCIA DE ENTRETENIMENTO</span>
            <h1>Seu entretenimento.<br/><em>Do seu jeito.</em></h1>
            <p>Conheça a <strong>TV Conexão</strong>: uma apresentação moderna para quem busca canais, filmes e séries em uma experiência simples e elegante.</p>
            <div className="actions"><a className="primary" href="#video"><Play size={18} fill="currentColor"/> Ver apresentação</a><a className="ghost" href="#recursos">Conhecer a experiência ↓</a></div>
            <div className="trust"><span><ShieldCheck/> Experiência segura</span><span><Zap/> Acesso prático</span><span><Wifi/> Conectado</span></div>
          </div>
          <div className="visual"><div className="ring r1"/><div className="ring r2"/>
            <div className="screen"><div className="screenTop"><i/> TV CONEXÃO <small>● ● ●</small></div><div className="screenArt"><div><small>UMA EXPERIÊNCIA COMPLETA</small><b>CANAIS<br/>FILMES &amp; SÉRIES</b><span>Assista. Escolha. Aproveite.</span></div></div><div className="screenBottom">◀ <i/><i/><i/><i/> ▶</div></div>
            <div className="chip chip1"><Sparkles/> Experiência premium</div><div className="chip chip2"><b>✓</b><span><strong>TV Conexão</strong><small>Pronto para você</small></span></div>
          </div>
        </div>
        <div className="stats"><div><b>TV</b><small>Canais</small></div><div><b>+</b><small>Filmes</small></div><div><b>∞</b><small>Séries</small></div><div><b>24/7</b><small>Entretenimento</small></div></div>
      </section>

      <section id="recursos" className="section dark"><div className="container"><div className="intro"><span>POR QUE TV CONEXÃO?</span><h2>Uma experiência pensada para <em>maratonar.</em></h2><p>Apresente seu serviço com uma identidade premium, navegação fluida e informações claras para o cliente.</p></div><div className="cards">
        {[[Tv,'Canais','Uma experiência visual organizada para apresentar seus canais.'],[Sparkles,'Filmes','Destaque o catálogo e facilite a descoberta do conteúdo.'],[Zap,'Séries','Apresente suas séries de forma elegante e envolvente.'],[Wifi,'Experiência','Uma interface rápida, moderna e adaptada ao celular.']].map(([I,t,d]:any)=><article className="card" key={t}><div className="icon"><I/></div><h3>{t}</h3><p>{d}</p><span>Explorar →</span></article>)}
      </div></div></section>

      <section id="video" className="section videoSec"><div className="container"><div className="intro center"><span>ASSISTA À APRESENTAÇÃO</span><h2>Veja a <em>TV Conexão</em> em ação.</h2><p>Este espaço está pronto para receber o vídeo do seu cliente.</p></div><button className="video" onClick={()=>setModal(true)}><div className="play"><Play fill="currentColor" size={30}/></div><b>VÍDEO DE APRESENTAÇÃO</b><small>Substitua este espaço pelo vídeo do cliente</small><footer>TV CONEXÃO <i/> 00:00 <strong>HD</strong> ⛶</footer></button><div className="note"><Check/> Espaço preparado para YouTube, Vimeo ou vídeo incorporado.</div></div></section>

      <section id="avaliacoes" className="section dark"><div className="container"><div className="intro center"><span>PROVA SOCIAL</span><h2>Quem conhece, <em>recomenda.</em></h2><p>Área pronta para inserir depoimentos reais dos clientes do serviço.</p></div><div className="quotes">{['“Experiência muito prática e uma apresentação excelente.”','“Gostei da organização e da facilidade para encontrar o que procuro.”','“A experiência ficou muito mais profissional para apresentar aos clientes.”'].map((q,i)=><article className="quote" key={q}><div>★★★★★</div><p>{q}</p><span><b>{'AMR'[i]}</b><strong>Cliente verificado</strong><small>Depoimento demonstrativo</small></span></article>)}</div></div></section>

      <section className="section showcase"><div className="container showcaseGrid"><div><span className="eyebrow">FEITO PARA O SEU CLIENTE</span><h2>Bonito no computador.<br/><em>Impecável no celular.</em></h2><p>A página foi desenhada com foco em conversão, clareza e uma apresentação visual forte.</p><ul><li><Check/> Design responsivo</li><li><Check/> Efeitos e microanimações</li><li><Check/> Seções de confiança</li><li><Check/> CTA em pontos estratégicos</li></ul><a className="primary" href="#oferta">Quero conhecer →</a></div><div className="phone"><div className="phoneDevice"><small>TV CONEXÃO</small><h3>CANAIS<br/><em>FILMES &amp; SÉRIES</em></h3><div className="mini"><i/><i/><i/></div><div className="continue"><Play fill="currentColor" size={13}/> Continuar assistindo</div></div></div></div></section>

      <section id="oferta" className="section offer"><div className="container offerBox"><div><span className="eyebrow">PRONTO PARA COMEÇAR?</span><h2>Conheça a <em>TV Conexão.</em></h2><p>Fale com o responsável pelo serviço para consultar planos, condições, dispositivos compatíveis e disponibilidade.</p><div className="points"><span><Check/> Atendimento</span><span><Check/> Orientação de acesso</span><span><Check/> Informações claras</span></div></div><div className="offerCard"><label>OFERTA</label><h3>TV Conexão</h3><p>Canais • Filmes • Séries</p><div>Consulte condições<br/><b>com o responsável</b></div><button onClick={()=>setModal(true)}>Quero saber mais →</button><small>Valores e condições podem variar.</small></div></div></section>

      <section id="faq" className="section"><div className="container faq"><div className="intro"><span>FAQ</span><h2>Dúvidas <em>frequentes.</em></h2><p>Informações objetivas para deixar a decisão mais simples.</p></div><div className="faqList">{faqs.map(([q,a],i)=><div className="faqItem" key={q}><button onClick={()=>setOpen(open===i?null:i)}><span>{q}</span><ChevronDown className={open===i?'rot':''}/></button>{open===i&&<p>{a}</p>}</div>)}</div></div></section>
    </main>

    <footer className="footer"><div className="container"><div className="logo"><span><Tv/></span><div><b>TV Conexão</b><small>CANAIS • FILMES • SÉRIES</small></div></div><p>Uma experiência de entretenimento apresentada de forma simples e profissional.</p><small>© {new Date().getFullYear()} TV Conexão</small></div></footer>
    {modal&&<div className="modal" onClick={()=>setModal(false)}><div className="modalBox" onClick={e=>e.stopPropagation()}><button onClick={()=>setModal(false)}><X/></button><div className="modalIcon"><Play fill="currentColor"/></div><h3>Espaço reservado para o contato</h3><p>Quando você passar o vídeo e o canal de contato, este botão poderá ser ligado diretamente à apresentação ou ao WhatsApp.</p><a className="primary" href="#" onClick={()=>setModal(false)}>Entendi</a></div></div>}
  </div>
}

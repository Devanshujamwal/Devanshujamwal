import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react";
import { projects, type CaseNote } from "@/data/portfolio";
import { Architecture } from "@/components/portfolio/architecture";
import { assetPath } from "@/lib/portfolio-paths";

const sections=["Overview","Objective","Architecture","Technologies","Implementation","Troubleshooting","Validation","What I Learned","Screenshots / Evidence"];
const anchors=["overview","objective","architecture","technologies","implementation","troubleshooting","validation","what-i-learned","evidence"];
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const p=projects.find(p=>p.slug===slug);return{title:p?`${p.title} | Devanshu Jamwal`:"Case study not found",description:p?.summary,openGraph:{title:p?.title,description:p?.summary}};}
function Notes({items}:{items:CaseNote[]}){return <div className="case-notes">{items.map((item,i)=><article key={item.title}><span className="note-number">{String(i+1).padStart(2,"0")}</span><div><h3>{item.title}</h3><p>{item.text}</p>{item.placeholder&&<p className="placeholder">{item.placeholder}</p>}</div></article>)}</div>}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
  const{slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();const next=projects[(projects.indexOf(p)+1)%projects.length];
  return <main id="main-content" className="case-page"><div className="container"><Link href="/#projects" className="back-link"><ArrowLeft aria-hidden="true"/>All projects</Link><header className="case-header"><p className="eyebrow">Case study {p.number} <span>/</span> {p.category}</p><h1>{p.title}</h1><p className="case-summary">{p.summary}</p><div className="case-meta"><div><span>Context</span><p>{p.type}</p></div><div><span>Environment</span><p>{p.environment}</p></div><div><span>Contribution</span><p>{p.role}</p></div></div>{p.github&&<a className="text-link" href={p.github} target="_blank" rel="noreferrer">View source repository <ArrowUpRight aria-hidden="true"/></a>}</header>
    <div className="case-layout"><aside className="case-toc"><p className="eyebrow">In this case study</p><nav aria-label="Case study sections">{sections.map((s,i)=><a href={`#${anchors[i]}`} key={s}><span>{String(i+1).padStart(2,"0")}</span>{s}</a>)}</nav></aside><article className="case-content">
      <section id="overview"><p className="eyebrow">01 / Context</p><h2>Overview</h2><p>{p.overview}</p></section>
      <section id="objective"><p className="eyebrow">02 / Intent</p><h2>Objective</h2><p className="objective-text">{p.objective}</p></section>
      <section id="architecture"><p className="eyebrow">03 / System design</p><h2>Architecture</h2><figure><Architecture type={p.diagram}/><figcaption>{p.diagramCaption}</figcaption></figure></section>
      <section id="technologies"><p className="eyebrow">04 / Toolkit</p><h2>Technologies</h2><ul className="technology-list">{p.technologies.map(t=><li key={t}>{t}</li>)}</ul></section>
      <section id="implementation"><p className="eyebrow">05 / Build notes</p><h2>Implementation</h2><Notes items={p.implementation}/></section>
      <section id="troubleshooting"><p className="eyebrow">06 / Diagnostic reasoning</p><h2>Troubleshooting</h2><Notes items={p.troubleshooting}/></section>
      <section id="validation"><p className="eyebrow">07 / Verification</p><h2>Validation</h2><Notes items={p.validation}/></section>
      <section id="what-i-learned"><p className="eyebrow">08 / Reflection</p><h2>What I Learned</h2><Notes items={p.learned}/></section>
      <section id="evidence"><p className="eyebrow">09 / Supporting material</p><h2>Screenshots / Evidence</h2><div className="evidence-grid">{p.evidence.map(e=><article key={e.title} className="evidence-card">{e.image?<a href={assetPath(e.image)} target="_blank" rel="noreferrer"><img src={assetPath(e.image)} alt={e.alt||e.title} loading="lazy" width={720} height={480}/></a>:<div className={e.placeholder?"evidence-placeholder":"evidence-file"}>{e.placeholder?<><ImageIcon aria-hidden="true"/><span>{e.placeholder}</span></>:<FileText aria-hidden="true"/>}</div>}<div><h3>{e.title}</h3><p>{e.description}</p>{e.href&&<a href={e.href.startsWith("/")?assetPath(e.href):e.href} target="_blank" rel="noreferrer" className="text-link">View source <ArrowUpRight aria-hidden="true"/></a>}</div></article>)}</div></section>
    </article></div><Link className="next-project" href={`/projects/${next.slug}/`}><div><p className="eyebrow">Next case study</p><h2>{next.title}</h2></div><ArrowRight aria-hidden="true"/></Link>
  </div></main>;
}

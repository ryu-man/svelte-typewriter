import"./typingInterval.mjs";import{o as t,t as e}from"./writeEffect.mjs";export default async({elements:o},r)=>{o.forEach((t=>t.currentNode.textContent=""));for(const n of o)await t(n,r),e(n.currentNode);r.dispatch("done")};
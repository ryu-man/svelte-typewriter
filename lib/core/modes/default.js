import{writeEffect as t}from"../helpers/writeEffect.js";import{getLongestTextElement as e}from"../helpers/getLongestTextElement.js";export default async({elements:s},r)=>{for(const e of s)t(e,r);const{currentNode:o}=e(s);new MutationObserver((t=>{t.forEach((t=>{const e="attributes"===t.type,s=!t.target.classList.contains("typing");e&&s&&r.dispatch("done")}))})).observe(o,{attributes:!0,childList:!0,subtree:!0})};
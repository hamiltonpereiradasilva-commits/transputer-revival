import type { APIRoute } from 'astro';
export const GET: APIRoute = () => new Response('User-agent: *\nAllow: /\nSitemap: https://transputerrevival.org/sitemap.xml\n', {headers:{'Content-Type':'text/plain'}});

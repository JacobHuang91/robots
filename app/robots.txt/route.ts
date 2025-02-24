// app/robots.txt/route.ts

export function GET() {
  const robotsTxt = `
User-agent: *
Disallow: /private/
Allow: /public/
`;

  return new Response(robotsTxt.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
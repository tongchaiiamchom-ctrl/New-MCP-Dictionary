export default {
  async fetch(request, env, ctx) {
    // ดึง IP ที่ Cloudflare ส่งมาให้
    const clientIP = request.headers.get("CF-Connecting-IP") || "No-IP-Header";
    const allowedIP = "61.90.156.195";

    // ถ้าไม่ใช่ IP ที่กำหนด ให้แสดง IP ปัจจุบันของคุณโชว์ขึ้นมาบนจอเพื่อเอามาเช็ค
    if (clientIP !== allowedIP) {
      return new Response(`Access Denied! Your current IP is: ${clientIP}`, { 
        status: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    return env.ASSETS.fetch(request);
  }
};

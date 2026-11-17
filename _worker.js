export default {
  async fetch(request, env, ctx) {
    const clientIP = request.headers.get("CF-Connecting-IP");
    const allowedIP = "61.90.156.195";

    // ถ้าไม่ใช่ IP ที่กำหนด ให้ดีดออกด้วยสถานะ 403 ทันที
    if (clientIP !== allowedIP) {
      return new Response("Access Denied", { 
        status: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    // ถ้า IP ตรง ให้โหลดหน้าเว็บตามปกติ
    return env.ASSETS.fetch(request);
  }
};

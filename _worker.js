
export default {
  async fetch(request, env) {
    const allowedIP = "61.90.156.195";
    const clientIP = request.headers.get("CF-Connecting-IP");

    if (clientIP !== allowedIP) {
      return new Response("403 Forbidden - Access Denied", {
        status: 403,
        headers: {
          "Content-Type": "text/plain; charset=UTF-8"
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};

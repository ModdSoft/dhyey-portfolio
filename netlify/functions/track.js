exports.handler = async (event) => {
  const timestamp = new Date().toISOString();
  const payload =
    event.httpMethod === "POST" && event.body
      ? JSON.parse(event.body)
      : {};

  const info = {
    ts: timestamp,
    path: payload.path || "unknown",
    referrer: payload.referrer || "unknown",
    ua: payload.ua || event.headers["user-agent"] || "unknown",
    ip: event.headers["x-nf-client-connection-ip"] || "unknown",
  };

  // Logged to Netlify function logs; view via Netlify dashboard -> Functions -> track
  console.log("pageview", info);

  return {
    statusCode: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  };
};

import shopify from "../config/shopify.js";

export async function verifySession(req, res, next) {
  try {
    const shop = req.query.shop || req.headers["x-shopify-shop-domain"];
    if (!shop) {
      return res.status(400).send("Missing shop parameter");
    }

    const sessionId = `${shop}_offline`; // or however you save sessions (offline or online)
    const session = await shopify.config.sessionStorage.loadSession(sessionId);

    if (!session) {
      return res.status(401).send("Unauthorized: Session not found");
    }

    res.locals.shopify = { session };
    next();

    next();
  } catch (error) {
    console.error("Session verification error:", error);
    res.status(500).send("Internal Server Error");
  }
}

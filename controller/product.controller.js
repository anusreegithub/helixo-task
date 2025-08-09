import { fetchProducts } from "../utils/shopifyService.js";

export const getProductData = async (req, res) => {
  const shopDomain = process.env.SHOPIFY_SHOP;
  const accessToken = process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN;

  if (!shopDomain || !accessToken) {
    return res.status(500).json({ error: "Missing Shopify credentials." });
  }

  try {
    const products = await fetchProducts(shopDomain, accessToken, 50);
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: err.message || "Failed to fetch products" });
  }
};

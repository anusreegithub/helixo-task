import fetch from "node-fetch";

export async function fetchProducts(shopDomain, accessToken, limit = 50) {
  const query = `
    {
      products(first: ${limit}) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;

  const response = await fetch(
    `https://${shopDomain}/admin/api/2025-07/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: JSON.stringify({ query }),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Shopify API error: ${response.status} – ${JSON.stringify(data)}`
    );
  }
  if (data.errors) {
    throw new Error(`Shopify GraphQL error: ${JSON.stringify(data.errors)}`);
  }

  return data.data.products.edges.map(({ node }) => ({
    id: node.id,
    numericId: node.id.split("/").pop(),
    title: node.title,
  }));
}

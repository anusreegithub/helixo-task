📌 Countdown Timer Shopify App - Backend
📖 Overview
This backend service supports the Countdown Timer Shopify app, allowing merchants to create, manage, and serve countdown timers for promotions on their product pages. It is built using Node.js and Express, with MongoDB for data storage, and integrates with Shopify via Shopify CLI 3.0 and the Theme App Extension.

🚀 Features
RESTful API to create, update, retrieve, and delete countdown timers

Scheduled timers with automatic activation and deactivation based on start/end date-time

Multi-store support: each Shopify store’s timer data is stored and isolated in MongoDB

Secure authentication using OAuth with Shopify API

Server-side logic handling timer management and integration with Shopify

Support for urgency notifications when timer is near expiry (e.g., last 5 minutes)

Integration with Shopify ScriptTag API or Theme App Extension for injecting frontend widget

backend/

│── config/                  # Configuration files (Shopify OAuth, DB, environment)
│   ├── dbConnect.js           # MongoDB connection setup
│
│── controllers/              # API route handlers (timers, auth)
│   ├── product.controller.js    # View products
│   ├── timer.controller.js  # CRUD for countdown timers
│
│── models/                   # MongoDB schemas/models for stores & timers
│   ├── timer.js              # Countdown timer schema
│
│── routes/                   # API route definitions
│   ├── product.routes.js        #  products routes
│   ├── timers.routes.js      # Countdown timer routes

│── utils/                    # Helper functions
│   ├── shopifyService.js     # Shopify OAuth 
│
│── index.js                 # HTTP server start point
│── package.json              # Node dependencies
│── README.md                 # Project documentation
│── .env.example              # Environment variable sample


⚙️ Installation & Setup
1️⃣ Clone the repository
```
git clone https://github.com/anusreegithub/helixo-task-Backend.git
```
cd helixo-task-Backend
```
npm install
```

3️⃣ Configure environment variables
Copy .env.example to .env and update values:


PORT=5000
MONGODB_URI=mongodb://localhost:27017/countdown-timers
SHOPIFY_API_KEY=your_shopify_api_key
SHOPIFY_API_SECRET=your_shopify_api_secret
SHOPIFY_SCOPES=write_files, read_files, write_custom_pixels, read_custom_pixels, write_orders, read_orders, write_content, read_content, write_products, read_products
SHOPIFY_APP_URL=https://yourappurl.com
SHOPIFY_ADMIN_API_ACCESS_TOKEN=your_session_secret

```
npm run dev 
```


📡 API Endpoints (Examples)
```
Method	Endpoint	Description
POST	/timer Create a new countdown timer
GET	/timer/store	Get all countdown timer
GET	/timer/:storeDomain/:productId	Get timer by productId
PATCH	/timer/:id/deactivate	Deactivate Timer
```

GET /products  Get all products


# IMovies — Movie Ticket Booking Made Simple

A responsive MERN-style movie booking project scaffold with a React/Vite frontend and Express/MongoDB API. The UI includes movie browsing, search/filtering, seat selection, booking confirmation, and local demo persistence so you can demonstrate the flow before connecting MongoDB.

## Requirements
- Node.js 18+ (20+ recommended)
- npm
- MongoDB Atlas connection string (optional for demo mode; required for persistent API data)

## Run locally
1. Extract the ZIP and open this folder in VS Code.
2. In the project root terminal run `npm install`.
3. Run `npm run install:all`.
4. Copy `server/.env.example` to `server/.env` and set `MONGODB_URI` if available.
5. Run `npm run dev`.
6. Frontend: http://localhost:5173 | API: http://localhost:5000/api/health

The browser demo uses localStorage for bookings, so the core flow works without MongoDB. The Express API connects to MongoDB when `MONGODB_URI` is configured.

## GitHub
Create a public repository named `imovies`, then run:
```bash
git init
git add .
git commit -m "Build IMovies movie booking app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/imovies.git
git push -u origin main
```

## Deployment fast path
- Frontend: import the repository into Vercel, set Root Directory to `client`, Build Command `npm run build`, Output Directory `dist`.
- Backend: deploy the `server` directory to Render as a Node web service, Build Command `npm install`, Start Command `npm start`, and set `MONGODB_URI`, `JWT_SECRET`, and `CLIENT_ORIGIN` environment variables.
- Set `VITE_API_URL` in Vercel to your deployed backend URL plus `/api` if you want the UI to call the API. The booking demo still works locally in the browser without this variable.

## Scope note
This is a fast-start academic demo, not a production payment system. It does not charge real money. Before production, add database-backed seat locking/transactions, payment-provider integration, email notifications, stronger validation, tests, and deployment-specific security configuration.

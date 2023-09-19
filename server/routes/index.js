import authRoute from './authRoute.js'
import bookRoute from './bookRoute.js'

const base='/api/v1'

export function setupRoutes(app) {
  app.use(`${base}`, bookRoute);
  app.use(`${base}`,authRoute);
}
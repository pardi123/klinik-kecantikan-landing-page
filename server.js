// Custom production entry point.
//
// `react-router build` compiles the SSR handler to build/server/index.js,
// but that file only *exports* a request handler — it never calls
// `.listen()` on its own (normally `react-router-serve` wraps it and does
// that). Hostinger's Node.js hosting runs whatever "Entry file" you give it
// directly with `node`, with no room for a separate serve step, so this
// file does what `react-router-serve` would: mount the build as an Express
// app and actually start listening.

import { createRequestHandler } from '@react-router/express'
import compression from 'compression'
import express from 'express'

const app = express()

// Hostinger (like most hosts) terminates TLS at a reverse proxy in front of
// this app. Without trusting it, Express reconstructs req.protocol as
// "http" (the internal connection), which makes React Router's single-fetch
// CSRF check see a mismatch between that and the browser's "Origin: https://…"
// header on every action POST — it rejects those with a generic 400 "Bad
// Request" (thrown from throwIfPotentialCSRFAttack).
app.set('trust proxy', 1)

app.use(compression())
app.disable('x-powered-by')

app.use('/assets', express.static('build/client/assets', { immutable: true, maxAge: '1y' }))
app.use(express.static('build/client', { maxAge: '1h' }))

// Hostinger's launcher (lsnode.js) loads this file with require(), which
// refuses ESM modules that use top-level await — so hand React Router a
// function that imports the build lazily instead of awaiting it here.
app.all(
  '*',
  createRequestHandler({
    build: () => import('./build/server/index.js'),
  })
)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.info(`klinik listening on port ${port}`)
})

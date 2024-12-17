# Der Bergbote

## Beschreibung

## Team

## Technologien

## Entwicklung

### Prerequisites

Docker
Node.js
npm

### Setup

Provide a `.env` file with the following content:

```bash
AUTH_SECRET=<RANDOM_STRING>
ARTICLES_SERVICE_TOKEN=<RANDOM_STRING>
ENTRA_CLIENT_ID=<CLIENT_ID>
ENTRA_CLIENT_SECRET=<CLIENT_SECRET>
ENTRA_ISSUER=https://login.microsoftonline.com/<TENANT_ID>/v2.0
```

`AUTH_SECRET` must be at least 32 characters long.
`ENTRA_`-values can be generated from an Azure App registration.

```bash
npm run dev-init
```

### Database Development

To push changes to the schema:

```bash
npx drizzle-kit push
```

## Template - Todo

-   [ ] [Reader mode Parsing](https://github.com/mozilla/readability)
-   [ ] Authentication
-   [ ] Authorization
-   [ ] Demo-Data
-   [ ] Examples
    -   [ ] Page
    -   [ ] React Component
    -   [ ] API Endpoint
    -   [ ] Data fetch from API endpoint

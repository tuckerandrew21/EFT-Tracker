# Local Environment Best Practices

## Environment Configuration

1. **Use `.env.local` for local overrides** - Never commit this file
   - Set `NEXTAUTH_URL` to match your dev server (e.g., `http://localhost:3000`)
   - Use `DATABASE_URL_DEVELOP` for local development database
   - Keep secrets and API keys here, not in `.env`

2. **Port flexibility** - The dev server will auto-assign an available port
   - If 3000 is taken, Next.js will suggest 3001, 3002, etc.
   - Update `NEXTAUTH_URL` in `.env.local` to match the actual port
   - Example: `NEXTAUTH_URL=http://localhost:3001`

3. **Clean restarts** - When switching branches or after pulling changes:

   ```bash
   rm -rf .next && npx prisma generate && npm run dev
   ```

4. **Database branches** - Use separate databases for different workflows:
   - Local feature work: Personal dev database or local PostgreSQL
   - Testing develop branch: `DATABASE_URL_DEVELOP` (Neon development branch)
   - Never use production database locally

## After Pushing Code

Always clear the Next.js cache after pushing code to ensure changes are visible:

```bash
rm -rf .next && npx prisma generate
```

Then restart the dev server:

```bash
npm run dev
```

# Database Schema Changes

After modifying `prisma/schema.prisma`, sync to remote database:

```bash
npx prisma db push
```

This applies your schema changes to the connected database and generates the Prisma client.

**Note:** Always review your schema changes carefully before pushing, as some changes may result in data loss in development databases.

# Privacy and Security Spec

## Data Invariants
- Anyone can create a `SampleRequest`.
- No one can read/update/delete `SampleRequest` documents except an administrator.
- An administrator is a user whose `{uid}` exists in the `/admins/{userId}` collection.
- Administrators cannot update the `createdAt` property of a `SampleRequest`.

## The "Dirty Dozen" Payloads
1. Create a request with missing required fields (e.g. no `companyName`). -> DENY
2. Create a request with an invalid status (e.g. `status: 'completed'`). -> DENY
3. Create a request where `createdAt` is not `request.time`. -> DENY
4. Create a request with additional unsupported keys (e.g. `isAdmin: true`). -> DENY
5. Read requests as an unauthenticated user. -> DENY
6. Read requests as an authenticated user who is NOT in the `admins` collection. -> DENY
7. Read requests as an authenticated user who IS in the `admins` collection. -> ALLOW
8. Update a request as an unauthenticated user. -> DENY
9. Update a request as a non-admin. -> DENY
10. Update a request as an admin modifying `createdAt`. -> DENY
11. Update a request as an admin with an invalid status. -> DENY
12. Delete a request as a non-admin. -> DENY

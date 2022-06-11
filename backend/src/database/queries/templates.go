package queries

const UpsertUserQuery = `INSERT INTO public.users(login, created_at, role, status, data)
VALUES ($1, $2, $3, $4, $5)
ON CONFLICT (login) 
DO 
UPDATE SET  data = $5,
			role = $3,
			status = $4;`

const UpsertProductQuery = `INSERT INTO products (creator_id, created_at, status, data) 
VALUES (:creator_id, Now(), :status, :data)
`

const GetUserQuery = `SELECT * FROM users WHERE login = $1 LIMIT 1`

const GetUsersQuery = `SELECT * from users`

const GetUserProductsQuery = `SELECT * from products where creator_id = $1`

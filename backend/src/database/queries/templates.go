package queries

const UpsertUserQuery = `INSERT INTO public.users(login, created_at, role, status, data)
VALUES ($1, $2, $3, $4, $5)
ON CONFLICT (login) 
DO 
UPDATE SET  data = $5,
			role = $3,
			status = $4;`

const UpsertProductQuery = `INSERT INTO products (creator_id, created_at, status, okpd2, data) 
VALUES (:creator_id, Now(), :status, :okpd2, :data)
`

const GetUserQuery = `SELECT * FROM users WHERE login = $1 LIMIT 1`

const GetUsersQuery = `SELECT * from users`

const GetUsersToMailQuery = `SELECT * from users WHERE status = 'APPROVED'`

const GetUserProductsQuery = `SELECT * from products where creator_id = $1`

const GetAllProductsQuery = `SELECT * from products`

const UpdateUserStatusQuery = `UPDATE users SET status = $3, data = jsonb_set(data, '{reject_reason}', to_jsonb($2::text), true) WHERE login = $1`

const GetOdkp2Query = `SELECT * from okpd2`

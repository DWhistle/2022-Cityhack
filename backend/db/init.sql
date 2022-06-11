SELECT 'CREATE DATABASE gitnews'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'gitnews');\gexec

CREATE TYPE user_status AS ENUM ('NEW', 'MAILED', 'JOINED');

CREATE TYPE user_role AS ENUM ('ADMIN', 'ENTERPRISE', 'VIEWER');

CREATE TYPE product_status AS ENUM ('NEW', 'MODERATION', 'DELETED');

CREATE TABLE users (
	id SERIAL UNIQUE,
    login varchar(40) UNIQUE,
	created_at TIMESTAMP,
	role user_role NOT NULL,
	status user_status NOT NULL,
	data JSONB NOT NULL,
	PRIMARY KEY (login, id)
);

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	creator_id int,
	created_at TIMESTAMP,
	status product_status NOT NULL,
	data JSONB NOT NULL,
	CONSTRAINT fk_uid 
	FOREIGN KEY(creator_id) REFERENCES users(id)
);
-- CREATE TABLE enterprises (
--     id bigint PRIMARY KEY,
-- 	created_at TIMESTAMP,
-- 	creator_id bigint,
-- 	status enterprise_status,
-- 	data JSONB NOT NULL
-- );


INSERT INTO users(login, created_at, role, status, data) values
	('admin', now(), 'ADMIN', 'NEW', '{"email": "apopov@mail.ru", "phone": "+79345674223", "url": "http://apopov.ru", "inn": "213", "description": "Продавец", "logo": "http://123.jpg"}'),
	('enterprise', now(), 'ENTERPRISE', 'NEW', '{"email": "apopov@mail.ru", "phone": "+79345674223", "url": "http://apopov.ru"}'),
	('viewer', now(), 'VIEWER', 'NEW', '{"email": "apopov@mail.ru", "phone": "+79345674223", "url": "http://apopov.ru"}');

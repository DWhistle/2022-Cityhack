SELECT 'CREATE DATABASE gitnews'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'gitnews');\gexec

CREATE TYPE enterprise_status AS ENUM ('NEW', 'MAILED', 'UPDATED', 'DELETED');

CREATE TYPE user_role AS ENUM ('ADMIN', 'ENTERPRISE', 'VIEWER');

CREATE TABLE users (
	id SERIAL,
    login varchar(40),
	created_at TIMESTAMP,
	role user_role,
	data JSONB NOT NULL,
	PRIMARY KEY (login, id)
);

CREATE TABLE enterprises (
    id bigint PRIMARY KEY,
	created_at TIMESTAMP,
	creator_id bigint,
	status enterprise_status,
	data JSONB NOT NULL
);


INSERT INTO users(login, created_at, role, data) values
	('admin', now(), 'ADMIN', '{}'),
	('enterprise', now(), 'ENTERPRISE', '{}'),
	('viewer', now(), 'VIEWER', '{}');

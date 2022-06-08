SELECT 'CREATE DATABASE gitnews'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'gitnews');\gexec


CREATE TABLE domains(
    id bigint PRIMARY KEY,
	created_at TIMESTAMP,
	creator_id bigint,
	status varchar(100) NOT NULL,
	data JSONB NOT NULL
);
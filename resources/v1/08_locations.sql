CREATE TABLE locations (
	id              INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	name 		VARCHAR(255) NOT NULL,
	latitude 	REAL NOT NULL,
	longitude 	REAL NOT NULL,
	created_at      DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at      DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,
	UNIQUE (latitude, longitude)
);

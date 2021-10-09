const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = function (env) {
	return {
		PORT: 8055,
		DB_CLIENT: 'pg',
		DB_HOST: config.host,
		DB_PORT: config.port,
        DB_DATABASE=config.database,
        DB_USER= config.user,
        DB_PASSWORD=config.password,
        DB_SSL="false",
        RATE_LIMITER_ENABLED="false",
        RATE_LIMITER_STORE="memory",
        RATE_LIMITER_POINTS=25,
        RATE_LIMITER_DURATION=1,
        STORAGE_LOCATIONS="local",
        STORAGE_LOCAL_DRIVER="local",
        STORAGE_LOCAL_ROOT="./uploads",
        KEY="b77f0f14-7e9b-4829-b320-d3f5e50002e9",
        SECRET="ZFtW547zCv3eTo-47VKJl79FrnzdixJo",
        ACCESS_TOKEN_TTL="15m",
        REFRESH_TOKEN_TTL="7d",
        REFRESH_TOKEN_COOKIE_SECURE=false,
        REFRESH_TOKEN_COOKIE_SAME_SITE="lax",
        REFRESH_TOKEN_COOKIE_NAME="directus_refresh_token",
	};
};
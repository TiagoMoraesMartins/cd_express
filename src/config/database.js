require('dotenv').config();

module.exports = {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: true,
      undescored: true,
      undescoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    timezone: '-03:00',
}

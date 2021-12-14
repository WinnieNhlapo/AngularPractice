module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8075859396f9930082bf783ada9b8810'),
  },
});

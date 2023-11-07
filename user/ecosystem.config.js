module.exports = {
  apps: [
    {
      name: "test-node",
      script: "npx",
      automation: false,
      args: "run shivkumarscript",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

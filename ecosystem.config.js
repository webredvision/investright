module.exports = {
  apps: [
    {
      name: "investright", // Name of the application
      script: "node_modules/next/dist/bin/next", // Using npm to run the app
      args: "start", // Start command for the app
      cwd: "/rvdata/rvapps/investright", // The project directory (path to your Next.js app)
      env: {
        NODE_ENV: "production", // Default environment variables
        PORT: 3080,
      },
      env_file: "/rvdata/rvtools/env-files/investright.env", // Path to the custom .env file
    },
  ],
};

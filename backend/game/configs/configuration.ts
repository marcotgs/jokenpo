export default (): { port: number } => ({
  port: parseInt(process.env.PORT, 10) || 3000,
});

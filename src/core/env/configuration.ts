export const appConfig = {
    port: parseInt(process.env.PORT, 10) || 3050,
    pg: {
        url: process.env.PG_URL || 'postgresql://postgres:postgres@127.0.0.1:5432/nestjs-multi-tenant',
    }
};
export default () => ({
    ...appConfig,
});
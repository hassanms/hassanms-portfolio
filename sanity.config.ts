import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: 'luj5ez6g',
    dataset: 'production',
    title: 'HassanMS Portfolio',
    apiVersion: '2023-06-13',
    basePath: "/admin",
    plugins: [deskTool()],
});

export default config;
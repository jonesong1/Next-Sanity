import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "vzmzm5l3",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-04-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;
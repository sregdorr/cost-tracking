import { schema } from 'normalizr';


const clientSchema = new schema.Entity('clients', {}, {
  idAttribute: client => client.id,
});

const projectSchema = new schema.Entity('projects', {
  client: clientSchema,
}, {
  idAttribute: project => project.id,
});

export const Schemas = {
  CLIENT: clientSchema,
  CLIENTS: [clientSchema],
  PROJECT: projectSchema,
  PROJECTS: [projectSchema],
};
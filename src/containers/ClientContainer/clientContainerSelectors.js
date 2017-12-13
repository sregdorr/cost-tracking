import { createSelector } from 'reselect';


const clientDomain = state => state.entities.clients;
const clientPaginationDomain = state => state.pagination.clients;

export const clientContainerSelect = createSelector(
  [clientDomain, clientPaginationDomain],
  (clients, paginate) => {
    const ids = paginate.visibleClients ? paginate.visibleClients.ids : [];
    return {
      visibleClients: ids.map(id => clients[id])
    };
  }
);
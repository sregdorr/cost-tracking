import { createSelector } from 'reselect';


const clientDomain = state => state.entities.clients;
const clientPaginationDomain = state => state.pagination.clients;
const clientContainerDomain = state => state.clientContainer;

export const clientContainerSelect = createSelector(
  [clientDomain, clientPaginationDomain, clientContainerDomain],
  (clients, paginate, clientContainer) => {
    const ids = paginate.visibleClients ? paginate.visibleClients.ids : [];
    return {
      visibleClients: ids.map(id => clients[id]),
      selectedClient: clientContainer.selectedClient,
    };
  }
);
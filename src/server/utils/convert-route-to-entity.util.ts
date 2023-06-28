const mapping: Record<string, string> = {
  inventories: 'inventory',
  orders: 'order',
  organizations: 'organization',
  services: 'service',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

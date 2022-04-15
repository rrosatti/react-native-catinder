import type routeNames from '../../routes/index';

export type NavigationParams = {
  [routeNames.Breeds]?: never;
  [routeNames.Favorites]?: never;
  [routeNames.Profile]: never;
};

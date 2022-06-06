import {routes} from "../routes";
import {findIndex} from "lodash";

export const canAccess = (currentLocation, userRole) => {
  let index = findIndex(routes, (route) => route.path === currentLocation.pathname);
  if (index === -1) return true;
  return routes[index].role.includes(userRole);
}

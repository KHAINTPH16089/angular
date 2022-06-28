// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiUrl = 'http://localhost:3001/api';

export const environment = {
  production: false,

  product: `${apiUrl}/products`,
  category: `${apiUrl}/category`,
  signup: `${apiUrl}/signup`,
  signin: `${apiUrl}/signin`,
  user: `${apiUrl}/user`,
  order: `${apiUrl}/order`,
  orderDetail: `${apiUrl}/orderDetail`,
  upload: `${apiUrl}/upload`,
  status: `${apiUrl}/status`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

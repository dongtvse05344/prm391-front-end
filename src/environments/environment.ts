// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: '',
  token: 'weoz-token',
  username: 'weoz-username',
  roles: 'weoz-role',
  fullname: 'weoz-fullname',
  apiLink: {
    endPoint: 'http://dongtv.hisoft.vn',
    // endPoint: 'https://vianh-cosmetic-store-be.herokuapp.com',
    basic: {
      product: {
        main: '/api/Product/Admin/',
        byId: '/api/Product/Admin/'
      }
    },
    extra: {
      auth: {
        main: '/api/Auth',
        token: '/api/Auth/token',
        info: '/api/Auth/info',
      },
    }
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

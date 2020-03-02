// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: '',
  token: 'VIANH_TOKEN',
  roles: 'VIANH_ROLES',
  accessRole: [
    {
      path: '/api/Auth',
      roles: [],
    },
    {
      path: '/api/Product',
      roles: ['Admin', 'Manager', 'Staff'],
    },
    {
      path: '/api/Category',
      roles: ['Admin', 'Manager', 'Staff'],
    },
    {
      path: '/api/Image',
      roles: ['Admin', 'Manager', 'Staff'],
    },
    {
      path: '/api/Supplier',
      roles: ['Admin', 'Manager', 'Staff'],
    },
    {
      path: '/api/User',
      roles: ['Admin', 'Manager', 'Staff'],
    },
    {
      path: '/api/Role',
      roles: ['Admin', 'Manager', 'Staff'],
    },
    {
      path: '/api/UserRole',
      roles: ['Admin', 'Manager', 'Staff'],
    },
    {
      path: '/api/WorkFlow',
      roles: ['Admin', 'Manager', 'Staff'],
    },
    {
      path: '/api/WorkFlowInstance',
      roles: ['Admin', 'Manager', 'Staff'],
    },
    {
      path: '/api/WorkFlowConnection',
      roles: ['Admin', 'Manager', 'Staff'],
    },
  ],
  apiLink: {
    endPoint: 'http://localhost:2407',
    basic: {
      auth: {
        main: '/api/Auth',
        token: '/api/Auth/Token',
      },
      category: {
        getById: '/api/Category/:id',
        list: '/api/Category/List',
        main: '/api/Category',
      },
      image: {
        getById: '/api/Image/:id',
        list: '/api/Image/List',
        main: '/api/Image',
      },
      product: {
        getById: '/api/Product/:id',
        list: '/api/Product/List',
        main: '/api/Product',
      },
      role: {
        getById: '/api/Role/:id',
        list: '/api/Role/List',
        main: '/api/Role',
      },
      supplier: {
        getById: '/api/Supplier/:id',
        list: '/api/Supplier/List',
        main: '/api/Supplier',
      },
      user: {
        getById: '/api/User/:id',
        list: '/api/User/List',
        main: '/api/User',
      },
      userRole: {
        getById: '/api/UserRole/:id',
        list: '/api/UserRole/List',
        main: '/api/UserRole',
      },
    },
    bpmn: {
      workFlow: {
        getById: '/api/WorkFlow/:id',
        list: '/api/WorkFlow/List',
        main: '/api/WorkFlow',
      },
      workFlowConnection: {
        getById: '/api/WorkFlowConnection/:id',
        list: '/api/WorkFlowConnection/List',
        main: '/api/WorkFlowConnection',
      },
      workFlowInstance: {
        getById: '/api/WorkFlowInstance/:id',
        list: '/api/WorkFlowInstance/List',
        main: '/api/WorkFlowInstance',
      },
    },
  },
  router: {
    app: {
      default: '',
      core: 'core',
      auth: 'auth',
    },
    core: {
      default: '',
      dashboard: 'dashboard',
      category: 'category',
      form: 'form',
      workflow: 'work-flow',
      security: 'security',
      account: 'account'
    },
    auth: {
      default: '',
      login: 'login'
    },
  },
  wf_intance: {
    listTypeAndSubType: [
      {
        type: 'Activity',
        subtype: [
          { value: 'Task', label: 'Task' },
          { value: 'Sub-process', label: 'Sub-process' },
          { value: 'Transaction', label: 'Transaction' },
          { value: 'Call Activity', label: 'Call Activity' }
        ]
      },
      {
        type: 'Event',
        subtype: [
          { value: 'StartEvent', label: 'Start Event' },
          { value: 'Intermediate event', label: 'Intermediate event' },
          { value: 'EndEvent', label: 'End Event' }
        ]
      },
      {
        type: 'Gateway',
        subtype: [
          { value: 'Exclusive', label: 'Exclusive' },
          { value: 'Event Based', label: 'Event Based' },
          { value: 'Parallel', label: 'Parallel' },
          { value: 'Inclusive', label: 'Inclusive' },
          { value: 'Exclusive Event Based', label: 'Exclusive Event Based' },
          { value: 'Complex', label: 'Complex' },
          { value: 'Parallel Event Based', label: 'Parallel Event Based' }]
      }
    ],
    listType: [
      { value: 'Activity', label: 'Activity' },
      { value: 'Event', label: 'Event' },
      { value: 'Gateway', label: 'Gateway' }
    ]
  },
  form_config: {
    types: [
      { label: 'textbox', value: 'fa-text-height' },
      { label: 'multiselect', value: 'fa-caret-square-down' },
      { label: 'label', value: 'fa-tag' },
      { label: 'textarea', value: 'fa-vector-square' },
      { label: 'select', value: 'fa-caret-square-down' },
      { label: 'autocomplete', value: 'fa-caret-square-down' },
      { label: 'button', value: 'fa-plus-square' },
      { label: 'checkbox', value: 'fa-check-square' },
      { label: 'date', value: 'fa-calendar-check' },
      { label: 'time', value: 'fa-clock' },
      { label: 'fileupload', value: 'fa-file-alt' },
      { label: 'imageupload', value: 'fa-file-alt' },
      { label: 'imageselect', value: 'fa-file-alt' },
      { label: 'areaselect', value: 'fa-chart-area' },
      // { label: "editor", value: "fa-edit" },
      // { label: "radiogroup", value: "fa-check-circle" },
    ],
    subType: [
      { label: 'text', value: 'text' },
      { label: 'password', value: 'password' },
      { label: 'email', value: 'email' },
      { label: 'number', value: 'number' }
    ],
    sizes: [
      { label: 'col-12', value: 12 },
      { label: 'col-9', value: 9 },
      { label: 'col-8', value: 8 },
      { label: 'col-6', value: 6 },
      { label: 'col-4', value: 4 },
      { label: 'col-3', value: 3 },
      { label: 'col-2', value: 2 }
    ],
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export * from './store';
export * as actionCreators from './action-creators';
export * from './reducers';


//how this page is working is that it is exporting everything from the store, action-creators, and reducers files. This is so that we can import everything from this file in the components and we don't have to import everything from the store, action-creators, and reducers files separately. This is a way to clean up the imports in the components.
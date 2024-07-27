# Konnichiwa React




# Parcel
 - Dev Build
 - Local Server
 - HMR = Hot Module Replacement
 - File Watching Algorithm - written in C++
 - Caching - Faster builds
 - Image optimization
 - Minification
 - Bundling
 - Compress 
 - Consisting hashing
 - Code Splitting
 - Differential Bundling - support older browsers
 - Diagnostic
 - Error Handling
 - HTTPS
 - Tree Shaking - remove unused code
 - Different build for dev and prod




## TO get the browsers list  
- [https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z).


## To make dev ready app
 - npx bundle index.html

## To make prod ready app
 - npx bundle build index.html (need to remove main from package.json If conflict occurs)

## To make app works for all browser
 - use browserslist in package.json file.


 # Jargons
 - Config driven Ui


 # Export
  - There are two types of exports 
  - Default Export/Import
        export default Component
        import Component from path;
  - Named Export/Import
    export const Component;
    import {Component} from path;


# Reach Hooks
 Normal JS utility functions
 - useState() - Superpowerful State Variable in react
 - useEffect()


 # 2 types of routing in web apps
 - Client Side Routing
 - Server Side Routing
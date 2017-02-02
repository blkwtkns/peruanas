#TODOS:

* add footer (done, UX needs work)
* add social media stuff (added to footer)
* add form page (done, css needs work)
* structure backend for serving files and template server-side rendering process (testing done, connected with AWS api gateway, lambda, and dynamoDB; server-side/isomorphic stuff needs to be done)
* setup aws lambda structure for dynamoDB connection for forms(testing done, needs to be fleshed out more, and production policies and users constructed)
* correctly path pics with galleries/slideshows(construct logic and directory paths for pictures; convert to png/svg if possible)
* redux/redux-saga mosted fused, state is flowing through components correctly (also checkout react-router-redux)
* get input from Erbelia
* not rehydrating correctly on refresh (now it is, but verrry strange, might have been a module issue)
* state not altering correctly: update - window state is undefined, and is being passed in configure store function, so it takes precedence over return of reducers. Codingbox isomorphic example has good solution to this.


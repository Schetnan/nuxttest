# Bug reproduction


1. npm install
2. npm run build2 ( build using ‘node’ preset )
3. npm run start:express
4. In browser, go to:  <http://localhost:8082/fcp/tst>


Notice a blank page and the following error in the console:

`Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.`





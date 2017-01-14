ECHO .
ECHO now start building......
CALL npm install
CALL bower install
CALL typings install
CALL "./node_modules/.bin/tsc"
CALL grunt
ECHO .
ECHO done

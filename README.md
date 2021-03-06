# cordova-angular6-starter-kit
This is the simle starter for writing cordova app using angular 6

# Required:
1. Installed Angular CLI **(You should know how to use it)**.
2. Installed Cordova CLI **(You should know how to use it)**.
3. Installed **everything** *(depends from what you need)* for building android, ios or windows app.

# USE:
1. Clone all data from this repo.
2. Go to project's folder.
3. Type in Terminal:
	- *npm install* => install dependencies;
	- *ng serve --open* => for test if the angular project is run (in browser console you will see error net::ERR_ABORTED 404 (Not Found) because of <script src='cordova.js'></script>, **that is normal!!!**);
4. If angular project is running stop serving the angular app (press in terminal **Ctrl+C**).
5. Create *www*, *plugins* and *platforms* folders if they are not in project folder yet.
6. Add cordova platform (android, ios or windows).
7. If *./plugins* folder is empty, add plugin **cordova-plugin-device**.
8. Type in terminal __*ng build*__ => For build Angular app in *./www* folder.
9. After Angular project builded (see it in *./www* folder), type in terminal **_cordova build [platform]_**. For android platform *cordova build android*.

# Folder Structure:
1. Look for Cordova project structure.
2. Look for Angular project structure.
3. After 1. and 2. you can understand structure of this starter kit.

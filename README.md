# npm-host-multisites
A sample NodeJS/Bouncy configuration that allows NodeJS to host multiple, unique (static) websites.
All the websites will be accessible via the standard port 80, but each site internally served via it's own unique port number.


# SETUP


## Navigate to the root of all your sites...

``` cd /Sites ``` 

(You'll probably want rename this repository's "npm-host-multisites" directory to "Sites", or any other name of your liking.)


### Install supporting Modules 

``` [sudo] npm install forever -g ```

``` [sudo] npm install forever-monitor -g ```

``` [sudo] npm install ``` (Bouncy... )


### Create the sites you wish to host

``` \testsite1\..       ex. "Welcome to TestSite1" ``` 

``` \testsite2\..       ex. "Welcome to TestSite2" ``` 


### Inside of each site directory, create a separate NodeJS file

``` \testsite1\app_testsite1.js ``` 

``` \testsite2\app_testsite2.js ``` 

(These sample sites already contain two NodeJS .js files.)


### Be sure that each app_*.js file contains the correct port number (ex. 9001 & 9002 in these sample sites)

(These NodeJS .js file are already configured with port numbers 9001 & 9002.)


### Note that this sample script launches 3 NodeJS apps... 
[sudo] node app_testsite1.js (port 9001) 

[sudo] node app_testsite2.js (port 9002) 

[sudo] node app.js(standard web port 80)


### Launch the Sites via the included simple script

``` cd /Sites ``` 

``` [sudo] ./go ``` 


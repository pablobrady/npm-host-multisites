# Recreating this repository yourself:


### Install BOUNCY, for sharing our proxy hosts later... 
``` npm install -g bouncy ```


## Navigate to the root of all your sites...
``` cd /Sites ``` 


## Create the test sites

``` npm install -g express-generator@4``` 

``` express testsite1 && cd testsite1``` 
``` npm install``` 

``` cd ..``` 

``` express testsite2 && cd testsite2``` 
``` npm install``` 


## Make both sites appear uniquely, in the browser.

##### Edit the site title string, the following line, ex. "TestSite1":
``` nano testsite1/routes/index.js ``` 

##### And edit the title of the second site, ex. "TestSite2":
``` nano testsite2/routes/index.js ``` 



## Set the individual site Port numbers
##### Modify the testsite1's PORT 800x, to port number of your preference.
``` sudo nano testsite1/bin/www ```

##### And modify the testsite2's PORT 800x, to a different but unique port number.
``` sudo nano testsite2/bin/www ```


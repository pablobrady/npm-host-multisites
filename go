cd testsite1
forever start app_testsite1.js &

cd ../testsite2
forever start app_testsite2.js &

cd ..
forever start app.js





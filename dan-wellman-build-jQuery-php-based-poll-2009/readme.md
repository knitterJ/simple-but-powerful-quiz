Properly set up project, yields the following end result and increment correctly counted votes in the database.

<img src="/repository/images/correct-result.png" alt="Thanks for voting results page" title="Thanks for voting results page">

In order to achieve it:
-Place all the files from this folder in the new folder, in the special directory with Apache connectivity permissions (preferably with the shorter name). In Ubuntu it's /var/www/
-By default, Ubuntu does not allow access through the web browser to any file apart of those located in /var/www (I'm sorry, but I don't know whether you might encounter the same issue on Windows OS).
-This way you should be able to access the whole project binded by hitting localhost/020 (where landing page is index.html and 020 is how I called my new project folder)

Please note, that .php file had to be improved as many of the commands to manipulate MySQL database was deprecated.

Full tutorial might be still accessable via:
http://web.archive.org/web/20141221050813/https://code.tutsplus.com/tutorials/build-an-advanced-poll-jquery-plugin--net-3029

#Using Node Version #8.9.4

If using Amazon Lightsail node to run this app, remember to edit this file:
vim /opt/bitnami/apache2/conf/bitnami/bitnami.conf

and add ProxyPass and ProxyPassReverse like these:

<VirtualHost default:80>

ProxyPass / http://0.0.0.0:8080/
ProxyPassReverse / http://0.0.0.0:8080/

......

Than restart apache with these command:

sudo /opt/bitnami/ctlscript.sh restart








Also to keep the "express.js" file running forever, remember to use forever: https://expressjs.com/en/advanced/pm.html#forever
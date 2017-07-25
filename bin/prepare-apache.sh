echo "Prepare to deploy your project."

echo "Configure the local timezone to UTC."
# https://askubuntu.com/questions/3375/how-to-change-time-zone-settings-from-the-command-line
timedatectl set-timezone UTC

echo "Install and configure Apache to serve a Python mod_wsgi application."
# https://www.linode.com/docs/web-servers/apache/apache-web-server-on-ubuntu-14-04
# http://flask.pocoo.org/docs/0.12/deploying/mod_wsgi/
yes 'y' | apt-get install apache2 apache2-doc apache2-utils libapache2-mod-wsgi

echo "Setup Apache virtual host:"
# a2dissite 000-default.conf
# Setup hosts file
VHOST=`cat <<EOF
Listen 80
Listen 9000

NameVirtualHost *:80
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/public_html
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

NameVirtualHost *:9000
<VirtualHost *:9000>
    ServerName www.example.com
    WSGIDaemonProcess api user=vagrant group=vagrant threads=5
    WSGIScriptAlias / /var/www/api/start.wsgi

    SetEnv SECRET_KEY $(printenv BOOKMARKS_SECRET_KEY)
    SetEnv FACEBOOK_ID $(printenv BOOKMARKS_FACEBOOK_ID)
    SetEnv FACEBOOK_SECRET $(printenv BOOKMARKS_FACEBOOK_SECRET)

    <Directory /var/www/api>
        WSGIProcessGroup api
        WSGIApplicationGroup %{GLOBAL}
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
EOF`
echo "${VHOST}" > /etc/apache2/sites-enabled/000-default


echo "Setup Bookmarks virtual host:"
mkdir -p /var/www/bookmarks/public_html
mkdir -p /var/www/bookmarks/api
mkdir /var/www/bookmarks/logs

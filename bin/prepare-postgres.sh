echo "Installing PostgreSQL:"
yes 'y' | apt-get install postgresql python-psycopg2

echo "Creating user Vagrant"
su postgres -c 'createuser -dRS vagrant'

echo "Creating database"
su vagrant -c 'createdb'
echo "Starting install-dependencies.sh:"
apt-get -qqy update
yes 'y' | apt-get -qqy upgrade
apt-get -qqy install python
apt-get -qqy install pylint
apt-get -qqy install python-flask python-sqlalchemy
apt-get -qqy install python-pip
apt-get -qqy install openssl
apt-get -qqy install libffi-dev
apt-get -qqy install python-dev
apt-get -qqy install libssl-dev

echo "Starting requirements.txt install:"
pip install -r /vagrant/requirements.txt
pip install certifi pyOpenSSL ndg-httpsclient pyasn1
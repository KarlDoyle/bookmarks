# Secure server.
echo "Starting secure-server.sh"
# echo
# echo "Updating all currently installed packages:"
# # Update all currently installed packages.
# apt-get update
# yes 'y' | apt-get upgrade

echo "Changing the SSH port from 22 to 2200."
# sed 's/#Port 22/Port 2200/' /etc/ssh/sshd_config
# reload ssh

echo "Configure the Uncomplicated Firewall (UFW)"
echo "Only allow incoming connections for SSH (2200), HTTP (80), and NTP (123)"
ufw default allow outgoing
ufw default deny incoming
# ufw allow 2200
ufw allow 22
ufw allow 80
ufw allow 123
# yes 'y' | ufw enable

# Create a temporary backdoor.
# ufw allow from {your-ip-address}

# ssh
# ssh {username}@{your-server-ip-address} -i {rsa identity file} -p {your-new-port-number}
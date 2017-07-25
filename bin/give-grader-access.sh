echo "Give grader access."

echo "Create a new user account named grader."
adduser --disabled-password --gecos "" grader

echo "Give grader the permission to sudo."
usermod -aG sudo grader

echo "Create an SSH key pair for grader using the ssh-keygen tool."
# https://stackoverflow.com/questions/3659602/bash-script-for-generating-ssh-keys
yes "y" | ssh-keygen -t rsa -N "" -f graderKey
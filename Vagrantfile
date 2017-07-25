# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

$profile = '/home/vagrant/.profile'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty32"
  config.vm.synced_folder "frontend/build/", "/var/www/public_html"
  config.vm.synced_folder "backend/", "/var/www/api"
  # config.vm.provision "file", source: "conf/bookmarks.conf", destination: "/"
  # config.vm.provision "shell", :run => "always", inline: "echo \"export SECRET_KEY=#{$S1}\" >> #{$profile}"
  # config.vm.provision "shell", :run => "always", inline: "echo \"export FACEBOOK_ID=#{$S2}\" >> #{$profile}"
  # config.vm.provision "shell", :run => "always", inline: "echo \"export FACEBOOK_SECRET=#{$S3}\" >> #{$profile}"
  config.vm.provision "shell", :run => "always", path: "bin/install-dependencies.sh"
  config.vm.provision "shell", :run => "always", path: "bin/prepare-apache.sh"
  config.vm.provision "shell", :run => "always", path: "bin/prepare-postgres.sh"
  config.vm.provision "shell", :run => "always", path: "bin/give-grader-access.sh"
  config.vm.provision "shell", :run => "always", path: "bin/secure-server.sh"
  config.vm.network "private_network", ip: "172.30.1.5"
  config.vm.network "forwarded_port", guest: 9000, host: 9000
  config.vm.network "forwarded_port", guest: 80, host: 80
  # config.ssh.port = 2200
end

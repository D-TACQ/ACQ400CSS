## Running cs-studio via docker

How to install
### Linux 
1) First install docker:
	[generic-installation-steps](https://docs.docker.com/desktop/install/linux-install/#generic-installation-steps)
	
	Install through distro package manager do not use snap

2) Clone repo:
	```
	git clone https://github.com/sambelltacq/ACQ400CSS
	```
3) Create workspaces :
	```
	cd ACQ400CSS/docker/
	./workspaces/new_workspace.sh acq2106_123
	```
4) Run cs-studio
	```
	./cs-studio_docker.sh
	```
	First time setup might take a while

### Windows

TODO
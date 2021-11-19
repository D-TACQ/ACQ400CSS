# ACQ400CSS
CSS opi project for ACQ400 series digitizers

## CSS: Control System Studio : 
### GUI environment for EPICS
http://controlsystemstudio.org/

### Ready to run images from here: 
#### http://download.controlsystemstudio.org/release/4.5/
#### http://download.controlsystemstudio.org/release/4.5/cs-studio-4.5.9-linux.gtk.x86_64.tar.gz
#### http://download.controlsystemstudio.org/release/4.5/cs-studio-4.5.9-macosx.cocoa.x86_64.zip
#### http://download.controlsystemstudio.org/release/4.5/cs-studio-4.5.9-win32.win32.x86_64.zip

##### version 4.5.9 uses Java 1.8 ("Java8"). 

###### OpenJDK install for Windows users: https://adoptopenjdk.net/

###### On Ubuntu: 

```
sudo apt-get install openjdk-8-jdk 

# If you want to maintain a newer version of Java, cs-studio/eclipse looks for a local java version first

# assuming cs-studio is unpacked at ~/cs-studio..
ln -s /usr/lib/jvm/java-8-openjdk-amd64/jre ~/cs-studio/
# use alternatives to select global jre version
https://askubuntu.com/questions/740757/switch-between-multiple-java-versions
```



**IMPORTANT**
<pre>
Change Preferences Please:
EDIT | Preferences | CSS-Core | Data Sources | Channel Access :
    set Max Array Size to 500000
</pre>
### Quickstart Guide: Basic principle applies for all Units Under Test UUT
* Example is for UUT acq1001_190, please substitute the name of your own UUT.

 1. In a well configured system (dhcp, working broadcast route), cs-studio will locate the UUT on the network automatically.
 
 2. Failing that, you'll need to know the default IP address of the UUT
 
  * UUT NAME, MAC address and default IP-address are printed on the delivery sheet and on faceplate on rear of the box.

#### [Quickstart](https://github.com/D-TACQ/ACQ400CSS/blob/master/acq1001_acq430_quickstart.pdf)
#### [TransientQuickstart](https://github.com/D-TACQ/ACQ400CSS/releases/download/R20210414/acq2106-acq424-transient_capture_quickstart.pdf)
#### [View8 View multiple UUTS](https://github.com/D-TACQ/ACQ400CSS/releases/download/R211119/view8-setup.pdf)



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

<pre>
Change Preferences Please:
EDIT | Preferences | CSS-Core | Data Sources | Channel Access :
    set Max Array Size to 500000
</pre>
### Quickstart Guide: Basic principle applies for all Units Under Test UUT
#### Example is for UUT acq1001_190, please substitute the name of your own UUT (printed on the label).
#### In a well configured system (dhcp, working broadcast route), cs-studio will locate the UUT on the network automatically.
#### Failing that, you'll need to know the default IP address of the UUT
##### UUT MAC address and default IP-address are printed on the label on the box.

#### https://github.com/D-TACQ/ACQ400CSS/blob/master/acq1001_acq430_quickstart.pdf

### OpenJDK install for Windows users:
#### https://adoptopenjdk.net/
OpenJDK 8 is the required version for CS Studio.

importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

/* 
 * Inputs
  * loc://channels [8]
  * UUT channels [8]
  * load_awg
  */

for (var ii = 0; ii < 8; ++ii){
	pvArray[ii+8].setValue(pvArray[ii]);
}

pvArray[16].setValue(1);

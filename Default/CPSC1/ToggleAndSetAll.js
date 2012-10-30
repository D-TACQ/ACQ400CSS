importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.eclipse.jface.dialogs);

// pvArray [local-togger, ....pv's ...., trigger ]
var flagName = "firstRun";
//Avoid running this script if the script is triggered during opi startup.
if(widgetController.getExternalObject(flagName) == null){
	widgetController.setExternalObject(flagName, false);	
}else{
	var xx = PVUtil.getLong(pvArray[0]);
	
	if (xx != 0){
		xx = 0;
	}else{
		xx = 1;
	}
	
	for (var ii = 0; ii < pvArray.length-1; ++ii){
		pvArray[ii].setValue(xx);
	}
}
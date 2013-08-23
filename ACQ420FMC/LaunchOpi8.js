importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

function pad(ii, nchars)
{
	if (nchars == 2 && ii < 10){
		return "0"+ii;
	}else{
		return ""+ii;
	}
}


var flagName = "firstRun";
//Avoid running this script if the script is triggered during opi startup.
if(widgetController.getExternalObject(flagName) == null){
	widgetController.setExternalObject(flagName, false);	
}else{
	var macroInput = DataUtil.createMacrosInput(true);
	macroInput.put("UUT", PVUtil.getString(pvArray[0]));	
	// not easy to get strings "0", "1" etc to stay as strings...	
	macroInput.put("SITE", "0" ); // PVUtil.getString(pvArray[1]));
	//Open an OPI with the new Macro Input.
       var opi = widget.getPropertyValue("name") + ".opi";
       
	var ch = PVUtil.getLong(pvArray[2]);
	for (var nc = 1; nc <= 8; ++nc, ++ch){
		macroInput.put("CH"+pad(nc, 2), pad(ch, 2));
		//macroInput.put("CH"+pad(nc, 2), pad(ch%4 + 1, 2)); 		
	}
	       
	ScriptUtil.openOPI(widgetController,  opi, 0, macroInput);

}

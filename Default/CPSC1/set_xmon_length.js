importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var len = PVUtil.getLong(pvArray[0]);

if (len > 0){
	var xygraph = display.getWidget("XY Graph");
	var ii;
	for (ii = 0; ii < 8; ++ii){
		var key = "trace_"+ii+"_buffer_size";
		xygraph.setPropertyValue(key, len);
	}
}



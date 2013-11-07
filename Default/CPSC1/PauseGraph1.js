importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var pause = display.getVar("pause");
var xygraph=display.getWidget("XY Graph");
if(pause == null || pause==false){
	display.setVar("pause", true);
	display.setVar("trace_0_y_pv", xygraph.getPropertyValue("trace_0_y_pv"));
	// xygraph.setPropertyValue("trace_0_y_pv", "");
	xygraph.getPV("trace_0_y_pv").stop();
	widget.setPropertyValue("text", "Resume");
}else{
	display.setVar("pause", false);
	xygraph.setPropertyValue("trace_0_y_pv", display.getVar("trace_0_y_pv"));
	xygraph.getPV("trace_0_y_pv").start();
       widget.setPropertyValue("text", "Pause");
}


importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var sitelist = PVUtil.getString(pvArray[0]);
var dx = PVUtil.getLong(pvArray[1]);

var site=dx-1;

var sites = sitelist.split(",");
var isVisible = false;
if (site < sites.length){
	isVisible = sites[site].search("480") >-1? true: false;
}

widget.setPropertyValue("visible", isVisible);

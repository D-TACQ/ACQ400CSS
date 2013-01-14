importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.eclipse.jface.dialogs);


var sine_fun = function(x, N) {
	return Math.sin( x/N*2*Math.PI);
};

var ramp_fun = function(x, N) {
	return x/N;
};

var exp_fun = function(x, N) {
	return 1 - Math.exp(-10*x/N);
};

var impulse_fun = function(x, N) {
	var x1 = x -N/2 + 1;
	return Math.sin(x1)/x1;
}


var xPV = pvArray[0];

var ii = 8;
var ch = PVUtil.getLong(pvArray[ii++]);
var K  = PVUtil.getDouble(pvArray[ii++]);
var A = PVUtil.getDouble(pvArray[ii++]);
var fxs = PVUtil.getString(pvArray[ii++]);
var N  = PVUtil.getLong(pvArray[ii++]);

var yPV = pvArray[ch-1];

var yArray = DataUtil.createDoubleArray(N);

var fx;
if (fxs == "sine") {
	fx = sine_fun;
}else if (fxs == "exp"){
	fx = exp_fun;
}else if (fxs == "impulse") {
	fx = impulse_fun;
}else{
	fx = ramp_fun;
}

for (ii = 0; ii < N; ++ii){
	yArray[ii] = K + A * fx(ii, N);
}
	
yPV.setValue(yArray);

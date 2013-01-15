importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.eclipse.jface.dialogs);

/*
        <pv trig="false">${UUT}:AO:AWG:01</pv>
        <pv trig="false">${UUT}:AO:AWG:02</pv>
        <pv trig="false">${UUT}:AO:AWG:03</pv>
        <pv trig="false">${UUT}:AO:AWG:04</pv>
        <pv trig="false">${UUT}:AO:AWG:05</pv>
        <pv trig="false">${UUT}:AO:AWG:06</pv>
        <pv trig="false">${UUT}:AO:AWG:07</pv>
        <pv trig="false">${UUT}:AO:AWG:08</pv>
        <pv trig="false">${UUT}:AO:AWG:sample_count</pv>
        <pv trig="false">${UUT}:AO:AWG:load_awg</pv>
        <pv trig="true">loc://awg_CH</pv>
        <pv trig="false">loc://awg_K</pv>
        <pv trig="false">loc://awg_A</pv>
        <pv trig="false">loc://awg_fun</pv>
        <pv trig="false">loc://awg_N</pv>
        <pv trig="false">loc://awg_delay</pv>
        <pv trig="false">loc://awg_counts(1,2,3,4,5,6,7,8)</pv>
*/
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

var ii = 8;
var sample_countPV = pvArray[ii++];
var load_awgPV = pvArray[ii++];
var ch = PVUtil.getLong(pvArray[ii++]);
var K  = PVUtil.getDouble(pvArray[ii++]);
var A = PVUtil.getDouble(pvArray[ii++]);
var fxs = PVUtil.getString(pvArray[ii++]);
var N  = PVUtil.getLong(pvArray[ii++]);
var delay = PVUtil.getLong(pvArray[ii++]);
// no way to get a js array from an array PV ?

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
	if (ii < delay){
		yArray[ii] = 0;
	}else{
		yArray[ii] = (K + A * fx(ii-delay, N))/10 * (1<<19);
	}
}

yPV.setValue(yArray);
load_awgPV.setValue(1);
sample_countPV.setValue(String(N));

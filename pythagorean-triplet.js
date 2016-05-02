function Triplet(s1,s2,s3){

	this.sum = function(){
			return s1 + s2 + s3;
	};

	this.sumsTo = function(sum) {
	    return sum === null || sum === undefined || this.sum() === sum;
	};

	this.product = function(){
			return [s1, s2, s3].reduce(function(total, side){
				return total * side;
			})
	};

	this.isPythagorean = function(){
		return s1 * s1 + s2 * s2 === s3 * s3;
	};

};


Triplet.where = function(object) {

	var max = object.maxFactor;
	var min = object.minFactor || 1;
	var sum = object.sum;

	var triplets = [];

	for(var s1=min; s1<max; s1++){
		for(var s2=min; s2<max; s2++){
			var s3 = Math.round(Math.sqrt(s1*s1 + s2*s2));
			var triplet = new Triplet(s1, s2, s3);
				if(triplet.isPythagorean() && s1 < s2 && triplet.sumsTo(sum)){
					triplets.push(triplet);
				}
		}
	}
	return triplets;
};

module.exports = Triplet;

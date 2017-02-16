AFRAME.registerComponent('anim_1', {
    init: function () {
        this.pivot = new THREE.Object3D();
        var spotScale = .0250;
        this.spotDistance = .3;
        this.time = 0;


		var geometry = new THREE.SphereBufferGeometry(spotScale, 4, 2),
			//material = new THREE.MeshPhongMaterial( {color: 0xFFFFFF, envMap: envMap} ),
			material = new THREE.MeshLambertMaterial( {color: 0xFFFFFF} ),
			baseSpot = new THREE.Mesh( geometry, material ),
			spot;

		var columns = 40,
			rows = 10,
			c, r, i = 0;

		var columns_half = columns * .5;
		var rows_half = rows * .5;

		for(c = 0; c < columns; c++){
			for(r = 0; r < rows; r++){
				spot = baseSpot.clone();
				spot.index = i++;
				spot.position.x = (c - columns_half) * this.spotDistance;
				spot.position.z = (r - rows_half) * this.spotDistance;


				spot.column = c;
				spot.row = r;
				this.pivot.add(spot);
			}
		}
		this.pivot.position.y = 4;


        this.el.setObject3D('mesh', this.pivot);


    },

    update: function(){
    },

    play: function(){

    },

    tick: function(time, timeDelta){
		var spot, i;
		for( i in this.pivot.children){
			spot = this.pivot.children[i];
            //console.log(time);

			spot.position.y = Math.sin( this.time/60 * (spot.row  * spot.column) / spot.index ) * this.spotDistance;
			//console.log(spot);

		}
        this.time++;
    },

});
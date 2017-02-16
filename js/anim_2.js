AFRAME.registerComponent('anim_2', {
    init: function () {
        this.pivot = new THREE.Object3D();

        var scale = 2;
        var boxScale = 0.0625;

        var strandNumber = 14,
            spotNumber = 30,
            strandIndex,
            spotIndex,
            spot,
            firstSpot,
            lastSpot,
            strand;

        this.spotDistance = .1;
        this.time = 0;
        this.strands = new THREE.Object3D();


        if( AFRAME.utils.device.isMobile() ){
          spotNumber = 20;
        }

        var r = "textures/cube/anim2/";
        var urls = [ r + "posx.png", r + "negx.png",
                     r + "posy.png", r + "negy.png",
                     r + "posz.png", r + "negz.png" ];

        var envMap = new THREE.CubeTextureLoader().load( urls );
        envMap.format = THREE.RGBFormat;
        envMap.mapping = THREE.CubeReflectionMapping;


        var geometry = new THREE.BoxBufferGeometry(boxScale, boxScale, boxScale),
            material = new THREE.MeshPhongMaterial( {color: 0xaaaaaa, envMap: envMap} ),
            baseSpot = new THREE.Mesh( geometry, material );


        //localClock = clock;



        for(spotIndex = 0; spotIndex < spotNumber; spotIndex++){
            spot = baseSpot.clone();
            spot.position.x = 1 * this.spotDistance;
            spot.rotation.y = .1;
            spot.scale.multiplyScalar(.90);
            if(!firstSpot){
                firstSpot = spot;
            }
            if(lastSpot){
                lastSpot.add(spot);
            }

            lastSpot = spot;
        }



        for(strandIndex = 0; strandIndex < strandNumber; strandIndex++){
            strand = firstSpot.clone();
            strand.rotation.y = .5 * strandIndex;
            strand.rotation.x = .05 * strandIndex;
            this.strands.add(strand);
        }

        this.pivot.add(this.strands);

        this.pivot.position.set( -3, 2.2, -4.1);
        this.pivot.rotation.set( 0, 0, 1);

        this.pivot.scale.multiplyScalar(scale);


        this.el.setObject3D('mesh', this.pivot);


    },

    update: function(){
    },

    play: function(){

    },

    tick: function(time, timeDelta){

        var localTime = this.time/60;

        this.pivot.rotation.x += .001;

        for(strandIndex in this.strands.children){
            strand = this.strands.children[strandIndex];
            strand.rotation.y = Math.sin(localTime * .25)  * strandIndex * .5;
            //strand.rotation.x = Math.sin(localClock.elapsedTime * .25)  * strandIndex * .5;
            for(spotIndex in strand.children){
                spot = strand.children[spotIndex];
                spot.rotation.x = Math.sin(localTime * spotIndex * this.spotDistance) ;
                spot.rotation.z = Math.sin(localTime * spotIndex * this.spotDistance) ;
                //spot.rotation.y += Math.sin(localClock.elapsedTime * spotIndex * spotDistance) ;
                spot.rotation.x = Math.sin(localTime * .5) * this.spotDistance * Math.PI * 3;

                spot.position.x = Math.sin(localTime * .1) * this.spotDistance;
            }
        }

        this.time++;
    },

});
AFRAME.registerComponent('mocap', {
    schema: {
        head: {type: 'asset'},
        left: {type: 'asset'},
        right: {type: 'asset'},
        totalFrames: {type: 'number'},
        torsoPosition: {type: 'vec3'}
    },

    multiple: true,


    init: function () {

        this.pivot = new THREE.Object3D();
        this.frame = 0;
        this.totalFrames = this.data.totalFrames;

        var spotScale = .1;

        var r = "textures/cube/hall/";
        var urls = [ r + "posx.png", r + "negx.png",
                     r + "posy.png", r + "negy.png",
                     r + "posz.png", r + "negz.png" ];

        var regex = /(['"])?([a-z0-9A-Z_]+)(['"])?:/g,
            replaceWith = '"$2": ';

        var envMap = new THREE.CubeTextureLoader().load( urls );
        envMap.format = THREE.RGBFormat;
        envMap.mapping = THREE.CubeReflectionMapping;

        var geometry = new THREE.BoxBufferGeometry(spotScale, spotScale, spotScale),
            material = new THREE.MeshPhongMaterial( {color: 0xFFFFFF, envMap: envMap} ),
            baseSpot = new THREE.Mesh( geometry, material ),
            spot;

        this.mocaps = {
            head: JSON.parse( THREE.Cache.get(this.data.head).replace(regex, replaceWith) ),
            left: JSON.parse( THREE.Cache.get(this.data.left).replace(regex, replaceWith) ),
            right: JSON.parse( THREE.Cache.get(this.data.right).replace(regex, replaceWith) )
        }

        this.head = baseSpot.clone();

        this.hand = baseSpot.clone();
        this.hand.scale.set( .1, .5, 1 );

        this.right = this.hand.clone();
        this.left = this.hand.clone();

        this.torso = baseSpot.clone();
        this.torso.scale.set(1,9,1);
        this.torso.scale.multiplyScalar(.5);

        this.pivot.add(this.head);
        this.pivot.add(this.right);
        this.pivot.add(this.left);
        this.pivot.add(this.torso);


        //this.pivot.position.set(-3, 1, 6.5);
        //this.pivot.rotation.y = -Math.PI/2

        this.el.setObject3D('mesh', this.pivot);
    },

    update: function(){

    },

    play: function(){

    },

    tick: function(){
        const frame = this.frame,
            mocaps = this.mocaps;

        const head = this.head,
            left = this.left,
            right = this.right,
            torso = this.torso;


        if(mocaps && frame < this.totalFrames){

            head.position.set(
                mocaps.head[frame].position.x,
                mocaps.head[frame].position.y,
                mocaps.head[frame].position.z
            );

            head.rotation.set(
                mocaps.head[frame].rotation.x,
                mocaps.head[frame].rotation.y,
                mocaps.head[frame].rotation.z
            );

            left.position.set(
                mocaps.left[frame].position.x,
                mocaps.left[frame].position.y,
                mocaps.left[frame].position.z
            );

            left.rotation.set(
                mocaps.left[frame].rotation.x,
                mocaps.left[frame].rotation.y,
                mocaps.left[frame].rotation.z
            );

            right.position.set(
                mocaps.right[frame].position.x,
                mocaps.right[frame].position.y,
                mocaps.right[frame].position.z
            );

            right.rotation.set(
                mocaps.right[frame].rotation.x,
                mocaps.right[frame].rotation.y,
                mocaps.right[frame].rotation.z
            );

            torso.position.set(
                mocaps.head[frame].position.x + this.data.torsoPosition.x,
                mocaps.head[frame].position.y + this.data.torsoPosition.y,
                mocaps.head[frame].position.z + this.data.torsoPosition.z
            );

        }else{
            this.frame = -1;
        }

        ++this.frame;

    },

});
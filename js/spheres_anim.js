AFRAME.registerComponent('spheres', {
    init: function () {
        this.pivot = new THREE.Object3D();

        var r = "textures/cube/hall/";
        var urls = [ r + "posx.png", r + "negx.png",
                     r + "posy.png", r + "negy.png",
                     r + "posz.png", r + "negz.png" ];

        var envMap = new THREE.CubeTextureLoader().load( urls );
        envMap.format = THREE.RGBFormat;
        envMap.mapping = THREE.CubeReflectionMapping;

        var geometry = new THREE.SphereBufferGeometry(.2, 32, 32),
            material = new THREE.MeshPhongMaterial( {color: 0xaaaaaa, envMap: envMap} ),
            baseSpot = new THREE.Mesh( geometry, material ),
            spot;

        this.pivot.add(baseSpot);

        spot = baseSpot.clone();
        spot.scale.multiplyScalar(.3);
        spot.position.x = .5;
        this.pivot.add(spot);

        spot = baseSpot.clone();
        spot.scale.multiplyScalar(.3);
        spot.position.x = -.3;
        this.pivot.add(spot);

        this.pivot.position.set(0, 1.7, -13.64);

        this.el.setObject3D('mesh', this.pivot);

    },

  update: function(){

  },

  play: function(){
  },

  tick: function(){

    this.pivot.rotation.z += .01;
    this.pivot.rotation.x += .01;

  }
});

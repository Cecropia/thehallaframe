AFRAME.registerShader('envMapMaterial', {
    schema: {
        src: {type: 'string'}
    },
    /**
     * `init` used to initialize material. Called once.
     */
    init: function (data) {

        //var r = "textures/cube/hall/";
        var r = data.src;
        var urls = [ r + "posx.png", r + "negx.png",
                     r + "posy.png", r + "negy.png",
                     r + "posz.png", r + "negz.png" ];


        var envMap = new THREE.CubeTextureLoader().load( urls );
        envMap.format = THREE.RGBFormat;
        envMap.mapping = THREE.CubeReflectionMapping;


        this.material = new THREE.MeshPhongMaterial({color: 0xaaaaaa, envMap: envMap});



    //this.update(data);  // `update()` currently not called after `init`. (#1834)
    },
    /**
     * `update` used to update the material. Called on initialization and when data updates.
     */
    update: function (data) {

    }
});


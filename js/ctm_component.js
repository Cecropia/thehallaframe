AFRAME.registerComponent('ctm', {
    schema: {
        src: {type: 'asset'},
        side: {type: 'number', default: THREE.FrontSide},
        scale: {type: 'number', default: 1},
        name: {type: 'string'},
    },

    multiple: true,


    init: function () {
        var ctmLoader = new THREE.CTMLoader();
        var that = this;

        var textureLoader = new THREE.TextureLoader();

        ctmLoader.load( this.data.src,   function( bufferGeometry ) {

            var meshPhongMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
            var mesh = new THREE.Mesh(bufferGeometry, meshPhongMaterial);


            mesh.material.side = that.data.side;
            mesh.scale.multiplyScalar(that.data.scale);


            mesh.material.map = textureLoader.load('textures/' + that.data.name + '.jpg');
            //mesh.material.map.magFilter = THREE.NearestFilter;
            //mesh.material.needsUpdate = true;



            that.el.setObject3D('mesh', mesh);
            //that.el.emit('model-loaded', {format: 'ctm', model: mesh});

            /*if('' !== mesh.name ){
                mesh.pointerType = objectToLoad.pointerType;
                loadTextureAndComplete(texturesPath + objectToLoad.name  + '', mesh.material, 'map', onComplete);

                if(objectToLoad.normal){
                    loadTextureAndComplete(texturesPath + mesh.name  + '_normal', mesh.material, 'normalMap', onComplete);
                }

                if(objectToLoad.shininess !== null){
                    mesh.material.shininess = objectToLoad.shininess;
                }

            }*/

        }, { useWorker: true, worker: new Worker( "js/CTMWorker.js" ) } );



    },

    update: function(){

    },

    play: function(){

    },

    tick: function(){


    },

});

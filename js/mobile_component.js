AFRAME.registerComponent('mobile', {
    init: function () {

        if( AFRAME.utils.device.isMobile() ){
            /* Add mobile controls */
            var scene = document.querySelector('a-scene');
            var entityEl = document.createElement('a-entity');


            //entityEl.setAttribute('id', 'something');

            entityEl.setAttribute('universal-controls', {
              movementControls: 'checkpoint',
            });

            entityEl.setAttribute('checkpoint-controls', {
              mode: 'animate',
            });


            entityEl.setAttribute('position', {x:0, y: 1.764, z: 0});
            entityEl.setAttribute('camera','camera');


            /* *** */
            var innerEl = document.createElement('a-entity');
            innerEl.setAttribute('cursor', {maxDistance: 30});
            innerEl.setAttribute('position', {x:0, y: 0, z: -1});

            innerEl.setAttribute('geometry', {
                primitive: 'ring',
                radiusInner: 0.02,
                radiusOuter: 0.03
            });

            innerEl.setAttribute('material', {
                color: '#CCC',
                shader: 'flat'
            });

            /* *** */
            entityEl.appendChild(innerEl);

            scene.appendChild(entityEl);

            /* *** CHECKPOINTS */

            const spotHeight = 0.0;
            const teleportSpots = [
                {x: 6, y: spotHeight, z: 0},
                {x: -6, y: spotHeight, z: 0},

                {x: 6, y: spotHeight, z: -1},
                {x: 3, y: spotHeight, z: -1},
                {x: 0, y: spotHeight, z: -1},
                {x: -3, y: spotHeight, z: -1},
                {x: -6, y: spotHeight, z: -1},

                {x: 6, y: spotHeight, z: 1},
                {x: 3, y: spotHeight, z: 1},
                {x: 0, y: spotHeight, z: 1},
                {x: -3, y: spotHeight, z: 1},
                {x: -6, y: spotHeight, z: 1},


                /* Fractals hallway */
                {x: 1, y: spotHeight, z: -4},
                {x: 1, y: spotHeight, z: -6.7},
                {x: 1, y: spotHeight, z: -9.4},
                {x: 1, y: spotHeight, z: -12.1},

                {x: 0, y: spotHeight, z: -13},

                {x: -1, y: spotHeight, z: -4},
                {x: -1, y: spotHeight, z: -6.7},
                {x: -1, y: spotHeight, z: -9.4},
                {x: -1, y: spotHeight, z: -12.1},

                /* MOCAP hallway */
                {x: 1, y: spotHeight, z: 4},
                {x: 1, y: spotHeight, z: 6.7},
                {x: 1, y: spotHeight, z: 9.4},
                {x: 1, y: spotHeight, z: 12.1},

                {x: 0, y: spotHeight, z: 13},

                {x: -1, y: spotHeight, z: 4},
                {x: -1, y: spotHeight, z: 6.7},
                {x: -1, y: spotHeight, z: 9.4},
                {x: -1, y: spotHeight, z: 12.1},

            ];


            var checkPointsContainer = document.createElement('a-entity'),
                checkPointEl,
                teleportPosition,
                checkpointColor = '#FFFF00';

            for(var k=0; k < teleportSpots.length; k++){
                teleportPosition = teleportSpots[k];
                checkPointEl = document.createElement('a-cylinder');
                checkPointEl.setAttribute('checkpoint','checkpoint');
                checkPointEl.setAttribute('radius','.25');
                checkPointEl.setAttribute('height','.1');
                checkPointEl.setAttribute('position',teleportPosition);
                checkPointEl.setAttribute('color', checkpointColor);


                checkPointsContainer.appendChild(checkPointEl);
            }


            scene.appendChild(checkPointsContainer);

            /* --- CHECKPOINTS */

        }

    },

    update: function(){

    },

    tick: function(){



    },

    remove: function(){

    }
});


/*    <a-entity camera mobile
                universal-controls="movementControls: checkpoint"
                checkpoint-controls="mode: animate"
                position="0 1.764 0">

        <a-entity cursor="maxDistance: 30"
                  position="0 0 -1"
                  geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03;"
                  material="color: #CCC; shader: flat;">
        </a-entity>
      </a-entity>*/
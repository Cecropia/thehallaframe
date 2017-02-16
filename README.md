# The Hall VR


![hallvr1](/screenshots/thehall1.jpg)


The Hall is a demo created in [Cecropia Solutions](http://www.cecropiasolutions.com/) to test the WebVR capabilities.

The project has a variety of art items in display. Some custom, some of free access and use.

This project is a revamp of our original Hall project [(https://github.com/Cecropia/thehallvr)](https://github.com/Cecropia/thehallvr) which is in its entirety a THREE.js project, we decided to migrate it to A-Frame to test its convenience against a stand-alone THREE.js app for VR and the results are superior. The most important part is that there's a default behavior such as controls across VR devices and compatibility that makes it easy to work with it.

# Navigation

In this version, the main navigation is hand controls (Vive wands and Oculus Touch) to fire a teleporting ray to target where you want to be at.

For desktop the traditional gaming controls are available (WASD, arrow keys and mouse).

For mobile platforms (GearVR and Cardboard) Teleport Spots with a Gaze cursor are the way to jump to the several targets placed in the hall.




# Development process

The object modeling and texture baking was created in Blender, where the 1m unit is used as base size; the models are exported individually, converted to CTM and loaded into the application via Three.js.

A couple of the models were created with Oculus Medium and later decimated with Meshlab.

A couple of [Kinetic Sculptures](https://en.wikipedia.org/wiki/Kinetic_art) were created directly with Three.js and a bit of Math knowledge.

We created a motorcycle model with [Photogrammetry](https://en.wikipedia.org/wiki/Photogrammetry).

Captured human movement to create four animations that occupy one side of a hallway.


# Migration process

The original project is THREE.js [(https://github.com/Cecropia/thehallvr)](https://github.com/Cecropia/thehallvr); the main changes are in the way the models are loaded, now they are all located at the index.html also with the texture assets. Default model compatibility in A-Frame is .obj and recently .gltf, but we already have the .ctm format to handle large models, so this time we stick with it, but since there's no entity component for .ctm we created one.

For the kinectic animations we had to create components, one for the one placed in the roof, one for the spheres, another for the fractal, and a last one for the four mocaps. The code is pretty much the same, I think this could not be accomplished without proper (or previous) THREE.js knowledge.

Our teleportation process was removed and we used the A-Frame checkpoints. We had to create a mobile component to add this checkpoints for mobile only because there is no option for this in A-Frame.

The compatibility in various devices is now handled by A-Frame, we previously had a fallback for mobile, but it's not enough to handle all the cases.

Overall the migration was very transparent thanks to the previous THREE.js knowledge.



[Live Demo](https://cecropia.github.io/thehallaframe/)


[YouTube Video](https://www.youtube.com/watch?v=0nuiaWGNXAw)



# Technologies used

- [WebVR](https://webvr.info/)
- [Three.js r84](https://threejs.org/) (previous version now A-Frame)
- [A-Frame v 0.5.0](https://aframe.io/)
- [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) (previous version now A-Frame)
- [gamepad.js](https://github.com/Absulit/gamepad.js) (previous version now A-Frame)
- [Blender](https://www.blender.org/)
- [Wavefront OBJ file format](https://en.wikipedia.org/wiki/Wavefront_.obj_file)
- [CTM file format](https://en.wikipedia.org/wiki/OpenCTM)
- [OpenCTM](http://openctm.sourceforge.net/)
- [Oculus Medium](https://www.oculus.com/medium/)
- [Meshlab](http://www.meshlab.net/)

# Various Models are from

- [Archive3D](http://archive3d.net/)
- [Nefertiti](http://nefertitihack.alloversky.com/)
- [Female with a Helmet](https://sketchfab.com/models/c80c8fd27ebf4762a781ac298667fa48)

# Audio is from

- [freesound.org](https://www.freesound.org/)

# Paintings from

- [wikipedia.org](https://www.wikipedia.org/)

# More images

![hallvr2](/screenshots/thehall2.jpg)
![hallvr3](/screenshots/thehall3.jpg)
![hallvr4](/screenshots/thehall4.jpg)
![hallvr5](/screenshots/thehall5.jpg)

[Live Demo](https://cecropia.github.io/thehallaframe/)

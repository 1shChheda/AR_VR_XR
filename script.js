console.log("Hello!");
console.log(THREE);

/* Scene */
const scene = new THREE.Scene();

/* Object (Red Cube) */
const geometry = new THREE.BoxGeometry(1, 1, 1); // arg: height, width, depth
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/* TRANSFORM OBJECT */
    // POSITION
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
    // INSTEAD OF MANUALLY EDITING INDIVIDUAL positions, we can use:
mesh.position.set(0.7, -0.6, -0.2);

    // SCALE
mesh.scale.set(2,1,1);
// mesh.scale.setScalar (3); // for Uniform Scaling

    // ROTATION
mesh.rotation.reorder('YXZ'); // to change the order that the rotations are applied
mesh.rotation.x = Math.PI / 4;
mesh.rotation.y = Math.PI / 4;

/* AxesHelper */
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/* Sizes (related to Camera) */
    // temporary values
const sizes = {
    width: 800,
    height: 600
};

/* Camera */
    // using Perspective Camera 
        // most common - mimics the way the human eye sees
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

    // NOTHING VISIBLE! bcoz the camera is inside the cube...need to move it backward
camera.position.z = 3; // since the dim. of cube is 1,1,1 -> position value is bigger than that, to get out of cube

// camera.position.x = 2;
// camera.position.y = 1;
scene.add(camera);

// camera.lookAt(new THREE.Vector3(3,0,0));
camera.lookAt(mesh.position); 

/* Renderer */

    // grab canvas from HTML DOM
const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

    // use "setSize()" method to update the size of the renderer
renderer.setSize(sizes.width, sizes.height);

    // NOW, RENDER!
renderer.render(scene, camera); // arg: scene, camera

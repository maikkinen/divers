import React from 'react'
import * as THREE from './../../node_modules/three/build/three.js'


const ThreeTestComp = () => {

  var camera, scene, renderer;
  var geometry, material, mesh;

  init();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      50
    );
    camera.position.set( 0, 0, 1 );
    camera.lookAt( 0, 0, 0 );

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );
  }

  function animate() {

    requestAnimationFrame ( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );
  }

  /*
  Basically, anything you want to move or change while the app is running has to go
  through the animate loop. You can of course call other functions from there, 
  so that you don't end up with a animate function that's hundreds of lines.
   */

  
  return (
    <div>
      {console.log('Hello JS!')}
    </div>
  )

}

export default ThreeTestComp

/**
 * import * as THREE from './../../node_modules/three/build/three.js'

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.z = 1;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

}

function animate() {

  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);

}
 *
 *
 */
import React from 'react'
import * as THREE from './../../node_modules/three/build/three.js'


const ThreeTestComp = () => {

  var camera, scene, renderer;
  var geometry, material, mesh;

  init();
  minicube();
  //cube();
  lineArt();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(
      75, //Field of View
      window.innerWidth / window.innerHeight,
      0.1, //Rendering lower limit
      50  //Rendering upper limit. That is, only elements betw boundaries are rendered.
    );
    camera.position.set( 0, 0, 1 );
    camera.lookAt( 0, 0, 0 );

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer( { antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );
  }

  
  function cube () {
    geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material ); //object that takes a geometry shape and a material as an object, and applies the mat to the shape.
    scene.add( mesh ); //remember to do this one! otherwise, nothing will appear!
  }

  
  function minicube () {
    geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material ); //object that takes a geometry shape and a material as an object, and applies the mat to the shape.
    mesh.position.set(0, 0, 0.5);
    scene.add( mesh ); //remember to do this one! otherwise, nothing will appear!
  }
  


  function lineArt() {
    var material = new THREE.LineBasicMaterial( { color: 0xffffff } );

    var points = [];
    points.push ( new THREE.Vector3( 1, 0.1, 0.1 ));
    points.push ( new THREE.Vector3( 0.1, 10, 0.1 ));
    points.push ( new THREE.Vector3( 10, 0.1, 0.1 ));

    var geometry = new THREE.BufferGeometry().setFromPoints( points );

    var line = new THREE.Line( geometry, material );
    line.position.set(0, 0, 0.5);

    scene.add( line );
    console.log('yolo yolo');
    console.log(points)
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

  const sty1 = {
    position: 'absolute',
    top: '50%',
    width: '100%',
    display: 'block',
    color: 'red'
  }
  
  return (
    <div style={sty1}>
      <p>I'm testing this Three.js thing here now.</p>
      {console.log('Hello JS!')}
    </div>
  )

}

export default ThreeTestComp

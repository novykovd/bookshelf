import React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class Cube extends React.Component {
  constructor(props) {
    super(props);

    // Create class properties to store Three.js objects
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();

    this.mesh = null;

    // Set initial state
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    const loader = new GLTFLoader();

    const modelPath = '/Parrot.glb';

    loader.load(modelPath, (gltf) => {
        console.log("hello");
        this.mesh = gltf.scene;
        
        this.scene.add(this.mesh);
    });
    




    // Append renderer DOM element to the component's container
    this.mount.appendChild(this.renderer.domElement);
    console.log("hello 2")

    // Create cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    // Set camera position
    this.camera.position.z = 5;

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    this.scene.add( directionalLight );

    // Animation loop
    this.animate();
  }

  componentWillUnmount() {
    // Remove event listener and clean up resources
    this.mount.removeChild(this.renderer.domElement);
  }

  animate = () => {
    
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default Cube;

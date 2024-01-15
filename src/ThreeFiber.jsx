import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three';
import './ThreeFiber.css';
import { Camera } from "three";


function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function Model(props) {
    const result = useLoader(GLTFLoader, '/book_basicmesh.glb')
    const meshes = result.scene.children[0]
    const bettermesh = meshes.children[0]

    if(meshes.geometry = true){
        console.log("geometry exists")
        console.log(meshes.geometry)
        console.log(meshes)
    } else {console.log("it doesnt exist")}


    const color = new THREE.Color(Math.random(), Math.random(), Math.random());
    const width = getRandomNumber(0.15, 0.28);
    const height = getRandomNumber(0.8, 1.2);

    
    const geometry = bettermesh.geometry
    const mater = new THREE.MeshStandardMaterial({ color: color});



    return( 
        <mesh 
        castShadow
        receiveShadow
        geometry={geometry} 
        material={mater}  
        scale={[width,height,1]}
        position={[props.i*0.6,1*height,0]}/>
    )
}  

export default function CanvasAnim(props){

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(-1.5, 1, -3.5); // Set the initial position (x, y, z)
    camera.rotateY(4)

    const bookArray = Array.from({length : props.nOfItems}, (_, index) => (
        <Model i={index}/>
    ))

    return (
        <div className="canvas">
            <Canvas camera={camera}>
                <directionalLight position={[4.1,1,-2]} intensity={2} />
                <ambientLight intensity={0.71}/>
                <mesh position={[2,0,0]}>
                    <boxGeometry args={[6,0.1,3]}/>
                    <meshBasicMaterial/>
                </mesh>
                {bookArray}
            </Canvas>
        </div>
    )
}
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Dat GUI stuff comes below
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

// Ratio by 5
const planetposition = {
  moonposition: 7.24,
  marsposition: -50,
  venusposition: 25,
  mercuryposition: 40,
  jupiterposition: -200,
  saturnposition: -400,
  uranusposition: -500,
  neptunposition: -600,
  sunposition: 41450/5
}
// -127202.5/5



const planetarray = [0 , planetposition.moonposition, planetposition.marsposition,
                    planetposition.venusposition, planetposition.mercuryposition,
                    planetposition.jupiterposition, planetposition.saturnposition,
                    planetposition.uranusposition, planetposition.neptunposition
]

let classnode = document.body.getElementsByClassName("text")[0];
let text;
function planetAction(n) {
  switch (n) {
    case 0:
      camera.position.set(planetarray[n], 0, 5);
      controls.target.set(planetarray[n], 0, 5);
      controls.update();
        classnode.innerHTML = 'Earth';
      break;
    case 1:
      camera.position.set(planetarray[n], 0, 5);
      controls.target.set(planetarray[n], 0, 5);
      controls.update(); 
      classnode.innerHTML = 'Moon';
      break;
    case 2:
      camera.position.set(planetarray[n], 0, 5);
      controls.target.set(planetarray[n], 0, 5);
      controls.update();
      classnode.innerHTML = 'Mars';
      break;
    case 3:
      camera.position.set(planetarray[n], 0, 5);
      controls.target.set(planetarray[n], 0, 5);
      controls.update();
      classnode.innerHTML = 'Venus';
      break;
    case 4:
      camera.position.set(planetarray[n], 0, 5);
      controls.target.set(planetarray[n], 0, 5);
      controls.update(); 
      classnode.innerHTML = 'Mercury';
      break;
    case 5:
      camera.position.set(planetarray[n], 0, 50);
      controls.target.set(planetarray[n], 0, 50);
      controls.update();
      classnode.innerHTML = 'Jupiter';
      break;
    case 6:
      camera.position.set(planetarray[n], 0, 55);
      controls.target.set(planetarray[n], 0, 55);
      controls.update();
      classnode.innerHTML = 'Saturn';
      break; 
    case 7:
      camera.position.set(planetarray[n], 0, 30);
      controls.target.set(planetarray[n], 0, 30);
      controls.update();
      classnode.innerHTML = 'Uranus';
      break; 
    case 8:
      camera.position.set(planetarray[n], 0, 30);
      controls.target.set(planetarray[n], 0, 30);
      controls.update();
      classnode.innerHTML = 'Neptune';
      break;   
    default:
      camera.position.set(planetarray[n], 0, 30);
      controls.target.set(planetarray[n], 0, 30);
      controls.update();   
  }
}



var count = 0;
window.addEventListener( 'resize', onWindowResize, false );
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    count--;
    if (count < 0) {
      count = planetarray.length - 1;
    }
    count = count % planetarray.length;
    count = (count < 0) ? Math.abs(count) : count;
    planetAction(count);
    console.log(count);
  } else if (event.key === 'ArrowRight') {
    count++;
    count = count % planetarray.length;
    count = (count < 0) ? Math.abs(count) : count;
    planetAction(count);
    console.log(count);
  }

}, false)


function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );


}

// Texture





// Earth
var today = new Date();
var time = today.getHours();
const textureload = new THREE.TextureLoader();

if (time >= 18 || time < 8) {
  var earthtexture = textureload.load('images/eart_nightmap.jpg');

} else {
  var earthtexture = textureload.load('images/earth.jpg');
}


const eart_normal = textureload.load('images/8k_earth_normal_map.tif')

const egeo = new THREE.SphereGeometry(3, 64, 32);
const emat = new THREE.MeshStandardMaterial({map: earthtexture, normalMap: eart_normal});
const earth = new THREE.Mesh(egeo, emat);


// Moon
const moontexture = textureload.load('images/moon.jpg');

const mgeo = new THREE.SphereGeometry(0.82, 64, 32);
const mmat = new THREE.MeshStandardMaterial({map: moontexture});
const moon = new THREE.Mesh(mgeo, mmat);

moon.position.set(planetposition.moonposition, 0, 0);


// Mars
const marstexture = textureload.load('images/mars.jpg');

const mrgeo = new THREE.SphereGeometry(1.6, 64, 32);
const mrmat = new THREE.MeshStandardMaterial({map: marstexture});
const mars = new THREE.Mesh(mrgeo, mrmat);

mars.position.set(planetposition.marsposition, 0, 0);


// Venus
const venustexture = textureload.load('images/venus.jpg');

const vgeo = new THREE.SphereGeometry(2.85, 64, 32);
const vmat = new THREE.MeshStandardMaterial({map: venustexture});
const venus = new THREE.Mesh(vgeo, vmat);

venus.position.set(planetposition.venusposition, 0, 0);


// Mercury
const mercurytexture = textureload.load('images/mercury.jpg');

const mcgeo = new THREE.SphereGeometry(1.15, 64, 32);
const mcmat = new THREE.MeshStandardMaterial({map: mercurytexture});
const mercury = new THREE.Mesh(mcgeo, mcmat);

mercury.position.set(planetposition.mercuryposition, 0, 0);


// Jupiter
const jupitertexture = textureload.load('images/jupiter.jpg');

const jgeo = new THREE.SphereGeometry(31.2, 64, 32);
const jmat = new THREE.MeshStandardMaterial({map: jupitertexture});
const jupiter = new THREE.Mesh(jgeo, jmat);

jupiter.position.set(planetposition.jupiterposition, 0, 0);

// Saturn
const saturntexture = textureload.load('images/saturn.jpg');

const satgeo = new THREE.SphereGeometry(26, 64, 32);
const satmat = new THREE.MeshStandardMaterial({map: saturntexture});
const saturn = new THREE.Mesh(satgeo, satmat);

saturn.position.set(planetposition.saturnposition, 0, 0);

// Saturn Ring
const satringtexture = textureload.load('images/saturn_ring.png');

const satringgeo = new THREE.RingGeometry(35, 40, 64, 24);
const satringmat = new THREE.MeshBasicMaterial({map: satringtexture, side: THREE.DoubleSide});
const satring = new THREE.Mesh(satringgeo, satringmat);

satring.position.set(planetposition.saturnposition, 0, 0);

// Uranus
const uranustexture = textureload.load('images/uranus.jpg');

const ugeo = new THREE.SphereGeometry(11.3, 64, 32);
const umat = new THREE.MeshStandardMaterial({map: uranustexture});
const uranus = new THREE.Mesh(ugeo, umat);

uranus.position.set(planetposition.uranusposition, 0, 0);

// Neptun
const neptuntexture = textureload.load('images/neptune.jpg');

const ngeo = new THREE.SphereGeometry(11.2, 64, 32);
const nmat = new THREE.MeshStandardMaterial({map: neptuntexture});
const neptun = new THREE.Mesh(ngeo, nmat);

neptun.position.set(planetposition.neptunposition, 0, 0);

// Sun
const suntexture = textureload.load('images/sun.jpg');

const sungeo = new THREE.SphereGeometry(338, 64, 32);
const sunmat = new THREE.MeshStandardMaterial({map: suntexture});
const sun = new THREE.Mesh(sungeo, sunmat);

sun.position.set(planetposition.sunposition, 0, 0);



const light = new THREE.AmbientLight( 0xffffff);
const bgtexture = textureload.load('images/milky_way.jpg');


scene.add(light);
scene.add(earth);
scene.add(moon);
scene.add(mars);
scene.add(venus);
scene.add(mercury);
scene.add(jupiter);
scene.add(saturn);
scene.add(satring);
scene.add(uranus);
scene.add(neptun);
scene.add(sun);


scene.background = bgtexture;
camera.position.z = 5;
// controls.update();

function animate() {
  requestAnimationFrame( animate );

  earth.rotation.y -= 0.001;
  moon.rotation.y -= 0.001;
  mars.rotation.y -= 0.001;
  venus.rotation.y -= 0.001;
  mercury.rotation.y -= 0.001;
  jupiter.rotation.y -= 0.001;
  saturn.rotation.y -= 0.001;
  uranus.rotation.y -= 0.001;
  neptun.rotation.y -= 0.001;
  satring.rotation.x = 5;
  satring.rotation.y = 19;
  satring.rotation.z = 7;

  renderer.render( scene, camera );
};

animate();
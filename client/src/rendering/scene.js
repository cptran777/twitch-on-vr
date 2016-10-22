// The main script for starting the ThreeJS scene inside the HTML element

/******************* INIT DEPENDENCIES *********************/

/******************* DEFINE RENDER LOOP ********************/

// Render is a function that will get called every frame to be rendered
const render = (usingVR, scene, camera, controls, stereo, renderer, functions) => {

	console.log('render function called');

	requestAnimationFrame(render.bind(this, 
		usingVR, 
		scene, 
		camera, 
		controls, 
		stereo, 
		renderer, 
		functions
	));

	// Functions is expected to be an array of functions to call on every frame
	for (let x = 0; x < functions.length; x++) {
		functions[x]();
	}

	camera.updateProjectionMatrix();
	// Uncomment once controls have been made:
	// controls.update();

	if (usingVR) {
		stereo.render(scene, camera);
	} else {
		renderer.render(scene, camera);
	}

};

// Starts the three js rendering. usingVR is a bool value that allows the use of
// stereoscopic view or plain view depending on user choice.
const init = (usingVR) => {

	console.log('starting scene');

/******************** START THE SCENE **********************/

	const scene = new THREE.Scene();

	// Init renderer
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	// Append renderer to the DOM
	const element = renderer.domElement;
	const app = document.getElementById('app');
	app.appendChild(element);

	// Init camera
	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1500);
	camera.position.set(0, 0, 0);
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	scene.add(camera);

	// If using VR mode, create the stereoeffect to be rendered:
	const stereoEffect = usingVR ? new THREE.StereoEffect(renderer) : null;

	// Init lights
	const pointLight = new THREE.PointLight(0xFFFFFF);
	pointLight.position.set(0, 30, 0);
	scene.add(pointLight);

	// Init raycasting
	const raycaster = new THREE.Raycaster();

	// Uncomment once orientation controls have been written
	// orientation();

	// Uncomment once orbit controls have been written
	// const controls = new OrbitControls(camera, element);
	let controls = null;
	// controls.target.set(
	// 	camera.position.x + 0.15,
	// 	camera.position.y,
	// 	camera.position.z
	// );
	// controls.noPan = true;
	// controls.noZoom = true;

/******************** HELPER FUNCTIONS *********************/

	// Sets up change to size of renderer if necessary (useful for fullscreen)
	const resize = () => {
		const nativePixelRatio = window.devicePixelRatio = window.devicePixelRatio || 
			Math.round(window.screen.availWidth / documentElement.clientWidth);

		camera.aspect = nativePixelRatio;
		camera.updateProjectionMatrix();

		usingVR ? stereoEffect.setSize(window.innerWidth, window.innerHeight) : 
			renderer.setSize(window.innerWidth, window.innerHeight);
	};

	// Fullscreen controls, should allow game container to become fullscreen on mobile
	const fullsreen = () => {
		if (app.requestFullscreen) {
			app.requestFullscreen();
		} else if (app.msRequestFullscreen) {
			app.msRequestFullscreen();
		} else if (app.mozRequestFullScreen) {
			app.mozRequestFullScreen();
		} else if (app.webkitRequestFullscreen) {
			app.webkitRequestFullscreen();
		}

		resize();
	};

	// Will activate if the user is on mobile and override controls
	const setOrientationControls = (e) => {

		if (!e.alpha) {
			return;
		}

		controls = new THREE.DeviceOrientationControls(camera, true);
		controls.connect();
		controls.update();
		element.addEventListener('click', fullscreen, false);
		window.removeEventListener('deviceorientation', setOrientationControls, true);

	};

	// Uncomment once controls are ready
	// window.addEventListener('deviceorientation', setOrientationControls, true);

	render(usingVR, scene, camera, controls, stereoEffect, renderer, [resize]);

};

export default {
	init
}

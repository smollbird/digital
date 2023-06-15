import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import Stats from "three/addons/libs/stats.module.js";
import type { GLTF } from "three/addons/loaders/GLTFLoader.js";

export default class UT {
  public dom: Element;
  public width: number;
  public height: number;
  public scene: THREE.Scene;
  public camera: THREE.Camera;
  public renderer: THREE.WebGLRenderer;
  public controls: OrbitControls;
  private axes: THREE.AxesHelper;
  public light: THREE.AmbientLight;
  public loader: GLTFLoader;
  // private stats: Stats;
  public constructor(dom: Element, width: number, height: number) {
    this.dom = dom;
    this.width = width;
    this.height = height;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf8f8f8);

    this.camera = new THREE.PerspectiveCamera(
      45,
      this.width / this.height,
      0.1,
      1000
    );
    this.camera.position.set(20, 20, 20);

    this.axes = new THREE.AxesHelper(5);
    this.light = new THREE.AmbientLight(0xffffff, 1);
    this.light.position.set(50,50,50)
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.dom,
      antialias: true,
    });
    this.renderer.setSize(this.width, this.height);

    this.loader = new GLTFLoader();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // this.stats = new Stats();
    // document.body.appendChild(this.stats.dom);

    this.scene.add(this.camera);
    this.scene.add(this.axes);
    this.scene.add(this.light);
  }

  public render() {
    requestAnimationFrame(() => this.render());
    // this.stats.update();
    this.renderer.render(this.scene, this.camera);
  }

  public load() {
    this.loader.load("./models/airplat.glb", (gltf: GLTF) => {
      this.scene.add(gltf.scene);
      gltf.scene.position.set(0, 0, 0);
    });
  }
}

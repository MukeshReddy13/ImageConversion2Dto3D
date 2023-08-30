import { Component, ElementRef, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-image-conversion',
  templateUrl: './image-conversion.component.html',
  styleUrls: ['./image-conversion.component.scss'],
})
export class ImageConversionComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private imageTexture!: THREE.Texture;
  private plane!: THREE.Mesh;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.initScene();
    this.loadImageTexture();
    this.createMesh();
    this.animate();
  }

  private initScene() {
    const canvas = this.canvasRef.nativeElement;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }

  private loadImageTexture() {
    this.imageTexture = new THREE.TextureLoader().load('src\app\images\Hotpot (1).png');
  }

  private createMesh() {
    const geometry = new THREE.PlaneGeometry(2, 2); // Create a plane
    const material = new THREE.MeshBasicMaterial({ map: this.imageTexture });
    this.plane = new THREE.Mesh(geometry, material);
    this.scene.add(this.plane);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const canvas = this.canvasRef.nativeElement;
    this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      const animate = () => {
        requestAnimationFrame(animate);
        this.plane.rotation.x += 0.005; // Rotate the plane
        this.plane.rotation.y += 0.01; // Rotate the plane
        this.renderer.render(this.scene, this.camera);
      };
      animate();
    });
  }
}

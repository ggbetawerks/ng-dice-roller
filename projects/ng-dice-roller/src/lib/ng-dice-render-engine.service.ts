import * as THREE from 'three';
import {
  Injectable,
  ElementRef,
  OnDestroy,
  NgZone,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class DiceRenderEngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;

  private group: THREE.Group;

  private frameId: number = null;

  public constructor(
    private ngZone: NgZone,
    private domSanitizer: DomSanitizer
  ) {}

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public async createScene(
    canvas: ElementRef<HTMLCanvasElement>
  ): Promise<void> {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true, // smooth edges
    });
    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight(0x404040);
    this.light.position.z = 10;
    this.scene.add(this.light);

    // const geometry = new THREE.DodecahedronGeometry(1);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    /*const material = new THREE.MeshLambertMaterial({
      color: 0xcccccc,
      side: THREE.DoubleSide,
      opacity: 0.75,
      transparent: true,
    });*/

    const materials = [];

    /* Should be able to use loadTexture from the SafeUrl (I hope)
    strDataURI = canvas.toDataURL("image/jpeg");
    imag = new Image();
    imag.src = strDataURI;
    var mesh = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( imag.src ) } );
    */
    const tempMaterials = [];
    for (let i = 0; i < 6; i++) {
      // console.log('creating sides');
      const canvasSide = document.createElement('canvas');
      const context = canvasSide.getContext('2d');
      // console.log(canvasSide.width);
      const x = canvasSide.width / 2;
      const y = canvasSide.height / 2;
      // console.log(x);
      context.font = '60pt Calibri';
      context.textAlign = 'center';
      context.fillStyle = 'grey';
      context.fillRect(0, 0, canvasSide.width, canvasSide.height);
      context.fillStyle = 'red';
      context.fillText((i + 1).toString(), x, y + 25);

      const texture = new THREE.CanvasTexture(canvasSide);
      // texture.needsUpdate = true;

      tempMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
    }
    materials.push(tempMaterials[0]);
    // materials.push(tempMaterials[5]);
    // materials.push(tempMaterials[1]);
    // materials.push(tempMaterials[4]);
    // materials.push(tempMaterials[2]);
    // materials.push(tempMaterials[3]);

    const bb = new THREE.TextureLoader();
    const d1 = await bb.loadAsync('assets/Alea_1.png');
    const d2 = await bb.loadAsync('assets/Alea_2.png');
    const d3 = await bb.loadAsync('assets/Alea_3.png');
    const d4 = await bb.loadAsync('assets/Alea_4.png');
    const d5 = await bb.loadAsync(
      this.domSanitizer.sanitize(SecurityContext.URL, 'assets/Alea_5.png')
    );
    // const d6 = await bb.loadAsync('assets/Alea_6.png');

    const s2 = this.domSanitizer.bypassSecurityTrustUrl(
      'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
    );

    // console.log(s2);
    const d6 = await bb.loadAsync(
      this.domSanitizer.sanitize(SecurityContext.URL, s2)
    );

    /*let nn = await bb.loadAsync(
      'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
    );*/

    const m1 = new THREE.MeshBasicMaterial({ map: d1 });
    const m2 = new THREE.MeshBasicMaterial({ map: d2 });
    const m3 = new THREE.MeshBasicMaterial({ map: d3 });
    const m4 = new THREE.MeshBasicMaterial({ map: d4 });
    const m5 = new THREE.MeshBasicMaterial({ map: d5 });
    const m6 = new THREE.MeshBasicMaterial({ map: d6 });
    // materials.push(m1);
    materials.push(m6);
    materials.push(m2);
    materials.push(m5);
    materials.push(m3);
    materials.push(m4);

    // console.log(materials);
    const mesh = new THREE.Mesh(geometry, materials);

    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial()
    );

    this.group = new THREE.Group();
    this.group.add(mesh);

    this.group.add(wireframe);

    this.scene.add(this.group);
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.group.rotation.x += 0.01;
    this.group.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}

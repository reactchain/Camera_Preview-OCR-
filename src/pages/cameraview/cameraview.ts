import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPreview,CameraPreviewOptions, CameraPreviewPictureOptions} from '@ionic-native/camera-preview';

/**
 * Generated class for the CameraviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cameraview',
  templateUrl: 'cameraview.html',
})
export class CameraviewPage {
  picture: string;
  cameraOpts: CameraPreviewOptions = {
    x:0,
    y:0,
    width:window.innerWidth,
    height:window.innerHeight,
    toBack: true
  };
  cameraPictureOpts: CameraPreviewPictureOptions = {
    width: window.innerWidth,
    height: window.innerHeight,
    quality: 100
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private cameraPreview: CameraPreview) {
  }

  
  // start camera
  async startCamera () {
    this.picture = null;
    const result = await this.cameraPreview.startCamera(this.cameraOpts);

    //console.log(result);
  }
  
  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  async takePicture () {
    const result = await this.cameraPreview.takePicture(this.cameraPictureOpts);
    await this.cameraPreview.stopCamera();
    this.picture = 'data:image/jpeg;base64,'+result;
  }
  // Set the handler to run every time we take a picture
 

  
  ionViewDidLoad() {
    this.startCamera();
    console.log('ionViewDidLoad CameraviewPage');
  }

}

import cvReadyPromise from '@techstark/opencv-js';

let cv: any;

export const loadCv = async () => {
  if (cv) {
    return cv;
  }
  cv = await cvReadyPromise;
  console.log('OpenCV.js is ready.');
  return cv;
}; 
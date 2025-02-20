import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export const loadModel = async (modelPath, materialPath, type) => {
  return new Promise((resolve, reject) => {
    if (type === 'obj') {
      const mtlLoader = new MTLLoader();
      mtlLoader.load(
        materialPath,
        (materials) => {
          materials.preload();
          const objLoader = new OBJLoader();
          objLoader.setMaterials(materials);
          objLoader.load(
            modelPath,
            (object) => resolve(object),
            undefined,
            (error) => reject(error)
          );
        },
        undefined,
        (error) => reject(error)
      );
    } else if (type === 'fbx') {
      const loader = new FBXLoader();
      loader.load(
        modelPath,
        (object) => resolve(object),
        undefined,
        (error) => reject(error)
      );
    }
  });
};

export const mapConfig = {
  apiGoogle: process.env.REACT_APP_MAP_GOOGLE,
  apiMapBox: process.env.REACT_APP_MAP_MAPBOX
};

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const cloudinaryConfig = {
  cloudinaryKey: process.env.REACT_APP_CLOUDINARY_KEY,
  cloudinaryPreset: process.env.REACT_APP_CLOUDINARY_PRESET,
  cloudinaryUrl: process.env.REACT_APP_CLOUDINARY_URL
};

export const apiConfig = {
  baseUrl: process.env.REACT_APP_URL,
  apiUrl: process.env.REACT_APP_API_URL,
  datablendUrl: process.env.REACT_API_DATA_BLEND
};

export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;

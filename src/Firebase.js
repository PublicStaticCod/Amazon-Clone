import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAndv7I_wuI64qmrGnH20aHNNxFaw0yLoE',
	authDomain: 'mean-35be7.firebaseapp.com',
	databaseURL: 'https://mean-35be7.firebaseio.com',
	projectId: 'mean-35be7',
	storageBucket: 'mean-35be7.appspot.com',
	messagingSenderId: '371290594570',
	appId: '1:371290594570:web:5a3f93db0b01c0cf502ef3',
	measurementId: 'G-PZSHBHS0DW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

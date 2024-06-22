const admin = require('firebase-admin');
const serviceAccount = require("./key_service_account.json");
const data = require("./alumno.json");
const collectionKey = "alumno"; // Nombre de la colección

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

if (data && (typeof data === "object")) {
  Object.keys(data).forEach(docKey => {
   //para pasar la clave
  // firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
    // Aquí eliminamos docKey para permitir que Firestore genere una clave automáticamente
    
    firestore.collection(collectionKey).doc().set(data[docKey]).then((res) => {
      console.log("Document successfully written with ID:", res.id);
    }).catch((error) => {
      console.error("Error writing document: ", error);
    });
  });
}

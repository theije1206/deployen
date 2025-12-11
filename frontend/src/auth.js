// function login() {
// // Locate the form and get the data from the form into jsonRequestBody
//     let formData = new FormData(document.querySelector('#loginform'))
//
//     let jsonRequestBody = {}
// //value and key have different order than usual!
//     formData.forEach((value, key) => jsonRequestBody[key] = value)
//
// // Execute the request
//     fetch("/api/authentication", {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(jsonRequestBody)
//     }).then(response => {
//         if (response.ok)
//             return response.json()
//     }).then(myJson =>
//         // Save the JWT in the session storage for later use
//         window.sessionStorage.setItem("myJWT", myJson.JWT))
//         .catch(error => console.log(error))
// }
//
// document.querySelector('#login').addEventListener("click", login)
//
// document.body.innerHTML = `
// <form id="loginform">
//   <label for="username">Username:</label>
//   <input type="text" name="username" id="username">
//
//   <label for="password">Password:</label>
//   <input type="password" name="password" id="password">
// </form>
// `;
//
// const fetchOptions = {
//     method: 'DELETE',
//         headers: {
//         'Authorization': 'Bearer ' + window.sessionStorage.getItem("myJWT")
//
//     }
// }
//
// function deleteSomething() {
//     fetch("/api/something", fetchOptions)
//         .then(response => {
//             if(response.ok) console.log("Deleted successfully");
//             else console.log("Error deleting");
//         })
//         .catch(error => console.log(error));
// }

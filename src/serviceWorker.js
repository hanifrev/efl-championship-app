// export function register(config) {
//   if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//     const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href)
//     if (publicUrl.origin !== window.location.origin) {
//       return
//     }

//     window.addEventListener('load', () => {
//       const swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`

//       if (isLocalhost) {
//         checkValidServiceWorker(swUrl, config)

//         navigator.serviceWorker.ready.then(() => {
//           console.log('service worker test')
//         })
//       } else {
//         registerValidSW(swUrl, config)
//       }
//     })
//   }
// }
//

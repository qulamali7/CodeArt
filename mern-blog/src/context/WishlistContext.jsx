// import React, { createContext, useState } from 'react'
// import useLocalStorage from '../hook/useLocalStorage'
// export const WishlistContext = createContext()
// const WishlistProvider = ({ children }) => {
//     const [wishlist, setWishlist] = useLocalStorage("wishlist", [])
//     function handleWishlist(item) {
//         if (wishlist.find((x) => x._id === item._id)) {
//             setWishlist(wishlist.filter((x) => x._id !== item._id))
//         } else {
//             setWishlist([...wishlist, item])
//         }
//     }
//     return (
//         <WishlistContext.Provider value={{wishlist,handleWishlist}}>{children}</WishlistContext.Provider>
//     )
// }

// export default WishlistProvider
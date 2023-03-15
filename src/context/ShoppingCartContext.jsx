import { createContext, useContext, useState, useEffect } from "react";
import CartPage from "../Pages/CartPage";

export const ShoppingCartContext = createContext();
const initialCartItems = localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart"))
    : [];

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(initialCartItems)
    //  quantity 
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );
    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);
    

    const getItemQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };


    // add to cart function
    const addtocartFun= (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
              
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'item added to cart'
                })
                return [...currItems, { id, quantity: 1 }];
            }
            else{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'warning',
                    title: ' item already in cart'
                })
                return  [...currItems];
            } 
    })
            }

       // incerase quantity btn
    const increaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    // decrease quantity btn
    const decreaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    // remove item from cart
    const removeFromCart = (id) => {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'item delete from cart'
        })
    };

    return (<ShoppingCartContext.Provider value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        addtocartFun,
        cartQuantity
    }}>
        {children}
    </ShoppingCartContext.Provider>
    );
}
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}
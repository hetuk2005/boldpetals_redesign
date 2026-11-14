import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      id: "fairy-birthday-hamper",
      title: "Fairy Birthday Hamper",
      price: 2699,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "light-wala-jhumka",
      title: "Light Wala Jhumka",
      price: 899,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80"
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image
        }
      ];
    });
    showToast(`Added "${product.title}" to bag!`);
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from bag');
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.1); // 10% coupon PETAL10
  const finalTotal = Math.max(0, subtotal - discount);
  const freeShippingThreshold = 799;
  const isFreeShipping = subtotal >= freeShippingThreshold;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalItems,
        subtotal,
        discount,
        finalTotal,
        isFreeShipping,
        freeShippingThreshold,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

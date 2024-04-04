import { createContext, useEffect } from "react";
import { useState } from "react";


export const cardContext = createContext();

const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = card.reduce(
      (tol, curTol) => tol + curTol.price * curTol.amount,
      0
    );
    setTotal(total);
  },[]);

  useEffect(() => {
    if (card) {
      const amount = card.reduce((amt, curAmt) => amt + curAmt.amount, 0);
      setItemAmount(amount);
    }

    return () => {};
  }, [card]);

  // add to card
  const addCard = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = card.find((itm) => itm.id === id);
    if (cartItem) {
      const newCard = [...card].map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCard(newCard);
    } else {
      setCard([...card, newItem]);
    }
  };

  // remove from card
  const removeCard = (id) => {
    const newCard = card.filter((item) => item.id !== id);
    setCard(newCard);
  };

  // clear card
  const clearCard = () => {
    setCard([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cardItem = card.find((item) => item.id === id);
    addCard(cardItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cardItem = card.find((item) => item.id === id);
    if (cardItem) {
      const newCard = card.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cardItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCard(newCard);
    }
    if (cardItem.amount < 2) {
      removeCard(id);
    }
  };
  return (
    <>
      <cardContext.Provider value={{
        card, itemAmount, total,
        addCard, removeCard,
        clearCard,
        increaseAmount,
        decreaseAmount,
      }}>
        {children}
      </cardContext.Provider>
    </>
  );
};

export default CardProvider;

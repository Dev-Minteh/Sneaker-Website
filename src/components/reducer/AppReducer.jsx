
export const initialState = {
  sneakers: [],
  currentIndex: 0,
  cart: [],
  loading: true,
  modalVisible: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_SNEAKERS":
      return { ...state, sneakers: action.payload, loading: false };
    case "NEXT_SNEAKER":
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.sneakers.length,
      };
    case "PREV_SNEAKER":
      return {
        ...state,
        currentIndex:
          (state.currentIndex - 1 + state.sneakers.length) %
          state.sneakers.length,
      };
    case "VIEW_SNEAKER_DETAIL":
      return {
        ...state,
        selectedSneaker: action.payload,
      };
    case "ADD_TO_CART": {
  const existing = state.cart.find(item => item.id === action.payload.id);
  if (existing) {
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      )
    };
  }
  return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    }
          
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        )
            };

      case "DECREASE_QTY":
        return {
          ...state,
          cart: state.cart
            .map(item =>
              item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
            )
            .filter(item => item.qty > 0)
        };
          case "TOGGLE_MODAL":
            return { ...state, modalVisible: !state.modalVisible };

           case "CLEAR_CART":
            return {...state,  cart: [] };
          default:
            return state;
      
        }   
} 

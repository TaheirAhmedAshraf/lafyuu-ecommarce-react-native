const initialState = {
  full_name: 'Md Abul Kalam',
  phone_number: '+880 16 33 214 789',
  email: 'abulkalam@gmail.com',
  address: '31/1 puran paltan',
  avaterURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOALqcMjby_cOSIr-3GFWRO_zY_j0qcB4zRA&usqp=CAU',
  order_infos: {
    pending_orders: '34',
    pending_delivery: '14',
    total_delivered: '28',
    total_orders: '125',
    total_returned: '36',
    total_declined: '16',
    total_cod_recived: '79500',
    total_fee_paid: '55220',
    delivery_due_ammount: '32185',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

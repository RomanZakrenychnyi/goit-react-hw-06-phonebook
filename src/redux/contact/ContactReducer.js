const initialContact = JSON.parse(localStorage.getItem('contacts'));
const contactsReducer = (state = [initialContact], action) => {
  if (action.type === 'contacts/add') {
    return (state = [action.payload]);
  }
  if (action.type === 'contacts/remove') {
    return (state = [action.payload]);
  }
  return state;
};

export default contactsReducer;

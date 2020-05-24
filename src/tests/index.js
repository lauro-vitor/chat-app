import {useSelector, useDispatch} from 'react-redux';
import {addReceiver, addUser, addMessage, setId} from '../actions';
export default () => {
  const myChat = useSelector(state => state.MyChat);
  const dispatch = useDispatch();
  console.log('index MyChat', myChat);
  dispatch(
    addMessage(
      2,
      'LAURO',
      'BELTRANA',
      'Olá Boa Noite!',
      new Date(),
      'BELTRANA',
    ),
  );
  return null;
};
// console.log('Enviada');
// console.log('myChat', myChat);
// console.log('--- exibindo uma conversa');
// myChat['LOIRINHA'].map(element => {
//   if (element.owner === 'LAURO') {
//     console.log(element);
//   }
// });
// console.log('state my chat', myChat);
// dispatch(
//   addMessage(
//     1,
//     'LAURO',
//     'FULANA',
//     'oi fulana com estas ?',
//     new Date(),
//     'FULANA',
//   ),
// // );
// dispatch(
//   addMessage(
//     2,
//     'LAURO',
//     'BELTRANA',
//     'Olá Boa Noite!',
//     new Date(),
//     'BELTRANA',
//   ),
// );
// dispatch(
//   addMessage(
//     3,
//     'LAURO',
//     'LOIRINHA',
//     'Oi minha linda!',
//     new Date(),
//     'LOIRINHA',
//   ),
// );

// dispatch(
//   addMessage(4, 'LOIRINHA', 'LAURO', 'Oi meu bem', new Date(), 'LOIRINHA'),
// );

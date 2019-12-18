import { ADD_CHAT } from 'actions/chatActions';
import { SEND_MESSAGE } from 'actions/messageActions';
import { update } from 'react-addons-update';

const initialStore = {
  chats: {
    1: {
      title: 'Чат1',
      messages: [1]
    },

    2: {
      title: 'Чат1',
      messages: [2]
    },

    3: {
      title: 'Чат1',
      messages: []
    }
  },
};

export function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_CHAT: {
      const chatId = Object.keys(store.chats).length + 1;
      return update(store,
        {
          chats:{
            $merge: {
              [chatId]:{
                title: action.title, messages: [],
              }
            }
          },

        }
      );
    }
    default: return store;
  }

}

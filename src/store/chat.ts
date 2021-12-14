import { defineStore } from "pinia";

export type Message = {
  id: string;
  username: "bot" | string;
  message: {
    type: "text";
    text: string;
  };
  time: number;
};

type Button = {
  title: string;
  payload: string;
};

export type ButtonGroup = {
  id: string;
  username: "bot";
  message: {
    type: "buttons";
    buttons: Button[];
  };
  time: number;
};

type ChatStore = {
  messages: Array<Message | ButtonGroup>;
};

export const useChatStore = defineStore("chat", {
  state: (): ChatStore => {
    return {
      messages: [],
    };
  },

  actions: {
    addMessage(msg: Message) {
      this.messages.push(msg);
    },

    addButtons(buttons: ButtonGroup) {
      this.messages.push(buttons);
    },
  },
});

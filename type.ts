// interface User {
//     name: string;
//     id: number;
//   }
  
//   interface Message {
//     sender: User;
//     receiver: User;
//     content: string;
//     timestamp: Date;
//   }
  
//   class ChatApp {
//     private users: User[] = [];
//     private messages: Message[] = [];
  
//     addUser(user: User) {
//       this.users.push(user);
//     }
  
//     sendMessage(sender: User, receiver: User, content: string) {
//       const message: Message = {
//         sender: sender,
//         receiver: receiver,
//         content: content,
//         timestamp: new Date(),
//       };
//       this.messages.push(message);
//     }
  
//     getMessagesForUser(user: User) {
//       const messages: Message[] = [];
//       for (const message of this.messages) {
//         if (message.receiver.id === user.id) {
//           messages.push(message);
//         }
//       }
//       return messages;
//     }
//   }

//    document.querySelector(".send-button").addEventListener("click" , myfun)
//    function myfun(){
//     var text1 = document.querySelector(".p2") ; 
//    console.log(text1);
   
//    }
   
  
// //   // Example usage
// //   const alice: User = { name: "Alice", id: 1 };
// //   const bob: User = { name: "Bob", id: 2 };
  
// //   const chatApp = new ChatApp();
// //   chatApp.addUser(alice);
// //   chatApp.addUser(bob);
  
// //   chatApp.sendMessage(alice, bob, "Hello, Bob!");
  
// //   const bobMessages = chatApp.getMessagesForUser(bob);
// //   console.log(bobMessages);
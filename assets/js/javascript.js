// Javascript code for naijabot convo

var botui = new BotUI('naijabot-ui');
        botui.message.add({
            delay: 1000,
            loading: true,
            content: 'Hello, I am NaijaBot. I can help you know Nigeria better!'
        }).then(function() {
            botui.message.add({ // show a message
                delay: 1000,
                loading: true,
                content: 'Whats your name?'
            }).then(function() { // requests for name
                return botui.action.text({ // placeholder for name
                    action: {
                        placeholder: 'Your name'
                    }
                });
            }).then(function(res) { // get the name
                botui.message.add({
                    content: 'Hello ' + res.value + ', ' +
                        'What do you want to know about Nigeria?'
                });
            })
            
            
            .then(function() { // The questions the bot can answer, set 1
               return botui.action.button({
                   delay: 1000,
                   loading: true,
                   action: [{
                       text: 'Present Economy',
                       value: 'economy'
                   }, {
                       text: 'Natural resources',
                       value: 'natural'
                   }, {
                       text: 'Available Seaports',
                       value: 'seaports'
                   }, {
                       text: 'Religion',
                       value: 'religion'
                   }, {
                       text: 'National parks',
                       value: 'parks'
                   }, {
                       text: 'Recent history',
                       value: 'history'
                   }, {
                       text: 'Sports',
                       value: 'sports'
                   }, {
                    text: 'Population',
                    value: 'population'
                   }, {
                    text: 'Law',
                    value: 'law'
                   }, {
                       text: 'Music and Film',
                       value: 'music'
                   }]
               });
           })
           .then(function(res) { //the answer to bot questions
               var message;
         
               if (res.value === "economy") {
                   message =
                       'Nigeria is classified as a mixed economy emerging market. It has reached lower middle income status according to the World Bank, with its abundant supply of natural resources, well-developed financial, legal, communications, transport sectors and stock exchange, which is the second largest in Africa.';
               } else if (res.value == "natural") {
                   message =
                   'Nigeria has the following natural resources ' +
                       '<br> Coal <br> Cocoa <br>' +
                       'Oil and Gas'
                       '<br>Cement <br>Cotton <br> Limestone' +
                       '<br> Gold <br> Ignite';
               } else if (res.value === "seaports") {
                   message =
                   'Nigeria has the following seaports ' +
                   '<br> Tincan Island seaport <br> Apapa seaport <br>' +
                   'Calabar seaport <br> Portharcourt seaport' +
                   '<br>Warri seaport <br>Sapele seaport <br> Elemele seaport' +
                   '<br> Onne port';
               } else if (res.value === "religion") {
                   message =
                       'Nigeria is almost divided half and half between followers of Islam and Christianity. Traditional religions are also followed. Most Muslims reside in the north and Christians mostly are in the south.';
               } else if (res.value === "parks") {
                   message =
                       'The national parks in Nigeria includes: <br> Kainji <br> Gashaka Gumti <br> Cross River <br> Kamuku <br> Chad Basin <br> Old Oyo <br> Okomu <br>Yankari';
               } else if (res.value === "history") {
                   message =
                       'In 1999, Olusegun Obasanjo became the new elected president. This ended almost thirty three years of rule by the military. Despite public opinion that the 1999 and 2003 election were unfair, there has been improvement in reducing government corruption and increasing development. In 2007, elections brought Umaru Yar’Adua of the People’s Democratic Party to power. <br> After Yar’Adua died in 2010, Dr. Goodluck Ebele Jonathan became the president. <br> The oil producing region in the Niger Delta has caused ethnic violence. In 2015, Mohammadu Buhari became the president. He was re-elected in 2019.';
               } else if (res.value === "sports") {
                   message =
                       'Football is the most popular sport. Nigerians engage in other sports activities like: <br> Table Tennis <br> Volley ball <br> Basket ball <br> Swimming';
               } else if (res.value === "population") {
                   message =
                       'The population of Nigerian is estimated at 200,962,417 million (2019).';
               } else if (res.value === "law") {
                 message =
                     'Nigeria has four distinct legal systems which are English law, common law, customary law, and Sharia law. Each is used in different circumstances and regions <br> The highest court in the judicial branch is the Supreme Court of Nigeria';
             } else if (res.value === "music") {
                 message =
                     'West African highlife, Afrobeat, and palm-wine music are part of Nigerian music. <br>The film industry is known as Nollywood. This is the second largest movie producer in the world. Most studios are based in Lagos and Enugu.';
             }
               return botui.message.add({
                   type: 'html',
                   delay: 1000,
                   loading: true,
                   content: message
               });
           })


            
            .then(function() { // The questions the bot can answer, set 2
               return botui.action.button({
                   delay: 1000,
                   loading: true,
                   action: [{
                       text: 'Present Economy',
                       value: 'economy'
                   }, {
                       text: 'Natural resources',
                       value: 'natural'
                   }, {
                       text: 'Available Seaports',
                       value: 'seaports'
                   }, {
                       text: 'Religion',
                       value: 'religion'
                   }, {
                       text: 'National parks',
                       value: 'parks'
                   }, {
                       text: 'Recent history',
                       value: 'history'
                   }, {
                       text: 'Sports',
                       value: 'sports'
                   }, {
                    text: 'Population',
                    value: 'population'
                   }, {
                    text: 'Law',
                    value: 'law'
                   }, {
                       text: 'Music and Film',
                       value: 'music'
                   }]
               });
           })
           .then(function(res) { //the answer to bot questions
               var message;
         
               if (res.value === "economy") {
                   message =
                       'Nigeria is classified as a mixed economy emerging market. It has reached lower middle income status according to the World Bank, with its abundant supply of natural resources, well-developed financial, legal, communications, transport sectors and stock exchange, which is the second largest in Africa.';
               } else if (res.value == "natural") {
                   message =
                   'Nigeria has the following natural resources ' +
                       '<br> Coal <br> Cocoa <br>' +
                       'Oil and Gas'
                       '<br>Cement <br>Cotton <br> Limestone' +
                       '<br> Gold <br> Ignite';
               } else if (res.value === "seaports") {
                   message =
                   'Nigeria has the following seaports ' +
                   '<br> Tincan Island seaport <br> Apapa seaport <br>' +
                   'Calabar seaport <br> Portharcourt seaport' +
                   '<br>Warri seaport <br>Sapele seaport <br> Elemele seaport' +
                   '<br> Onne port';
               } else if (res.value === "religion") {
                   message =
                       'Nigeria is almost divided half and half between followers of Islam and Christianity. Traditional religions are also followed. Most Muslims reside in the north and Christians mostly are in the south.';
               } else if (res.value === "parks") {
                   message =
                       'The national parks in Nigeria includes: <br> Kainji <br> Gashaka Gumti <br> Cross River <br> Kamuku <br> Chad Basin <br> Old Oyo <br> Okomu <br>Yankari';
               } else if (res.value === "history") {
                   message =
                       'In 1999, Olusegun Obasanjo became the new elected president. This ended almost thirty three years of rule by the military. Despite public opinion that the 1999 and 2003 election were unfair, there has been improvement in reducing government corruption and increasing development. In 2007, elections brought Umaru Yar’Adua of the People’s Democratic Party to power. <br> After Yar’Adua died in 2010, Dr. Goodluck Ebele Jonathan became the president. <br> The oil producing region in the Niger Delta has caused ethnic violence. In 2015, Mohammadu Buhari became the president. He was re-elected in 2019.';
               } else if (res.value === "sports") {
                   message =
                       'Football is the most popular sport. Nigerians engage in other sports activities like: <br> Table Tennis <br> Volley ball <br> Basket ball <br> Swimming';
               } else if (res.value === "population") {
                   message =
                       'The population of Nigerian is estimated at 200,962,417 million (2019).';
               } else if (res.value === "law") {
                 message =
                     'Nigeria has four distinct legal systems which are English law, common law, customary law, and Sharia law. Each is used in different circumstances and regions <br> The highest court in the judicial branch is the Supreme Court of Nigeria';
             } else if (res.value === "music") {
                 message =
                     'West African highlife, Afrobeat, and palm-wine music are part of Nigerian music. <br>The film industry is known as Nollywood. This is the second largest movie producer in the world. Most studios are based in Lagos and Enugu.';
             }
               return botui.message.add({
                   type: 'html',
                   delay: 1000,
                   loading: true,
                   content: message
               });
           })




           
           .then(function() { // The questions the bot can answer, set 3
            return botui.action.button({
                delay: 1000,
                loading: true,
                action: [{
                    text: 'Present Economy',
                    value: 'economy'
                }, {
                    text: 'Natural resources',
                    value: 'natural'
                }, {
                    text: 'Available Seaports',
                    value: 'seaports'
                }, {
                    text: 'Religion',
                    value: 'religion'
                }, {
                    text: 'National parks',
                    value: 'parks'
                }, {
                    text: 'Recent history',
                    value: 'history'
                }, {
                    text: 'Sports',
                    value: 'sports'
                }, {
                 text: 'Population',
                 value: 'population'
                }, {
                 text: 'Law',
                 value: 'law'
                }, {
                    text: 'Music and Film',
                    value: 'music'
                }]
            });
        })
        .then(function(res) { //the answer to bot questions
            var message;
      
            if (res.value === "economy") {
                message =
                    'Nigeria is classified as a mixed economy emerging market. It has reached lower middle income status according to the World Bank, with its abundant supply of natural resources, well-developed financial, legal, communications, transport sectors and stock exchange, which is the second largest in Africa.';
            } else if (res.value == "natural") {
                message =
                'Nigeria has the following natural resources ' +
                    '<br> Coal <br> Cocoa <br>' +
                    'Oil and Gas'
                    '<br>Cement <br>Cotton <br> Limestone' +
                    '<br> Gold <br> Ignite';
            } else if (res.value === "seaports") {
                message =
                'Nigeria has the following seaports ' +
                '<br> Tincan Island seaport <br> Apapa seaport <br>' +
                'Calabar seaport <br> Portharcourt seaport' +
                '<br>Warri seaport <br>Sapele seaport <br> Elemele seaport' +
                '<br> Onne port';
            } else if (res.value === "religion") {
                message =
                    'Nigeria is almost divided half and half between followers of Islam and Christianity. Traditional religions are also followed. Most Muslims reside in the north and Christians mostly are in the south.';
            } else if (res.value === "parks") {
                message =
                    'The national parks in Nigeria includes: <br> Kainji <br> Gashaka Gumti <br> Cross River <br> Kamuku <br> Chad Basin <br> Old Oyo <br> Okomu <br>Yankari';
            } else if (res.value === "history") {
                message =
                    'In 1999, Olusegun Obasanjo became the new elected president. This ended almost thirty three years of rule by the military. Despite public opinion that the 1999 and 2003 election were unfair, there has been improvement in reducing government corruption and increasing development. In 2007, elections brought Umaru Yar’Adua of the People’s Democratic Party to power. <br> After Yar’Adua died in 2010, Dr. Goodluck Ebele Jonathan became the president. <br> The oil producing region in the Niger Delta has caused ethnic violence. In 2015, Mohammadu Buhari became the president. He was re-elected in 2019.';
            } else if (res.value === "sports") {
                message =
                    'Football is the most popular sport. Nigerians engage in other sports activities like: <br> Table Tennis <br> Volley ball <br> Basket ball <br> Swimming';
            } else if (res.value === "population") {
                message =
                    'The population of Nigerian is estimated at 200,962,417 million (2019).';
            } else if (res.value === "law") {
              message =
                  'Nigeria has four distinct legal systems which are English law, common law, customary law, and Sharia law. Each is used in different circumstances and regions <br> The highest court in the judicial branch is the Supreme Court of Nigeria';
          } else if (res.value === "music") {
              message =
                  'West African highlife, Afrobeat, and palm-wine music are part of Nigerian music. <br>The film industry is known as Nollywood. This is the second largest movie producer in the world. Most studios are based in Lagos and Enugu.';
          }
            return botui.message.add({
                type: 'html',
                delay: 1000,
                loading: true,
                content: message
            });
        })



        
        .then(function() { // The questions the bot can answer, set 4
         return botui.action.button({
             delay: 1000,
             loading: true,
             action: [{
                 text: 'Present Economy',
                 value: 'economy'
             }, {
                 text: 'Natural resources',
                 value: 'natural'
             }, {
                 text: 'Available Seaports',
                 value: 'seaports'
             }, {
                 text: 'Religion',
                 value: 'religion'
             }, {
                 text: 'National parks',
                 value: 'parks'
             }, {
                 text: 'Recent history',
                 value: 'history'
             }, {
                 text: 'Sports',
                 value: 'sports'
             }, {
              text: 'Population',
              value: 'population'
             }, {
              text: 'Law',
              value: 'law'
             }, {
                 text: 'Music and Film',
                 value: 'music'
             }]
         });
     })
     .then(function(res) { //the answer to bot questions
         var message;
   
         if (res.value === "economy") {
             message =
                 'Nigeria is classified as a mixed economy emerging market. It has reached lower middle income status according to the World Bank, with its abundant supply of natural resources, well-developed financial, legal, communications, transport sectors and stock exchange, which is the second largest in Africa.';
         } else if (res.value === "natural") {
             message =
             'Nigeria has the following natural resources ' +
                 '<br> Coal <br> Cocoa <br>' +
                 'Oil and Gas'
                 '<br>Cement <br>Cotton <br> Limestone' +
                 '<br> Gold <br> Ignite';
         } else if (res.value === "seaports") {
             message =
             'Nigeria has the following seaports ' +
             '<br> Tincan Island seaport <br> Apapa seaport <br>' +
             'Calabar seaport <br> Portharcourt seaport' +
             '<br>Warri seaport <br>Sapele seaport <br> Elemele seaport' +
             '<br> Onne port';
         } else if (res.value === "religion") {
             message =
                 'Nigeria is almost divided half and half between followers of Islam and Christianity. Traditional religions are also followed. Most Muslims reside in the north and Christians mostly are in the south.';
         } else if (res.value === "parks") {
             message =
                 'The national parks in Nigeria includes: <br> Kainji <br> Gashaka Gumti <br> Cross River <br> Kamuku <br> Chad Basin <br> Old Oyo <br> Okomu <br>Yankari';
         } else if (res.value === "history") {
             message =
                 'In 1999, Olusegun Obasanjo became the new elected president. This ended almost thirty three years of rule by the military. Despite public opinion that the 1999 and 2003 election were unfair, there has been improvement in reducing government corruption and increasing development. In 2007, elections brought Umaru Yar’Adua of the People’s Democratic Party to power. <br> After Yar’Adua died in 2010, Dr. Goodluck Ebele Jonathan became the president. <br> The oil producing region in the Niger Delta has caused ethnic violence. In 2015, Mohammadu Buhari became the president. He was re-elected in 2019.';
         } else if (res.value === "sports") {
             message =
                 'Football is the most popular sport. Nigerians engage in other sports activities like: <br> Table Tennis <br> Volley ball <br> Basket ball <br> Swimming';
         } else if (res.value === "population") {
             message =
                 'The population of Nigerian is estimated at 200,962,417 million (2019).';
         } else if (res.value === "law") {
           message =
               'Nigeria has four distinct legal systems which are English law, common law, customary law, and Sharia law. Each is used in different circumstances and regions <br> The highest court in the judicial branch is the Supreme Court of Nigeria';
       } else if (res.value === "music") {
           message =
               'West African highlife, Afrobeat, and palm-wine music are part of Nigerian music. <br>The film industry is known as Nollywood. This is the second largest movie producer in the world. Most studios are based in Lagos and Enugu.';
       }
         return botui.message.add({
             type: 'html',
             delay: 1000,
             loading: true,
             content: message
         });
     })



     
     .then(function() { // The questions the bot can answer, set 5
      return botui.action.button({
          delay: 1000,
          loading: true,
          action: [{
              text: 'Present Economy',
              value: 'economy'
          }, {
              text: 'Natural resources',
              value: 'natural'
          }, {
              text: 'Available Seaports',
              value: 'seaports'
          }, {
              text: 'Religion',
              value: 'religion'
          }, {
              text: 'National parks',
              value: 'parks'
          }, {
              text: 'Recent history',
              value: 'history'
          }, {
              text: 'Sports',
              value: 'sports'
          }, {
           text: 'Population',
           value: 'population'
          }, {
           text: 'Law',
           value: 'law'
          }, {
              text: 'Music and Film',
              value: 'music'
          }]
      });
  })
  .then(function(res) { //the answer to bot questions
      var message;

      if (res.value === "economy") {
          message =
              'Nigeria is classified as a mixed economy emerging market. It has reached lower middle income status according to the World Bank, with its abundant supply of natural resources, well-developed financial, legal, communications, transport sectors and stock exchange, which is the second largest in Africa.';
      } else if (res.value == "natural") {
          message =
          'Nigeria has the following natural resources ' +
              '<br> Coal <br> Cocoa <br>' +
              'Oil and Gas'
              '<br>Cement <br>Cotton <br> Limestone' +
              '<br> Gold <br> Ignite';
      } else if (res.value === "seaports") {
          message =
          'Nigeria has the following seaports ' +
          '<br> Tincan Island seaport <br> Apapa seaport <br>' +
          'Calabar seaport <br> Portharcourt seaport' +
          '<br>Warri seaport <br>Sapele seaport <br> Elemele seaport' +
          '<br> Onne port';
      } else if (res.value === "religion") {
          message =
              'Nigeria is almost divided half and half between followers of Islam and Christianity. Traditional religions are also followed. Most Muslims reside in the north and Christians mostly are in the south.';
      } else if (res.value === "parks") {
          message =
              'The national parks in Nigeria includes: <br> Kainji <br> Gashaka Gumti <br> Cross River <br> Kamuku <br> Chad Basin <br> Old Oyo <br> Okomu <br>Yankari';
      } else if (res.value === "history") {
          message =
              'In 1999, Olusegun Obasanjo became the new elected president. This ended almost thirty three years of rule by the military. Despite public opinion that the 1999 and 2003 election were unfair, there has been improvement in reducing government corruption and increasing development. In 2007, elections brought Umaru Yar’Adua of the People’s Democratic Party to power. <br> After Yar’Adua died in 2010, Dr. Goodluck Ebele Jonathan became the president. <br> The oil producing region in the Niger Delta has caused ethnic violence. In 2015, Mohammadu Buhari became the president. He was re-elected in 2019.';
      } else if (res.value === "sports") {
          message =
              'Football is the most popular sport. Nigerians engage in other sports activities like: <br> Table Tennis <br> Volley ball <br> Basket ball <br> Swimming';
      } else if (res.value === "population") {
          message =
              'The population of Nigerian is estimated at 200,962,417 million (2019).';
      } else if (res.value === "law") {
        message =
            'Nigeria has four distinct legal systems which are English law, common law, customary law, and Sharia law. Each is used in different circumstances and regions <br> The highest court in the judicial branch is the Supreme Court of Nigeria';
    } else if (res.value === "music") {
        message =
            'West African highlife, Afrobeat, and palm-wine music are part of Nigerian music. <br>The film industry is known as Nollywood. This is the second largest movie producer in the world. Most studios are based in Lagos and Enugu.';
    }
      return botui.message.add({
          type: 'html',
          delay: 1000,
          loading: true,
          content: message
      });
  })



            
  .then(function() { // The questions the bot can answer, set 6
   return botui.action.button({
       delay: 1000,
       loading: true,
       action: [{
           text: 'Present Economy',
           value: 'economy'
       }, {
           text: 'Natural resources',
           value: 'natural'
       }, {
           text: 'Available Seaports',
           value: 'seaports'
       }, {
           text: 'Religion',
           value: 'religion'
       }, {
           text: 'National parks',
           value: 'parks'
       }, {
           text: 'Recent history',
           value: 'history'
       }, {
           text: 'Sports',
           value: 'sports'
       }, {
        text: 'Population',
        value: 'population'
       }, {
        text: 'Law',
        value: 'law'
       }, {
           text: 'Music and Film',
           value: 'music'
       }]
   });
})
.then(function(res) { //the answer to bot questions
   var message;

   if (res.value === "economy") {
       message =
           'Nigeria is classified as a mixed economy emerging market. It has reached lower middle income status according to the World Bank, with its abundant supply of natural resources, well-developed financial, legal, communications, transport sectors and stock exchange, which is the second largest in Africa.';
   } else if (res.value == "natural") {
       message =
       'Nigeria has the following natural resources ' +
           '<br> Coal <br> Cocoa <br>' +
           'Oil and Gas'
           '<br>Cement <br>Cotton <br> Limestone' +
           '<br> Gold <br> Ignite';
   } else if (res.value === "seaports") {
       message =
       'Nigeria has the following seaports ' +
       '<br> Tincan Island seaport <br> Apapa seaport <br>' +
       'Calabar seaport <br> Portharcourt seaport' +
       '<br>Warri seaport <br>Sapele seaport <br> Elemele seaport' +
       '<br> Onne port';
   } else if (res.value === "religion") {
       message =
           'Nigeria is almost divided half and half between followers of Islam and Christianity. Traditional religions are also followed. Most Muslims reside in the north and Christians mostly are in the south.';
   } else if (res.value === "parks") {
       message =
           'The national parks in Nigeria includes: <br> Kainji <br> Gashaka Gumti <br> Cross River <br> Kamuku <br> Chad Basin <br> Old Oyo <br> Okomu <br>Yankari';
   } else if (res.value === "history") {
       message =
           'In 1999, Olusegun Obasanjo became the new elected president. This ended almost thirty three years of rule by the military. Despite public opinion that the 1999 and 2003 election were unfair, there has been improvement in reducing government corruption and increasing development. In 2007, elections brought Umaru Yar’Adua of the People’s Democratic Party to power. <br> After Yar’Adua died in 2010, Dr. Goodluck Ebele Jonathan became the president. <br> The oil producing region in the Niger Delta has caused ethnic violence. In 2015, Mohammadu Buhari became the president. He was re-elected in 2019.';
   } else if (res.value === "sports") {
       message =
           'Football is the most popular sport. Nigerians engage in other sports activities like: <br> Table Tennis <br> Volley ball <br> Basket ball <br> Swimming';
   } else if (res.value === "population") {
       message =
           'The population of Nigerian is estimated at 200,962,417 million (2019).';
   } else if (res.value === "law") {
     message =
         'Nigeria has four distinct legal systems which are English law, common law, customary law, and Sharia law. Each is used in different circumstances and regions <br> The highest court in the judicial branch is the Supreme Court of Nigeria';
 } else if (res.value === "music") {
     message =
         'West African highlife, Afrobeat, and palm-wine music are part of Nigerian music. <br>The film industry is known as Nollywood. This is the second largest movie producer in the world. Most studios are based in Lagos and Enugu.';
 }
   return botui.message.add({
       type: 'html',
       delay: 1000,
       loading: true,
       content: message
   });
})



.then(function() {
   botui.message.add({ // show a message
       delay: 1000,
       loading: true,
       content: 'Do you have more questions?'
   })

})


            .then(function() { //confirm if user has more questions
               return botui.action.button({
                   delay: 1000,
                   loading: true,
                   action: [{
                       text: "No! I don't have any more questions",
                       value: 'noquestion'
                   }, {
                       text: 'Yes! I have more questions',
                       value: 'question'
                   }]
               });
           })
           
           
           
           
           
           .then(function(res) { // responses to question confirmation
               var message;

               if (res.value === "noquestion") {
                   message =
                       'I am so excited you learnt quite a lot about Nigeria today!';
               } else if (res.value === "question") {
                   message =
                       'For more questions, please visit the Facts section of this website ' +
                       '<a href="facts.html">HERE</a>';
               }
               return botui.message.add({
                   type: 'html',
                   delay: 1000,
                   loading: true,
                   content: message
               });
           }).then(function(res) { //farewell button
                return botui.action.button({
                    action: [{
                        delay: 3000,
                        loading: true,
                        text: 'This has been very enlightening, thank you!',
                        value: 'cool'
                    }]
                });
            }).then(function(index) {
                return botui.message.add({
                    delay: 2000,
                    loading: true,
                    content: 'You are welcome'
                });
            }).then(function(index) {
                return botui.action.button({
                    action: [{
                        delay: 1000,
                        loading: true,
                        text: 'Goodbye',
                        value: 'bye'
                    }]
                });
            }).then(function(index) { //closing message
                return botui.message.add({
                    delay: 1000,
                    loading: true,
                    content: 'Bye, hope to see you again.'
                });
            });

        });

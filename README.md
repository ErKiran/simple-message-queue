### INSTALLATION

Requeriments 
1. Node.js 
2. Rabbit MQ 

### Install Rabbit MQ Via Docker

`docker run --rm -it --hostname my-rabbit -p 15672:15672 -p 5672:5672 rabbitmq:3-management`

This will start up instance of Rabbit MQ on your local machine. 


### To run on Local Machine
* `git clone https://github.com/ErKiran/simple-message-queue.git`
* `cd simple-message-queue`
* `npm i`
* `npm start`
  
You can also open Rabbit MQ Management Portal on Port 15672.  

`http://localhost:15672/`

Since we are pushing 20 messages a second. Message in the queue pile up pretty Quickly. 

![image](docs/hacker.png)

And quickly if we switch to channels tab we can see we are using only mininum number of channel. Which will reduce Rabbit-MQ cost in greater amount. (Earlier I was creating channel inside `setInterval` function which was creating many channels and pretty quickly limit was reached.)

![image](docs/channels.png)


Then open 
`http://localhost:3000/` on browser.

You can view Hacker Text render on screen. 

![image](docs/screen.png)


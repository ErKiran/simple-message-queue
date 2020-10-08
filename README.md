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

If there's any error on the console. Then open 
`http://localhost:3000/` on browser.  

You can view Hacker Text render on screen. 

![image]('docs/screen.png')
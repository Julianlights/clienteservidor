'use strict'
const exec = require('child_process').exec
const Setting = use('App/Models/Setting')

//var Push = require('push.js')
class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
    
  }
  onMessage (message) {
  this.socket.broadcastToAll('message', message)
 console.log("Esto dijo el server al cliente") 
  console.log("Ya casi estalolololo")
  this.show(message)

}
 async show(message){
 let setting = await Setting.findOrFail(message)
 console.log(setting.userBd);
 console.log(setting.name);
 console.log('mysqldump' + ' --user='+ setting.$originalAttributes.userBd + ' --password='+setting.$originalAttributes.passwordBd+ ' -h 127.0.0.1 ' + setting.$originalAttributes.nameBd+ ' > ' + 'C:/Users/Jorge Julian Sanchez/Documents/respaldos/'+setting.$originalAttributes.name+'.sql')
 exec('mysqldump' + ' --user='+ setting.$originalAttributes.userBd + ' --password='+setting.$originalAttributes.passwordBd+ ' -h 127.0.0.1 ' + setting.$originalAttributes.nameBd+ ' > ' + 'C:/Users/Jorge Julian Sanchez/Documents/respaldos/'+setting.$originalAttributes.name+'.sql')

console.log("Simon se aplica")

}




}



module.exports = ChatController
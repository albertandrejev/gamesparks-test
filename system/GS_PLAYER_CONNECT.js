/*
from github
*/
var player = Spark.getPlayer();

var playerCollection = Spark.systemCollection("player");

var currentPlayerId = {$oid: player.getPlayerId()}
var players = playerCollection.find({online: true, _id: {'$ne': currentPlayerId}}, {_id: 1});
    
var playersOnline = [];
while(players.hasNext()) {
    var row = players.next();
    
    playersOnline.push(Spark.loadPlayer(row._id.$oid));
}


Spark.sendMessage({'event': 'onPlayerConnected', 'playerId': player.getPlayerId() }, playersOnline);
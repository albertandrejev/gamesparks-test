/*
From github
*/
var playerCollection = Spark.systemCollection("player");
var players = playerCollection.find({}, {"userName" : 1, "displayName" : 1, "online": 1});

Spark.setScriptData("players", players);
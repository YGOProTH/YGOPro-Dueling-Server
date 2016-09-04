var crypto = require('crypto');

module.exports = {
  encryptPassword: function(password){
    return crypto.createHash("md5").update(password).digest('hex');
  },
  randomString: function(length){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < length; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  },
  log: function(str){
    console.log('[' + this.timeStamp() + '] ' + str);
  },
  timeStamp: function(){
    var now = new Date();
    var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
    var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
    var suffix = ( time[0] < 12 ) ? "AM" : "PM";
    time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
    time[0] = time[0] || 12;
    for ( var i = 1; i < 3; i++ ) {
      if ( time[i] < 10 ) {
        time[i] = "0" + time[i];
      }
    }
    return date.join("/") + " " + time.join(":") + " " + suffix;
  },
  clone: function(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }
};

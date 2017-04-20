var hotel= {
  name:'The Quay',
  totalRooms:'40',
  bookedRooms:25,
  typesOfRoom:['twin','double','suite'],
  getAvil:function(){
    if (this.totalRooms>this.bookedRooms){
      return "We have rooms available";
    }
    else{
      return "We are fully booked"
    }
    }
  };

  var avail =hotel.getAvil()
  console.log(avail;

  var types=hotel.typesofRoom

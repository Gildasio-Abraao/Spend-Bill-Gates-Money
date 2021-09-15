import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{
        id: 1,
        title: "Big Mac",
        image: "big-mac.jpg",
        price: 2,
        quantity: 0
      },
      {
        id: 2,
        title: "Flip Flops",
        image: "flip-flops.jpg",
        price: 3,
        quantity: 0
      },
      {
        id: 3,
        title: "Coca-Cola Pack",
        image: "coca-cola-pack.jpg",
        price: 5,
        quantity: 0
      },
      {
        id: 4,
        title: "Movie Ticket",
        image: "movie-ticket.jpg",
        price: 12,
        quantity: 0
      },
      {
        id: 5,
        title: "Book",
        image: "book.jpg",
        price: 15,
        quantity: 0
      },
      {
        id: 6,
        title: "Lobster Dinner",
        image: "lobster-dinner.jpg",
        price: 45,
        quantity: 0
      },
      {
        id: 7,
        title: "Video Game",
        image: "video-game.jpg",
        price: 60,
        quantity: 0
      },
      {
        id: 8,
        title: "Amazon Echo",
        image: "amazon-echo.jpg",
        price: 99,
        quantity: 0
      },
      {
        id: 9,
        title: "Year of Netflix",
        image: "year-of-netflix.jpg",
        price: 10,
        quantity: 0
      },
      {
        id: 10,
        title: "Air Jordans",
        image: "air-jordans.jpg",
        price: 125,
        quantity: 0
      },
      {
        id: 11,
        title: "Airpods",
        image: "airpods.jpg",
        price: 199,
        quantity: 0
      },
      {
        id: 12,
        title: "Gaming Console",
        image: "gaming-console.jpg",
        price: 299,
        quantity: 0
      },
      {
        id: 13,
        title: "Drone",
        image: "drone.jpg",
        price: 350,
        quantity: 0
      },
      {
        id: 14,
        title: "Smartphone",
        image: "smartphone.jpg",
        price: 699,
        quantity: 0
      },
      {
        id: 15,
        title: "Bike",
        image: "bike.jpg",
        price: 800,
        quantity: 0
      },
      {
        id: 16,
        title: "Kitten",
        image: "kitten.jpg",
        price: 1500,
        quantity: 0
      },
      {
        id: 17,
        title: "Puppy",
        image: "puppy.jpg",
        price: 1500,
        quantity: 0
      },
      {
        id: 18,
        title: "Auto Rickshaw",
        image: "auto-rickshaw.jpg",
        price: 2300,
        quantity: 0
      },
      {
        id: 19,
        title: "Horse",
        image: "horse.jpg",
        price: 2500,
        quantity: 0
      },
      {
        id: 20,
        title: "Acre of Farmland",
        image: "acre-of-farmland.jpg",
        price: 3000,
        quantity: 0
      },
      {
        id: 21,
        title: "Designer Handbag",
        image: "designer-handbag.jpg",
        price: 5500,
        quantity: 0
      },
      {
        id: 22,
        title: "Hot Tub",
        image: "hot-tub.jpg",
        price: 6000,
        quantity: 0
      },
      {
        id: 23,
        title: "Luxury Wine",
        image: "luxury-wine.jpg",
        price: 7000,
        quantity: 0
      },
      {
        id: 24,
        title: "Diamond Ring",
        image: "diamond-ring.jpg",
        price: 10000,
        quantity: 0
      },
      {
        id: 25,
        title: "Jet Ski",
        image: "jet-ski.jpg",
        price: 12000,
        quantity: 0
      },
      {
        id: 26,
        title: "Rolex",
        image: "rolex.jpg",
        price: 15000,
        quantity: 0
      },
      {
        id: 27,
        title: "Ford F-150",
        image: "ford-f-150.jpg",
        price: 30000,
        quantity: 0
      },
      {
        id: 28,
        title: "Tesla",
        image: "tesla.jpg",
        price: 75000,
        quantity: 0
      },
      {
        id: 29,
        title: "Monster Truck",
        image: "monster-truck.jpg",
        price: 15000,
        quantity: 0
      },
      {
        id: 30,
        title: "Ferrari",
        image: "ferrari.jpg",
        price: 250000,
        quantity: 0
      },
      {
        id: 31,
        title: "Single Family Home",
        image: "single-family-home.jpg",
        price: 300000,
        quantity: 0
      },
      {
        id: 32,
        title: "Gold Bar",
        image: "gold-bar.jpg",
        price: 700000,
        quantity: 0
      },
      {
        id: 33,
        title: "McDonalds Franchise",
        image: "mcdonalds-franchise.jpg",
        price: 1500000,
        quantity: 0
      },
      {
        id: 34,
        title: "Superbowl Ad",
        image: "superbowl-ad.jpg",
        price: 5250000,
        quantity: 0
      },
      {
        id: 35,
        title: "Yacht",
        image: "yacht.jpg",
        price: 7500000,
        quantity: 0
      },
      {
        id: 36,
        title: "M1 Abrams",
        image: "m1-abrams.jpg",
        price: 8000000,
        quantity: 0
      },
      {
        id: 37,
        title: "Formula 1 Car",
        image: "formula-1-car.jpg",
        price: 15000000,
        quantity: 0
      },
      {
        id: 38,
        title: "Apache Helicopter",
        image: "apache-helicopter.jpg",
        price: 31000000,
        quantity: 0
      },
      {
        id: 39,
        title: "Mansion",
        image: "mansion.jpg",
        price: 45000000,
        quantity: 0
      },
      {
        id: 40,
        title: "Make a Movie",
        image: "make-a-movie.jpg",
        price: 100000000,
        quantity: 0
      },
      {
        id: 41,
        title: "Boeing 747",
        image: "boeing-747.jpg",
        price: 148000000,
        quantity: 0
      },
      {
        id: 42,
        title: "Mona Lisa",
        image: "mona-lisa.jpg",
        price: 780000000,
        maxQuantity: 1,
        quantity: 0
      },
      {
        id: 43,
        title: "Skyscraper",
        image: "skyscraper.jpg",
        price: 850000000,
        quantity: 0
      },
      {
        id: 44,
        title: "Cruise Ship",
        image: "cruise-ship.jpg",
        price: 930000000,
        quantity: 0
      },
      {
        id: 45,
        title: "NBA Team",
        image: "nba-team.jpg",
        price: 2120000000,
        maxQuantity: 30,
        quantity: 0
      }
    ],

    myMoney: {
      default: 100000000000,
      total: 0
    }
  },

  mutations: {
    purchase(payload) {
      payload.products.forEach(product => {
        product.quantity = parseInt(product.quantity);
      });
    }
  },

  getters: {

    //Alteração de valores
    money(state) {
      var total = state.products.reduce(getTotal, 0);

      function getTotal(total, product) {
        //Operações lógicas para não dar conflito no valor total
        if (product.quantity == '') {
          product.quantity = 0;
        } else if (product.quantity > product.maxQuantity) {
          product.quantity = product.maxQuantity
        } else if(product.quantity*product.price > state.myMoney.default){
          product.quantity = 0
        }
        //return
        return total + (parseInt(product.quantity) * product.price);
      }
      state.myMoney.total = total;
      return (state.myMoney.default-total);
    },

    //Produtos passado para o componente
    products(state) {
      return state.products
    }

  }
})
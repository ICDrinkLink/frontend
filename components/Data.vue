<script>
  export default {
    data () {
      return {
        drinks: {
          "beer": {
            "name": "Beer",
              "items": {
              "carlsberg": {
                "name": "Carlsberg",
                  "abv": 3.8
              },
              "stella_artois": {
                "name": "Stella Artois",
                  "abv": 5.2
              },
              "budweiser": {
                "name": "Budweiser",
                  "abv": 4.0
              },
              "coors_light": {
                "name": "Coors Light",
                  "abv": 4.2
              },
              "estrella_damm": {
                "name": "Estrella Damm",
                  "abv": 4.6
              },
              "carling": {
                "name": "Carling",
                  "abv": 4.0
              },
              "fosters": {
                "name": "Fosters",
                  "abv": 5.5
              },
              "corona": {
                "name": "Corona",
                  "abv": 4.5
              },
              "heineken": {
                "name": "Heineken",
                  "abv": 5.0
              },
              "san_miguel": {
                "name": "San Miguel",
                  "abv": 5
              },
              "peroni": {
                "name": "Peroni Nastro Azzuro",
                  "abv": 5.2
              },
              "guiness": {
                "name": "Guiness",
                  "abv": 4.3
              },
              "tiger_beer": {
                "name": "Tiger Beer",
                  "abv": 5
              },
              "jaipur": {
                "name": "Jaipur",
                  "abv": 4.8
              },
              "bishops_finger": {
                "name": "Bishop's Finger",
                  "abv": 5.4
              },
              "doom_bar": {
                "name": "Doom Bar",
                  "abv": 4.3
              },
              "punk_ipa": {
                "name": "Brew Dog Punk IPA",
                  "abv": 5.6
              },
              "leffe_blond": {
                "name": "Leffe Blond",
                  "abv": 6.6
              },
              "leffe_tripel": {
                "name": "Leffe Tripel",
                  "abv": 8.5
              },
              "karmeliet": {
                "name": "Karmeliet",
                  "abv": 8.4
              },
              "trappist": {
                "name": "Trappist",
                  "abv": 7.5
              }
            }
          },
            "cider": {
            "name": "Cider",
              "items": {
              "bulmers": {
                "name": "Bulmers",
                  "abv": 4.5
              },
              "carlingc": {
                "name": "Carling Cider",
                  "abv": 3.7
              },
              "old_mout": {
                "name": "Old Mout",
                  "abv": 4
              },
              "strongbow": {
                "name": "Strongbow",
                  "abv": 4
              },
              "rekordelig": {
                "name": "Rekordelig",
                  "abv": 4
              },
              "koppaberg": {
                "name": "Koppaberg",
                  "abv": 4
              },
              "stella_cidre": {
                "name": "Stella Cidre",
                  "abv":4.5
              },
              "aspall": {
                "name": "Aspall Cider",
                  "abv": 5.5
              },
              "black_star": {
                "name": "Black Star",
                  "abv": 4.5
              },
              "blackthorn": {
                "name": "Blackthorn Cider",
                  "abv": 4.7
              },
              "brothers": {
                "name": "Brothers Cider",
                  "abv": 4.0
              },
              "hpbulmer": {
                "name": "H.P. Bulmer",
                  "abv": 4.5
              },
              "burrow_hill": {
                "name": "Burrow Hill Cider",
                  "abv": 6
              },
              "frosty_jack": {
                "name": "Frosty Jack",
                  "abv": 7.5
              },
              "k": {
                "name": "K Cider",
                  "abv": 8.4
              },
              "kingstone": {
                "name": "Kingstone Press Cider",
                  "abv": 4.7
              },
              "magners": {
                "name": "Magners",
                  "abv": 4.5
              },
              "merrydown": {
                "name": "Merrydown Cider",
                  "abv": 7.5
              },
              "old_rosie": {
                "name": "Old Rosie",
                  "abv": 7.3
              },
              "thatchers": {
                "name": "Thatcher's Cider",
                  "abv": 4.8
              },
              "three_hammers": {
                "name": "Three Hammmers",
                  "abv": 7.5
              },
              "white_star": {
                "name": "White Star",
                  "abv": 7.5
              },
              "woodpecker": {
                "name": "Woodpecker Cider",
                  "abv": 3.5
              }
            }
          },
            "red_wine": {
            "name": "Red Wine",
              "items": {
              "cabernet_sauvignon": {
                "name": "Carbernet Sauvignon",
                  "abv": 14
              },
              "malbec": {
                "name": "Malbec",
                  "abv": 14.25
              },
              "merlot": {
                "name": "Merlot",
                  "abv": 14
              },
              "pinot_noir": {
                "name": "Pinot Noir",
                  "abv": 12.5
              },
              "shiraz": {
                "name": "Shiraz",
                  "abv": 14.5
              },
              "zinfandel": {
                "name": "Zinfandel",
                  "abv": 14.75
              }
            }
          },
            "white_wine": {
            "name": "White Wine",
              "items": {
              "chardonnnay": {
                "name": "Chardonnay",
                  "abv": 13.75
              },
              "chenin_blanc": {
                "name": "Chenin Blanc",
                  "abv": 12.75
              },
              "muscat": {
                "name": "Muscat",
                  "abv": 8.5
              },
              "pinot_grigio": {
                "name": "Pinot Grigio",
                  "abv": 12.5
              },
              "riesling": {
                "name": "Riesling",
                  "abv": 9.5
              },
              "sauvignon_blanc": {
                "name": "Sauvignon Blanc",
                  "abv": 12.75
              }
            }
          },
            "rose": {
            "name": "Rosé",
              "items": {
              "rose": {
                "name": "Rosé",
                  "abv": 10.5
              }
            }
          },
            "spritis": {
            "name": "Spritis",
              "items": {
              "vodka": {
                "name": "Vodka",
                  "abv": 40
              },
              "tequila": {
                "name": "Tequila",
                  "abv": 38
              },
              "rum": {
                "name": "Rum",
                  "abv": 38
              },
              "whiskey": {
                "name": "Whiskey",
                  "abv": 40
              },
              "gin": {
                "name": "Gin",
                  "abv": 42
              },
              "jagermeister": {
                "name": "Jagermeister",
                  "abv": 35
              },
              "baileys": {
                "name": "Baileys",
                  "abv": 17
              },
              "aperol": {
                "name": "Aperol",
                  "abv": 11
              }
            }
          }
        },
        amounts: {
          "half_pint": {
            "name": "Half Pint",
            "amount": 284
          },
          "pint": {
            "name": "Pint",
            "amount": 568
          },
          "bottle": {
            "name": "Bottle",
            "amount": 600
          },
          "can": {
            "name": "Can",
            "amount": 440
          },
          "shot": {
            "name": "Shot",
            "amount": 25
          },
          "double_shot": {
            "name": "Double Shot",
            "amount": 50
          },
          "glass": {
            "name": "Glass",
            "amount": 175
          }
        }
      }
    }
  }
</script>

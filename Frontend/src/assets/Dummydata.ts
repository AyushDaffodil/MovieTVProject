export interface dataProps {
  adult?: boolean;
  backdrop_path?: string;
  id?: number;
  title?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  media_type?: string;
  original_language?: string;
  genre_ids?: number[];
  vote_count?: number;
  popularity?: number;
  release_date?: string
  vote_average?: number
  video?: boolean
  name?: string
}

export interface individualDummydataprops {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null;
  budget?: number;
  overview?: string
  release_date?: string
  genres?: {
    id: number;
    name: string;
  }[];
  name?: string
  homepage?: string;
  id?: number;
  imdb_id?: string;
  origin_country?: string[];
  original_language?: string;
  original_title?: string
  poster_path?: string
  vote_count?: number;
  runtime?: number
  vote_average?: number
  tagline?: string
  status?: string
  episode_run_time?: number[]
  first_air_date?: string
  last_air_date?: string
  seasons?: {
    episode_count?: number
  }[]
}


export const individualDummydata = {
  "adult": false,
  "backdrop_path": "/11vyKM09CHxWDjivjl4tldTllzG.jpg",
  "belongs_to_collection": null,
  "budget": 98,
  "genres": [
    {
      "id": 27,
      "name": "Horror"
    }
  ],
  "homepage": "https://www.theritualmovie.com/",
  "id": 1278950,
  "imdb_id": "tt32194932",
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_title": "The Ritual",
  "overview": "Two priests, one in crisis with his faith and the other confronting a turbulent past, must overcome their differences to perform a risky exorcism.",
  "popularity": 33.323,
  "poster_path": "/uubL8yvtEBjz3V7DFQHjCuSQO8w.jpg",
  "production_companies": [
    {
      "id": 238334,
      "logo_path": "/ro2InZqG15MJqjZiqiv069T9iYQ.png",
      "name": "Cinemachineshop",
      "origin_country": "US"
    },
    {
      "id": 50788,
      "logo_path": "/zli3Ez9omK3iuDutY1ystRiQOCt.png",
      "name": "Redbird Entertainment",
      "origin_country": "US"
    },
    {
      "id": 2100,
      "logo_path": "/lPsU64VTQPWk6JhK7uDzCjocoFj.png",
      "name": "Andrew Stevens Entertainment",
      "origin_country": "US"
    },
    {
      "id": 261780,
      "logo_path": null,
      "name": "MetaFilms",
      "origin_country": "US"
    },
    {
      "id": 199125,
      "logo_path": "/fJJZLnOmXWdsi1vflvEi2kC5iBc.png",
      "name": "Baweja Studios",
      "origin_country": "IN"
    },
    {
      "id": 121204,
      "logo_path": "/vbtvY4IxgUZk713rkmoTO4MHIac.png",
      "name": "BondIt Media Capital",
      "origin_country": "US"
    },
    {
      "id": 261781,
      "logo_path": null,
      "name": "Isro Productions",
      "origin_country": "US"
    },
    {
      "id": 261782,
      "logo_path": null,
      "name": "IFeelYouFilms",
      "origin_country": "US"
    },
    {
      "id": 96310,
      "logo_path": "/tBxSNuzARadiaBpIJ3qmdPG5BCz.png",
      "name": "LB Entertainment",
      "origin_country": "US"
    },
    {
      "id": 52738,
      "logo_path": null,
      "name": "Jeff Rice Films",
      "origin_country": "US"
    },
    {
      "id": 75267,
      "logo_path": "/nGvGzQ5x2OoeLSEQYkBPV0bzwoM.png",
      "name": "Eyevox",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2025-05-27",
  "revenue": 1528998,
  "runtime": 98,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "You must have faith.",
  "title": "The Ritual",
  "video": false,
  "vote_average": 6.076,
  "vote_count": 46
}




export const dummydata: dataProps[] = [
  {
    "adult": false,
    "backdrop_path": "/lkDYN0whyE82mcM20rwtwjbniKF.jpg",
    "id": 911430,
    "title": "F1 The Movie",
    "original_title": "F1 The Movie",
    "overview": "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.",
    "poster_path": "/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      28,
      18
    ],
    "popularity": 158.6501,
    "release_date": "2025-06-25",
    "video": false,
    "vote_average": 7.859,
    "vote_count": 99
  },
  {
    "adult": false,
    "backdrop_path": "/11vyKM09CHxWDjivjl4tldTllzG.jpg",
    "id": 1278950,
    "title": "The Ritual",
    "original_title": "The Ritual",
    "overview": "Al Pacino stars in the TRUE STORY of how two priests, one in crisis with his faith and the other confronting a turbulent past, must overcome their differences to perform a risky exorcism.",
    "poster_path": "/uubL8yvtEBjz3V7DFQHjCuSQO8w.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      27
    ],
    "popularity": 5.1732,
    "release_date": "2025-05-27",
    "video": false,
    "vote_average": 5.9,
    "vote_count": 24
  },
  {
    "adult": false,
    "backdrop_path": "/kyBOGOBUMdGWOhzECuosPSzoMpi.jpg",
    "id": 1071585,
    "title": "M3GAN 2.0",
    "original_title": "M3GAN 2.0",
    "overview": "After the underlying tech for M3GAN is stolen and misused by a powerful defense contractor to create a military-grade weapon known as Amelia, M3GAN's creator Gemma realizes that the only option is to resurrect M3GAN and give her a few upgrades, making her faster, stronger, and more lethal.",
    "poster_path": "/rugqCpq8yBGWaQW6dMY2DVOEW7e.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      28,
      27,
      878
    ],
    "popularity": 64.8093,
    "release_date": "2025-06-25",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 32
  },
  {
    "adult": false,
    "backdrop_path": "/l3ycQYwWmbz7p8otwbomFDXIEhn.jpg",
    "id": 803796,
    "title": "KPop Demon Hunters",
    "original_title": "KPop Demon Hunters",
    "overview": "When K-pop superstars Rumi, Mira and Zoey aren't selling out stadiums, they're using their secret powers to protect their fans from supernatural threats.",
    "poster_path": "/jfS5KEfiwsS35ieZvdUdJKkwLlZ.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      16,
      14,
      28,
      35,
      10402
    ],
    "popularity": 307.1306,
    "release_date": "2025-06-20",
    "video": false,
    "vote_average": 8.648,
    "vote_count": 216
  },
  {
    "adult": false,
    "backdrop_path": "/bajke0ThKJ2V2iHE9DDYOJGdS7a.jpg",
    "id": 1137350,
    "title": "The Phoenician Scheme",
    "original_title": "The Phoenician Scheme",
    "overview": "Wealthy businessman Zsa-zsa Korda appoints his only daughter, a nun, as sole heir to his estate. As Korda embarks on a new enterprise, they soon become the target of scheming tycoons, foreign terrorists, and determined assassins.",
    "poster_path": "/jtEqpy0K1iVuCebRwWqT6BZ6jLN.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      12,
      35
    ],
    "popularity": 84.023,
    "release_date": "2025-05-23",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 258
  },
  {
    "adult": false,
    "backdrop_path": "/g62G6aBcAcJv3ClCKmJgmHarHvq.jpg",
    "id": 1061474,
    "title": "Superman",
    "original_title": "Superman",
    "overview": "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
    "poster_path": "/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      28,
      12,
      878
    ],
    "popularity": 53.9639,
    "release_date": "2025-07-09",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/peAzdLKtT6VDWIfPQO9LJD1NCG4.jpg",
    "id": 1234821,
    "title": "Jurassic World Rebirth",
    "original_title": "Jurassic World Rebirth",
    "overview": "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades.",
    "poster_path": "/q0fGCmjLu42MPlSO9OYWpI5w86I.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      878,
      12,
      28
    ],
    "popularity": 103.9123,
    "release_date": "2025-07-01",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 13
  },
  {
    "adult": false,
    "backdrop_path": "/uKhBujLqYCcfU1kaxXHNCEyZnT.jpg",
    "id": 1227128,
    "title": "Raid 2",
    "original_title": "रेड २",
    "overview": "Set seven years after the events of the first film, it follows the return of IRS officer Amay Patnaik, who is attempting to take down a seemingly benevolent politician.",
    "poster_path": "/iY9GteV9Cf0G4m0tGakAXrpy6Bq.jpg",
    "media_type": "movie",
    "original_language": "hi",
    "genre_ids": [
      80,
      18,
      53
    ],
    "popularity": 17.7944,
    "release_date": "2025-05-01",
    "video": false,
    "vote_average": 6,
    "vote_count": 10
  },
  {
    "adult": false,
    "backdrop_path": "/unthV1mq9llhEinIMPcCUImFodt.jpg",
    "id": 617126,
    "title": "The Fantastic Four: First Steps",
    "original_title": "The Fantastic Four: First Steps",
    "overview": "Against the vibrant backdrop of a 1960s-inspired, retro-futuristic world, Marvel's First Family is forced to balance their roles as heroes with the strength of their family bond, while defending Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
    "poster_path": "/x26MtUlwtWD26d0G0FXcppxCJio.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      878,
      12
    ],
    "popularity": 42.9717,
    "release_date": "2025-07-23",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
    "id": 574475,
    "title": "Final Destination Bloodlines",
    "original_title": "Final Destination Bloodlines",
    "overview": "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
    "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      27,
      9648
    ],
    "popularity": 710.4403,
    "release_date": "2025-05-14",
    "video": false,
    "vote_average": 7.205,
    "vote_count": 1313
  },
  {
    "adult": false,
    "backdrop_path": "/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg",
    "id": 1087192,
    "title": "How to Train Your Dragon",
    "original_title": "How to Train Your Dragon",
    "overview": "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
    "poster_path": "/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      14,
      10751,
      28
    ],
    "popularity": 336.5434,
    "release_date": "2025-06-06",
    "video": false,
    "vote_average": 7.9,
    "vote_count": 434
  },
  {
    "adult": false,
    "backdrop_path": "/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
    "id": 1233413,
    "title": "Sinners",
    "original_title": "Sinners",
    "overview": "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
    "poster_path": "/yqsCU5XOP2mkbFamzAqbqntmfav.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      27,
      14,
      53
    ],
    "popularity": 142.2714,
    "release_date": "2025-04-16",
    "video": false,
    "vote_average": 7.556,
    "vote_count": 1664
  },
  {
    "adult": false,
    "backdrop_path": "/mBDoBHUZHHy9WG7dRFndjB8adhc.jpg",
    "id": 1022787,
    "title": "Elio",
    "original_title": "Elio",
    "overview": "Elio, a space fanatic with an active imagination, finds himself on a cosmic misadventure where he must form new bonds with eccentric alien lifeforms, navigate a crisis of intergalactic proportions and somehow discover who he is truly meant to be.",
    "poster_path": "/w2ARwtc1zoh0pyfwmyhpZHwuXgK.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      10751,
      35,
      12,
      16,
      878
    ],
    "popularity": 80.0691,
    "release_date": "2025-06-18",
    "video": false,
    "vote_average": 6.774,
    "vote_count": 95
  },
  {
    "adult": false,
    "backdrop_path": "/6WqqEjiycNvDLjbEClM1zCwIbDD.jpg",
    "id": 1100988,
    "title": "28 Years Later",
    "original_title": "28 Years Later",
    "overview": "Twenty-eight years since the rage virus escaped a biological weapons laboratory, now, still in a ruthlessly enforced quarantine, some have found ways to exist amidst the infected. One such group lives on a small island connected to the mainland by a single, heavily-defended causeway. When one member departs on a mission into the dark heart of the mainland, he discovers secrets, wonders, and horrors that have mutated not only the infected but other survivors as well.",
    "poster_path": "/361hRZoG91Nw6qXaIKuGoogQjix.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      27,
      53,
      878
    ],
    "popularity": 290.0167,
    "release_date": "2025-06-18",
    "video": false,
    "vote_average": 7.136,
    "vote_count": 328
  },
  {
    "adult": false,
    "backdrop_path": "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    "id": 552524,
    "title": "Lilo & Stitch",
    "original_title": "Lilo & Stitch",
    "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
    "poster_path": "/7c5VBuCbjZOk7lSfj9sMpmDIaKX.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      10751,
      878,
      35,
      12
    ],
    "popularity": 402.0964,
    "release_date": "2025-05-17",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 720
  },
  {
    "adult": false,
    "backdrop_path": "/r4X2xRrWleVgx0kahP27xRmm3ia.jpg",
    "id": 1083968,
    "title": "Locked",
    "original_title": "Locked",
    "overview": "When Eddie breaks into a luxury SUV, he steps into a deadly trap set by William, a self-proclaimed vigilante delivering his own brand of twisted justice. With no means of escape, Eddie must fight to survive in a ride where escape is an illusion, survival is a nightmare, and justice shifts into high gear.",
    "poster_path": "/hhkiqXpfpufwxVrdSftzeKIANl3.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      53,
      27
    ],
    "popularity": 22.8614,
    "release_date": "2025-03-20",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 200
  },
  {
    "adult": false,
    "backdrop_path": "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    "id": 950387,
    "title": "A Minecraft Movie",
    "original_title": "A Minecraft Movie",
    "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    "poster_path": "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      10751,
      35,
      12,
      14
    ],
    "popularity": 167.1867,
    "release_date": "2025-03-31",
    "video": false,
    "vote_average": 6.493,
    "vote_count": 1911
  },
  {
    "adult": false,
    "backdrop_path": "/lyOSmvb6mT78mi1Oi9NqFNrBAgo.jpg",
    "id": 1380682,
    "title": "The Last Rodeo",
    "original_title": "The Last Rodeo",
    "overview": "A retired rodeo legend risks it all to save his grandson. Facing his own painful past and the fears of his family, he enters a high-stakes bullriding competition as the oldest contestant ever. Along the way, he reconciles old wounds with his estranged daughter and proves that true courage is found in the fight for family.",
    "poster_path": "/cpATW9o83IwYqPkiT7WLqL2jxlF.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      18
    ],
    "popularity": 48.1933,
    "release_date": "2025-05-22",
    "video": false,
    "vote_average": 7.125,
    "vote_count": 16
  },
  {
    "adult": false,
    "backdrop_path": "/v67tbCB03CMcJRWit8CS7JdJp6.jpg",
    "id": 757725,
    "title": "Shadow Force",
    "original_title": "Shadow Force",
    "overview": "Kyrah and Isaac were once the leaders of a multinational special forces group called Shadow Force. They broke the rules by falling in love, and in order to protect their son, they go underground. With a large bounty on their heads, and the vengeful Shadow Force hot on their trail, one family's fight becomes all-out war.",
    "poster_path": "/7IEW24vBiZerZrDlgLVSUU3oT1C.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      28,
      18,
      53
    ],
    "popularity": 66.6961,
    "release_date": "2025-05-01",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 84
  },
  {
    "adult": false,
    "backdrop_path": "/qwK9soQmmJ7kRdjLZVXblw3g7AQ.jpg",
    "id": 7451,
    "title": "xXx",
    "original_title": "xXx",
    "overview": "Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government \"recruits\" him to go on a mission, he's not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.",
    "poster_path": "/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
    "media_type": "movie",
    "original_language": "en",
    "genre_ids": [
      28,
      12,
      53,
      80
    ],
    "popularity": 89.0126,
    "release_date": "2002-08-09",
    "video": false,
    "vote_average": 5.946,
    "vote_count": 4443
  }
]














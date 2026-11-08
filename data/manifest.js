window.SQUAD_MANIFEST = {
  siteUrl: "player-sorter.github.io",
  requestsUrl: "https://script.google.com/macros/s/AKfycbwBsWPWUBbBRoGEGGxUZfLfPQCpkZo4xTdowO7fFycVpBD8_4-xyXCpZCcjt6kWzTIW/exec",
  showFirst: 5,
  sections: [
    {
      id: "mens-clubs",
      name: "Men's clubs",
      tab: "Men",
      groups: [
        {
          id: "laliga",
          name: "LaLiga",
          country: "Spain",
          teams: ["atletico-madrid", "barcelona", "real-madrid", "real-betis", "villarreal", "rayo-vallecano", "getafe"]
        },
        {
          id: "premier-league",
          name: "Premier League",
          country: "England",
          teams: ["arsenal", "liverpool", "manchester-city", "manchester-united", "aston-villa", "chelsea", "tottenham", "newcastle", "fulham", "leeds"]
        },
        {
          id: "bundesliga",
          name: "Bundesliga",
          country: "Germany",
          teams: ["bayern-munich", "dortmund", "schalke", "stuttgart", "leipzig"]
        },
        {
          id: "ligue-1",
          name: "Ligue 1",
          country: "France",
          teams: ["psg", "monaco"]
        },
        {
          id: "serie-a",
          name: "Serie A",
          country: "Italy",
          teams: ["roma", "juventus", "ac-milan", "inter"]
        },
        {
          id: "eredivisie",
          name: "Eredivisie",
          country: "Netherlands",
          teams: ["ajax"]
        },
        /*
        {
          id: "championship",
          name: "Championship",
          country: "England",
          teams: ["sheffield-united"]
        },
        {
          id: "liga-profesional",
          name: "Liga Profesional de Futbol (LPF)",
          country: "Argentina",
          teams: ["river-plate", "boca-juniors"]
        },
        {
          id: "brasileiro",
          name: "Campeonato Brasileiro Série A",
          country: "Brazil",
          teams: ["flamengo"]
        }
          */
      ]
    },
    {
      id: "womens-clubs",
      name: "Women's clubs",
      tab: "Women",
      groups: [
        {
          id: "liga-f",
          name: "Liga F",
          country: "Spain",
          teams: ["atletico-madrid-femenino", "barcelona-femeni", "real-madrid-femenino"]
        },
        {
          id: "wsl",
          name: "WSL",
          country: "England",
          teams: ["arsenal-women", "chelsea-women", "manchester-city-women"]
        },
        {
          id: "premiere-ligue",
          name: "Première Ligue",
          country: "France",
          teams: ["ol-lyonnes"]
        }
      ]
    },
    {
      id: "wcs",
      name: "National teams",
      tab: "Nations",
      groups: [
        {
          id: "world-cup-2026",
          name: "World Cup 2026",
          teams: ["2026-spain", "2026-argentina", "2026-france", "2026-england", "2026-uruguay", "2026-norway", "2026-portugal", "2026-germany"]
        },
        /*
        {
          id: "world-cup-2022",
          name: "World Cup 2022",
          teams: ["2022-argentina"]
        },
        {
          id: "world-cup-2018",
          name: "World Cup 2018",
          teams: ["2018-france"]
        }
          */
      ]
    },
    {
      id: "specials",
      name: "Specials",
      tab: "Specials",
      groups: [
        {
          id: "ballon-dor",
          name: "Ballon d'Or",
          teams: ["2026-ballon-dor-men", "2026-ballon-dor-women"]
        }
      ]
    }
  ]
};
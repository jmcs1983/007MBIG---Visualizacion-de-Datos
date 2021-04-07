// Import stylesheets
import './style.css';

var datos = [
    {"periodo": "Enero(04-10)", "name":"Casos COVID Residencias", "Nºcasos": 2813},
    {"periodo": "Enero(11-17)", "name":"Casos COVID Residencias", "Nºcasos": 4543},
    {"periodo": "Enero(18-24)", "name":"Casos COVID Residencias", "Nºcasos": 4944},
    {"periodo": "Enero(25-31)", "name":"Casos COVID Residencias", "Nºcasos": 3175},
    {"periodo": "Febrero(01-07)", "name":"Casos COVID Residencias", "Nºcasos": 1562},
    {"periodo": "Febrero(08-14)", "name":"Casos COVID Residencias", "Nºcasos": 605},
    {"periodo": "Febrero(15-21)", "name":"Casos COVID Residencias", "Nºcasos": 205},
    {"periodo": "Febrero(22-28)", "name":"Casos COVID Residencias", "Nºcasos": 92},
    {"periodo": "Febrero(01-07)", "name":"Casos COVID Residencias", "Nºcasos": 61},
    {"periodo": "Marzo(08-14)", "name":"Casos COVID Residencias", "Nºcasos": 87},
    {"periodo": "Marzo(15-21)", "name":"Casos COVID Residencias", "Nºcasos": 49},
    {"periodo": "Marzo(22-28)", "name":"Casos COVID Residencias", "Nºcasos": 34},
    {"periodo": "Enero(04-10)", "name":"Fallecidos COVID Residencias", "Nºcasos": 365},
    {"periodo": "Enero(11-17)", "name":"Fallecidos COVID Residencias", "Nºcasos": 536},
    {"periodo": "Enero(18-24)", "name":"Fallecidos COVID Residencias", "Nºcasos": 730},
    {"periodo": "Enero(25-31)", "name":"Fallecidos COVID Residencias", "Nºcasos": 790},
    {"periodo": "Febrero(01-07)", "name":"Fallecidos COVID Residencias", "Nºcasos": 628},
    {"periodo": "Febrero(08-14)", "name":"Fallecidos COVID Residencias", "Nºcasos": 390},
    {"periodo": "Febrero(15-21)", "name":"Fallecidos COVID Residencias", "Nºcasos": 178},
    {"periodo": "Febrero(22-28)", "name":"Fallecidos COVID Residencias", "Nºcasos": 80},
    {"periodo": "Febrero(01-07)", "name":"Fallecidos COVID Residencias", "Nºcasos": 40},
    {"periodo": "Marzo(08-14)", "name":"Fallecidos COVID Residencias", "Nºcasos": 23},
    {"periodo": "Marzo(15-21)", "name":"Fallecidos COVID Residencias", "Nºcasos": 17},
    {"periodo": "Marzo(22-28)", "name":"Fallecidos COVID Residencias", "Nºcasos": 23}
  ]

var visualization = d3plus.viz()
  .container("#viz1")
  .data(datos)
  .type("line")
  .id("name")
  .x("periodo")
  .y("Nºcasos")
  .draw()


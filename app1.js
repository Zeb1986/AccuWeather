fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/324505?apikey=0Ir3XAoU2wqyEYI91dVZEEBNhlAOhW5Q&language=ru-RU&details=true&metric=true')
.then(function(resp){return resp.json()})
.then(function(data) {
    console.log(data);
    for (let i=0; i < data.DailyForecasts.length; i++) {
console.log(data.DailyForecasts[i].Date)
 let container =
`<div class="weather">
<div class="day-${i+1}">Погода на: ${data.DailyForecasts[i].Date}</div>
<div class="day-${i+1}-temp">Температура, Минимум: ${data.DailyForecasts[i].Temperature.Minimum.Value} &deg <br>Максимум: ${data.DailyForecasts[i].Temperature.Maximum.Value} &deg</div>
<div class="day-${i+1}-wind">Днем, скорость ветра Км/ч: ${data.DailyForecasts[i].Day.Wind.Speed.Value}<br> Направление в градусах: ${data.DailyForecasts[i].Day.Wind.Direction.Degrees}</div>
<div class="day-${i+1}-cloud">Облачность: ${data.DailyForecasts[0].Day.CloudCover}%</div>
</div>`

document.querySelector('.wrapper').innerHTML  +=  container;
    }
});



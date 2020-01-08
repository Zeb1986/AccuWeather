fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/324505?apikey=0Ir3XAoU2wqyEYI91dVZEEBNhlAOhW5Q&language=ru-RU&details=true&metric=true')
.then(function(resp){return resp.json()})
.then(function(data) {
    console.log(data);
    //day
    document.querySelector('.day-1').textContent ='Сегодня: ' + data.DailyForecasts[0].Date;
    document.querySelector('.day-2').textContent = 'Завтра: ' + data.DailyForecasts[1].Date;
    document.querySelector('.day-3').textContent = 'Послезавтра: ' + data.DailyForecasts[2].Date;
    document.querySelector('.day-4').textContent = 'ПослеПослеЗавтра: ' + data.DailyForecasts[3].Date;
    document.querySelector('.day-5').textContent = 'ПослеПослеПослеЗавтра: ' + data.DailyForecasts[4].Date;
//Temp
document.querySelector('.day-1-temp').innerHTML ='Температура, Минимум: ' + data.DailyForecasts[0].Temperature.Minimum.Value + '&deg' + '<br>Максимум: ' + data.DailyForecasts[0].Temperature.Maximum.Value + '&deg';
document.querySelector('.day-2-temp').innerHTML ='Температура, Минимум: ' + data.DailyForecasts[1].Temperature.Minimum.Value + '&deg' + '<br>Максимум: ' + data.DailyForecasts[1].Temperature.Maximum.Value + '&deg';
    document.querySelector('.day-3-temp').innerHTML ='Температура, Минимум: ' + data.DailyForecasts[2].Temperature.Minimum.Value + '&deg' + '<br>Максимум: ' + data.DailyForecasts[2].Temperature.Maximum.Value + '&deg';
    document.querySelector('.day-4-temp').innerHTML ='Температура, Минимум: ' + data.DailyForecasts[3].Temperature.Minimum.Value + '&deg' + '<br>Максимум: ' + data.DailyForecasts[3].Temperature.Maximum.Value + '&deg';
    document.querySelector('.day-5-temp').innerHTML ='Температура, Минимум: ' + data.DailyForecasts[4].Temperature.Minimum.Value + '&deg' + '<br>Максимум: ' + data.DailyForecasts[4].Temperature.Maximum.Value + '&deg';
    //wind
document.querySelector('.day-1-wind').innerHTML ='Днем, скорость ветра Км/ч: ' + data.DailyForecasts[0].Day.Wind.Speed.Value + '<br>' + ' Направление в градусах: ' + data.DailyForecasts[0].Day.Wind.Direction.Degrees;
document.querySelector('.day-2-wind').innerHTML ='Днем, скорость ветра Км/ч: ' + data.DailyForecasts[1].Day.Wind.Speed.Value + '<br>' +' Направление в градусах: ' + data.DailyForecasts[1].Day.Wind.Direction.Degrees;
document.querySelector('.day-3-wind').innerHTML ='Днем, скорость ветра Км/ч: ' + data.DailyForecasts[2].Day.Wind.Speed.Value + '<br>' +' Направление в градусах: ' + data.DailyForecasts[2].Day.Wind.Direction.Degrees;
document.querySelector('.day-4-wind').innerHTML ='Днем, скорость ветра Км/ч: ' + data.DailyForecasts[3].Day.Wind.Speed.Value + '<br>' +' Направление в градусах: ' + data.DailyForecasts[3].Day.Wind.Direction.Degrees;
document.querySelector('.day-5-wind').innerHTML ='Днем, скорость ветра Км/ч: ' + data.DailyForecasts[4].Day.Wind.Speed.Value + '<br>' +' Направление в градусах: ' + data.DailyForecasts[4].Day.Wind.Direction.Degrees;
    //Cloud
document.querySelector('.day-1-cloud').textContent ='Облачность: ' + data.DailyForecasts[0].Day.CloudCover + '%';
document.querySelector('.day-2-cloud').textContent ='Облачность: ' + data.DailyForecasts[1].Day.CloudCover + '%';
document.querySelector('.day-3-cloud').textContent ='Облачность: ' + data.DailyForecasts[2].Day.CloudCover + '%';
    document.querySelector('.day-4-cloud').textContent ='Облачность: ' + data.DailyForecasts[3].Day.CloudCover + '%';
    document.querySelector('.day-5-cloud').textContent ='Облачность: ' + data.DailyForecasts[4].Day.CloudCover + '%';
})
.catch(function(){});

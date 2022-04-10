import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import CardWeek from '../../components/cardWeek'

import icons from '../../utils/icons'

import {
    Header,
    Container,
    Search,
    CardToday,
    Cards,
    Footer
} from './styles'

function App() {
    const locale = { locale: ptBR }

    const slideSettings = {
        className: 'teste',
        infinite: false,
        speed: 500,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')

    const params = {
        format: 'json-cors',
        city_name: city || 'São Paulo',
        key: process.env.REACT_APP_ACCESS_KEY_API
    }

    async function loadData() {
        console.log('https://api.hgbrasil.com/weather', {params})

        await axios.get('https://api.hgbrasil.com/weather', {params})
        .then(response => {
            setWeather(response.data.results)
        })
        .catch(error => console.log(error))
    }

    function conditionIcon(condition) {
        if (condition === 'hail')
            return icons.hail
        else if (condition === 'snow')
            return icons.snow
        else if (condition === 'rain')
            return icons.rain
        else if (condition === 'storm')
            return icons.storm
        else if (condition === 'cloud' || condition === 'fog')
            return icons.cloud
        else if (condition === 'cloudly_day')
            return icons.cloud_day
        else if (condition === 'cloudly_night')
            return icons.cloud_night
        else if (condition === 'clear_day' || condition === 'none_day')
            return icons.day
        else if (condition === 'clear_night' || condition === 'none_night')
            return icons.night
        else
            return icons.day
    }

    function loadCardsWeek(data, i) {
        if (i > 0 && i < 8) {
            const card =
            <CardWeek
                key={data.date}
                icon={data.condition}
                dayOfWeek={data.weekday}
                dayAndMonth={data.date}
                minTemp={data.min}
                maxTemp={data.max}
            />
            return card
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Search>
                    <input
                        type="text"
                        placeholder="Cidade que você deseja saber o tempo"
                        onChange={e => setCity(e.target.value)}
                        value={city}
                    />
                    <button type="button" onClick={loadData}>Pesquisar</button>
                </Search>
                <CardToday>
                    <div className="top">
                        <p>Hoje, {format(new Date(), "dd' de 'MMMM", locale)}</p>
                        <h2>{weather.city || 'Carregando...'}</h2>
                    </div>
                    <div className="mid">
                        <p>Temperatura</p>
                        <h1>{weather.temp || '00'}º</h1>
                    </div>
                    <div className='bottom'>
                        <div>
                            <p>Umidade</p>
                            <h4>{weather.humidity || '00'}%</h4>
                        </div>
                        <div>
                            <p>Vento</p>
                            <h4>{weather.wind_speedy || '00km'}</h4>
                        </div>
                    </div>
                    <img src={conditionIcon(weather.condition_slug)} alt="Weather" />
                </CardToday>
                <h3>Próximos dias</h3>
                <Cards>
                    <Slider {...slideSettings}>
                        { weather.forecast ? weather.forecast.map(loadCardsWeek) : <p>Carregando...</p> }
                    </Slider>
                </Cards>
                <Footer>
                    <p>Desenvolvido por <a href="https://github.com/viniciuslimaan" target="_blank" rel="noopener noreferrer">Vinícius Lima</a>.</p>
                </Footer>
            </Container>
        </>
    );
}

export default App;
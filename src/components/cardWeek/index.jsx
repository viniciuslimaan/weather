import React from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CardBg } from './styles'

import icons from '../../utils/icons'

export default function CardWeek(props) {
    const locale = { locale: ptBR }

    function icon() {
        const nameIcon = props.icon

        if (nameIcon === 'hail')
            return icons.hail
        else if (nameIcon === 'snow')
            return icons.snow
        else if (nameIcon === 'rain')
            return icons.rain
        else if (nameIcon === 'storm')
            return icons.storm
        else if (nameIcon === 'cloud' || nameIcon === 'fog')
            return icons.cloud
        else if (nameIcon === 'cloudly_day')
            return icons.cloud_day
        else if (nameIcon === 'cloudly_night')
            return icons.cloud_night
        else if (nameIcon === 'clear_day' || nameIcon === 'none_day')
            return icons.day
        else if (nameIcon === 'clear_night' || nameIcon === 'none_night')
            return icons.night
        else
            return icons.day
    }

    function dayAndMonth() {
        const year = new Date().getFullYear()
        const date = props.dayAndMonth.split('/')

        return format(new Date(year, date[1] - 1, date[0]), "dd' de 'MMMM", locale)
    }

    return (
        <CardBg>
            <img src={icon()} alt={icon()} />
            <h4>{props.dayOfWeek}</h4>
            <p>{dayAndMonth()}</p>
            <p className='minAndMax'>{`${props.minTemp}º`} <span>|</span> {`${props.maxTemp}º`}</p>
        </CardBg>
    )
}
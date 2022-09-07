import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { IClock } from '../../models';
import { timezoneApi } from '../../service';
import { changeTimezone, deleteClock } from '../../store';
import { Button } from '../Button';
import { Select } from '../Select';
import "./Clock.scss";


interface IProps {
    clock: IClock;
}

interface ISelectOptions {
    label: string;
    value: string;
}

const Clock: React.FC<IProps> = ({ clock }) => {
    const dispatch = useAppDispatch()
    const { data: timezoneList } = timezoneApi.useFetchTimezoneQuery("")

    const [hours, setHours] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [selectOptions, setSelectOptions] = useState<ISelectOptions[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            const day = new Date();

            setHours((day.getUTCHours() + parseInt(clock.timezone)))
            setMin(day.getMinutes())
            setSec(day.getSeconds())
        })

        return () => {
            clearInterval(interval)
        }
    })

    useEffect(() => {
        if (timezoneList) {
            setSelectOptions(timezoneList.map(timezone => ({
                label: `${timezone.name} (UTC ${timezone.timezone})`,
                value: timezone.timezone
            })))
        }
    }, [timezoneList])

    const changeTimezoneHandler = (timezone: string) => {
        dispatch(changeTimezone({
            ...clock,
            timezone: timezone
        }))
    }

    return (
        <div className="clock-container">
            <div className="clock-face">
                <div className="hour">
                    <div className="hr" style={{ transform: `rotateZ(${(hours * 30) + (min / 2)}deg)` }}></div>
                </div>
                <div className="min">
                    <div className="mn" style={{ transform: `rotateZ(${min * 6}deg)` }}></div>
                </div>
                <div className="sec">
                    <div className="sc" style={{ transform: `rotateZ(${sec * 6}deg)` }}></div>
                </div>
            </div>
            <div className="clock-numbers">
                <ul>
                    <li>{hours < 10 ? `0${hours}` : hours}</li>
                    <li className='separator'>:</li>
                    <li>{min < 10 ? `0${min}` : min}</li>
                    <li className='separator'>:</li>
                    <li>{sec < 10 ? `0${sec}` : sec}</li>
                </ul>
            </div>
            <Select options={selectOptions} setValue={changeTimezoneHandler} value={clock.timezone} />
            <Button onClick={() => dispatch(deleteClock(clock.id))}>Удалить</Button>
        </div>
    )
}

export default Clock
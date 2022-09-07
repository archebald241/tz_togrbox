import React from 'react';
import "./styles/App.scss";
import { Button, Clock, Loader } from './components';
import { useAppDispatch, useAppSelector } from './hooks';
import { addClock } from './store';
import { timezoneApi } from './service';

function App() {
    const dispatch = useAppDispatch();
    const { clockList } = useAppSelector(state => state.clock);
    const { isLoading, isError } = timezoneApi.useFetchTimezoneQuery("")

    const addClockHanler = () => {
        dispatch(addClock())
    }

    return (
        <div className='app-container'>
            {isLoading && <h1><Loader /> Загрузка...</h1>}
            {isError && <h1>Произошла ошибка при загрузке данных</h1>}
            {!isLoading && !isError &&
                <>
                    {clockList.length < 24 &&
                        <Button onClick={addClockHanler}>Добавить часы</Button>
                    }
                    <div className="clocks-container">
                        {clockList.map(clock =>
                            <Clock key={clock.id} clock={clock} />
                        )}
                    </div>
                </>
            }
        </div>
    );
}

export default App;

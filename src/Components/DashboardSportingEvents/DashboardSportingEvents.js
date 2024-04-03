import React, { useEffect, useState } from 'react';
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Container, Header, HeaderContainer, NetworksDropdownContainer, SportsDropdownContainer, ViewAllLink, DateContainer, DateDropdown, GameScheduleContainer, ViewAllContainer, GamesContainer, GamesText, SportsDropdown } from './DashboardSportingEvents.Styles';
import Axios from 'axios';


const DashboardSportingEvents = () => {



    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let currentMonthName = (monthNames[d.getMonth()])
    let currentDay = d.getDate();
    let currentMonth = d.getMonth() + 1;
    let currentYear = d.getFullYear();
    const defaultValue = {
        year: currentYear,
        month: currentMonth,
        day: currentDay,
    };
    const [date, setDate] = useState(defaultValue);
    //let selectedMonthName = monthNames[date.month - 1];

    const [games, setGames] = useState([]);

    /*const renderCustomInput = ({ ref }) => (
        <input
            readOnly
            ref={ref}
            placeholder={currentMonthName + " " + currentDay + ", " + currentYear}
            value={date ? `${selectedMonthName + " " + date.day + ", " + date.year}` : ''}

            style={{
                textAlign: 'center',
                fontSize: '20px',
                border: '2px solid #fd7f0f',
                height: '30px',
                width: '175px',
                borderRadius: '8px',
                color: 'black',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}
            className="my-custom-input-class"
        />
    )
    */
    const options = {
        method: 'GET',
        url: "https://api.predicthq.com/v1/events/",
        params: {
            "country": "US",
            "category": "sports",
            "sort": "labels, start",
            "label": "nba,mlb,golf,nfl",
            "start.gte": date ? `${date.year}-${date.month}-${date.day}T00:00:00` : "",
            "end.lte": date ? `${date.year}-${date.month}-${date.day}T23:59:59` : "",
        },
        headers: {
            "Authorization": "Bearer hQgWiiEzMRizo6cBgKc_tjRti09hHT9BctIJ5YTE",
            "Accept": "application/json"
        }
    };


    useEffect(() => {
        const getGames = async () => {
            Axios.request(options).then(function (response) {
                const data = response.data.results;
                console.log(data);
                setGames(data);
            })
        };

        getGames();
    }, [date]);

    return (
        <Container>
            <HeaderContainer>
                <Header>Upcoming Sporting Events</Header>
                <SportsDropdownContainer>
                    <SportsDropdown className='sportsSelect' defaultValue={"0"}>
                        <option value="ALL SPORTS">All Sports</option>
                        <option value="MLB">MLB</option>
                        <option value="NBA">NBA</option>
                        <option value="NFL">NFL</option>
                        <option value="GOLF">PGA Tour</option>
                    </SportsDropdown>
                </SportsDropdownContainer>
            </HeaderContainer>
            <DateContainer>
                <DatePicker
                    value={date}
                    onChange={selectedDate => setDate(selectedDate)}
                    //renderInput={renderCustomInput}
                    colorPrimary='#7a40f2'
                />
            </DateContainer>
            <GameScheduleContainer>
                {

                    games.map(games => <GamesText key={games.title}>{games.title}</GamesText>)
                }
            </GameScheduleContainer>
            <ViewAllContainer>
                <ViewAllLink to='/sportingevents'>View All</ViewAllLink>
            </ViewAllContainer>
        </Container>
    );
}


export default DashboardSportingEvents;
const games = [
    { game_number: 1, winner_player_id: 2, first_player_points: 30, second_player_points: 45, is_game_over: true, is_first_player_serving: false, is_deuce: false, number_of_deuce: 0, is_first_player_in_advantage: false, is_second_player_in_advantage: false },
    { game_number: 2, winner_player_id: 2, first_player_points: 30, second_player_points: 45, is_game_over: true, is_first_player_serving: false, is_deuce: false, number_of_deuce: 0, is_first_player_in_advantage: false, is_second_player_in_advantage: false },
    { game_number: 3, winner_player_id: 1, first_player_points: 45, second_player_points: 40, is_game_over: true, is_first_player_serving: false, is_deuce: false, number_of_deuce: 0, is_first_player_in_advantage: false, is_second_player_in_advantage: false },
    { game_number: 4, winner_player_id: 2, first_player_points: 15, second_player_points: 45, is_game_over: true, is_first_player_serving: false, is_deuce: false, number_of_deuce: 0, is_first_player_in_advantage: false, is_second_player_in_advantage: false },
    { game_number: 5, winner_player_id: 2, first_player_points: 30, second_player_points: 45, is_game_over: true, is_first_player_serving: false, is_deuce: false, number_of_deuce: 0, is_first_player_in_advantage: false, is_second_player_in_advantage: false },
    { game_number: 6, winner_player_id: 2, first_player_points: 30, second_player_points: 45, is_game_over: true, is_first_player_serving: false, is_deuce: false, number_of_deuce: 0, is_first_player_in_advantage: false, is_second_player_in_advantage: false },
    { game_number: 7, winner_player_id: 2, first_player_points: 30, second_player_points: 45, is_game_over: true, is_first_player_serving: false, is_deuce: false, number_of_deuce: 0, is_first_player_in_advantage: false, is_second_player_in_advantage: false }
];

const sets = [
    {
        set_number: 1,
        first_player_games_won: 1,
        second_player_games_won: 6,
        winner_player_id: 2,
        is_tiebreak: false,
        first_player_tiebreakers_won: 0,
        second_player_tiebreakers_won: 0,
        first_player_points_total: 225,
        second_player_points_total: 300,
        number_of_games_played: 7,
        games: games
    },
    {
        set_number: 2,
        first_player_games_won: 6,
        second_player_games_won: 7,
        winner_player_id: 2,
        is_tiebreak: true,
        first_player_tiebreakers_won: 4,
        second_player_tiebreakers_won: 7,
        first_player_points_total: 225,
        second_player_points_total: 300,
        number_of_games_played: 13,
        games: games
    },
    {
        set_number: 3,
        first_player_games_won: 1,
        second_player_games_won: 6,
        winner_player_id: 2,
        is_tiebreak: false,
        first_player_tiebreakers_won: 0,
        second_player_tiebreakers_won: 0,
        first_player_points_total: 225,
        second_player_points_total: 300,
        number_of_games_played: 7,
        games: games
    }
]

const matches = [
    {
        match_id: 1,
        match_location: 'Brummer Park',
        match_date: '10/11/2019',
        match_ccyy: 2019,
        match_mm: 10,
        match_dd: 11,
        match_day: 'Friday',
        match_time: '7:00pm',
        match_duration: '60min',
        first_player_id: 1,
        first_player_first_name: 'Roger',
        first_player_last_name: 'Federer',
        first_player_url: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
        second_player_id: 2,
        second_player_first_name: 'Rafael',
        second_player_last_name: 'Nadal',
        second_player_url: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
        winner_player_id: 2,
        winner_sets_won: 2,
        loser_sets_won: 0,
        winner_tiebreaks_won: 0,
        loser_tiebreaks_won: 0,
        number_of_sets_played: 2,
        sets: sets
    },
    {
        match_id: 2,
        match_location: 'Brummer Park',
        match_date: '10/12/2019',
        match_ccyy: 2019,
        match_mm: 10,
        match_dd: 12,
        match_day: 'Saturday',
        match_time: '7:00pm',
        match_duration: '60min',
        first_player_id: 1,
        first_player_first_name: 'Roger',
        first_player_last_name: 'Federer',
        first_player_url: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
        second_player_id: 2,
        second_player_first_name: 'Rafael',
        second_player_last_name: 'Nadal',
        second_player_url: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
        winner_player_id: 2,
        winner_sets_won: 2,
        loser_sets_won: 0,
        winner_tiebreaks_won: 0,
        loser_tiebreaks_won: 0,
        number_of_sets_played: 2,
        sets: sets
    },
    {
        match_id: 3,
        match_location: 'Brummer Park',
        match_date: '10/13/2019',
        match_ccyy: 2019,
        match_mm: 10,
        match_dd: 13,
        match_day: 'Sunday',
        match_time: '7:00pm',
        match_duration: '60min',
        first_player_id: 1,
        first_player_first_name: 'Roger',
        first_player_last_name: 'Federer',
        first_player_url: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
        second_player_id: 2,
        second_player_first_name: 'Rafael',
        second_player_last_name: 'Nadal',
        second_player_url: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
        winner_player_id: 2,
        winner_sets_won: 2,
        loser_sets_won: 0,
        winner_tiebreaks_won: 0,
        loser_tiebreaks_won: 0,
        number_of_sets_played: 2,
        sets: sets
    }
]

matches[0].show = true;

const rounds = [
    {
        round_id: 1,
        round_number: 1,
        round_name: 'Round of 16',
        matches: matches
    },
    {
        round_id: 2,
        round_number: 2,
        round_name: 'Quarter Finals',
        matches: matches
    },
    {
        round_id: 3,
        round_number: 3,
        round_name: 'Semi Finals',
        matches: matches
    },
    {
        round_id: 4,
        round_number: 4,
        round_name: 'Finals',
        matches: matches
    }
]

rounds[0].show = true;

export const tournament = {
    tourney_id: 1,
    tourney_name: 'Jimbledon',
    tourney_location: 'Pompano Beach, FL',
    tourney_start_date: '10/01/2019',
    tourney_start_year: 2019,
    tourney_start_month: 10,
    tourney_start_day: 1,
    tourney_end_date: '10/31/2019',
    tourney_end_year: 2019,
    tourney_end_month: 10,
    tourney_end_day: 31,
    tourney_surface: 'hard',
    singles_winner_player_id: 1,
    singles_winner_player_name: 'Federer',
    singles_winner_player_url: '',
    doubles_winner_1_player_id: 1,
    doubles_winner_1_player_name: 'Federer',
    doubles_winner_1_player_url: '',
    doubles_winner_2_player_id: 2,
    doubles_winner_2_player_name: 'Nadal',
    doubles_winner_2_player_url: '',
    rounds: rounds
}

export const tournaments = [
    {
        tourney_id: 1,
        tourney_name: 'Jimbledon',
        tourney_location: 'Pompano Beach, FL',
        tourney_start_date: '10/01/2019',
        tourney_start_year: 2019,
        tourney_start_month: 10,
        tourney_start_day: 1,
        tourney_end_date: '10/31/2019',
        tourney_end_year: 2019,
        tourney_end_month: 10,
        tourney_end_day: 31,
        tourney_surface: 'hard',
        singles_winner_player_id: 1,
        singles_winner_player_name: 'Federer',
        singles_winner_player_url: '',
        doubles_winner_1_player_id: 1,
        doubles_winner_1_player_name: 'Federer',
        doubles_winner_1_player_url: '',
        doubles_winner_2_player_id: 2,
        doubles_winner_2_player_name: 'Nadal',
        doubles_winner_2_player_url: '',
        rounds: rounds
    },
    {
        tourney_id: 2,
        tourney_name: 'US Open',
        tourney_location: 'New York',
        tourney_start_date: '10/01/2019',
        tourney_start_year: 2019,
        tourney_start_month: 10,
        tourney_start_day: 1,
        tourney_end_date: '10/31/2019',
        tourney_end_year: 2019,
        tourney_end_month: 10,
        tourney_end_day: 31,
        tourney_surface: 'hard',
        singles_winner_player_id: 1,
        singles_winner_player_name: 'Federer',
        singles_winner_player_url: '',
        doubles_winner_1_player_id: 1,
        doubles_winner_1_player_name: 'Federer',
        doubles_winner_1_player_url: '',
        doubles_winner_2_player_id: 2,
        doubles_winner_2_player_name: 'Nadal',
        doubles_winner_2_player_url: '',
        rounds: rounds
    }
];

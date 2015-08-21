var templateModule = (function(){

	function setViewHeight(){
		var height = $('.container').height();
		$('.main-col').height(height)
	}

	function setTemplateData(str){
		_.templateSettings.variable = "mg";

        // Grab the HTML out of our template tag and pre-compile it.
        var template = _.template(
            $( "script#"+str+"" ).html()
        );

        // Define our render data (to be put into the "rc" variable).
        var scheduleData = {
        	
            schedule: [
                {
                    	day: "Sun",
                    	time: "1pm",
                    	network: "Fox",
                    	teamCity: "New York",
                    	teamName: "Giants",
                        record: "W1-L1",
                        color: "blue",
                        beforeKickOff: "30 min",
                        teamCity2: "Cleavand",
                    	teamName2: "Browns",
                        record2: "W1-L0",
                        color2: "brown"
                },
                {
                    	day: "Sun",
                    	time: "4pm",
                    	network: "Fox",
                    	teamCity: "Oakland",
                    	teamName: "Raiders",
                        record: "W1-L2",
                        color: "black",
                        beforeKickOff: "45 min",
                        teamCity2: "Miami",
                    	teamName2: "Dolphins",
                        record2: "W5-L2",
                        color2: "teal"
                },
                {
                    	day: "Sun",
                    	time: "5pm",
                    	network: "Nbc",
                    	teamCity: "Seattle",
                    	teamName: "Seahawks",
                        record: "W2-L5",
                        color: "navy-blue",
                        beforeKickOff: "1 hour",
                        teamCity2: "San Francisco",
                    	teamName2: "49ers",
                        record2: "W8-L2",
                        color2: "red"
                },
                {
                    	day: "Sun",
                    	time: "5pm",
                    	network: "Abc",
                    	teamCity: "New Orleans",
                    	teamName: "Saints",
                        record: "W2-L5",
                        color: "gold",
                        beforeKickOff: "2 hours",
                        teamCity2: "Green Bay",
                    	teamName2: "Packers",
                        record2: "W2-L4",
                        color2: "yellow"
                },
                {
                    	day: "Sun",
                    	time: "7pm",
                    	network: "Espn",
                    	teamCity: "San Diego",
                    	teamName: "Chargers",
                        record: "W6-L2",
                        color: "baby-blue",
                        beforeKickOff: "5 hours",
                        teamCity2: "Cincinatti",
                    	teamName2: "Bengals",
                        record2: "W2-L8",
                        color2: "orange"
                }
            ]
        };

        var leaderboardData = {
                leaderboard: {
                    weekly: [
                        {
                            rank: '1',
                            name: 'James',
                            city: 'Ontario',
                            points: '10000'
                        },
                        {
                            rank: '2',
                            name: 'Luke',
                            city: 'Orange County',
                            points: '1000'
                        },
                        {
                            rank: '3',
                            name: 'Brian',
                            city: 'San Francisco',
                            points: '900'
                        },
                        {
                            rank: '4',
                            name: 'Collin',
                            city: 'Tallahassee',
                            points: '800'
                        },
                        {
                            rank: '5',
                            name: 'Julie',
                            city: 'Alabama',
                            points: '700'
                        },
                        {
                            rank: '6',
                            name: 'Jerry',
                            city: 'Sacramento',
                            points: '600'
                        },
                        {
                            rank: '7',
                            name: 'Wes',
                            city: 'Concord',
                            points: '500'
                        }
                    ],
                    season :[
                        {
                            rank: '1',
                            name: 'Tiffany',
                            city: 'Los Angeles',
                            points: '10000'
                        },
                        {
                            rank: '2',
                            name: 'Taylor',
                            city: 'Tennessee',
                            points: '1000'
                        },
                        {
                            rank: '3',
                            name: 'Justin',
                            city: 'San Diego',
                            points: '900'
                        },
                        {
                            rank: '4',
                            name: 'Tommy',
                            city: 'Roseville',
                            points: '800'
                        },
                        {
                            rank: '5',
                            name: 'Janelle',
                            city: 'Oklahoma',
                            points: '700'
                        },
                        {
                            rank: '6',
                            name: 'Johnny',
                            city: 'Monterey',
                            points: '600'
                        },
                        {
                            rank: '7',
                            name: 'Jorge',
                            city: 'Antioch',
                            points: '500'
                        }
                    ],
                    user:{
                        rank: '7',
                            name: 'Jorge',
                            city: 'Antioch',
                            points: '500'   
                    }
                }
            };

        var playData = {
                plays: [
                    {
                        time: '15:00',
                        play: '65y punt(#4 A. Lee, CLE)',
                        points: '+17',
                        color: 'black'
                    },
                    {
                        time: '14:51',
                        play: 'Penalty',
                        points: '0',
                        color: 'red'
                    },
                    {
                        time: '14:38',
                        play: '7y run(#10 E. Mannning, NYG)',
                        points: '+14',
                        color: 'green'
                    },
                    {
                        time: '14:38',
                        play: 'Tackle (CLE Defense)',
                        points: '+5',
                        color: 'black'
                    },
                    {
                        time: '14:20',
                        play: '12y run(#10 E. Manning, NYG)',
                        points: '+15',
                        color: 'green'
                    },
                    {
                        time: '14:18',
                        play: 'Tackle(#23 D. Rodgers, CLE)',
                        points: '+13',
                        color: 'green'
                    },
                    {
                        time: '14:01',
                        play: '25y pass(#10 E. Manning, NYG)',
                        points: '+25',
                        color: 'orange'
                    },
                    {
                        time: '14:38',
                        play: 'Tackle (CLE Defense)',
                        points: '+5',
                        color: 'black'
                    },
                    {
                        time: '14:20',
                        play: '12y run(#10 E. Manning, NYG)',
                        points: '+15',
                        color: 'green'
                    },
                    {
                        time: '14:18',
                        play: 'Tackle(#23 D. Rodgers, CLE)',
                        points: '+13',
                        color: 'green'
                    },
                    {
                        time: '14:01',
                        play: '25y pass(#10 E. Manning, NYG)',
                        points: '+25',
                        color: 'orange'
                    }

                    
                ]
            };
        var myGameData = {
            team: "MIA",
            score: 0,
            team2: "NYG",
            score2: 1,
            quarter: "2nd",
            time: "1:00",
            points: 0

        };
        var templateData;

        switch(str){
            case 'schedule':
                templateData = scheduleData
                break;
            case 'leaderboard':
                templateData = leaderboardData;
                var renderSub = _.template( $('#sub-leaderboard').text() );
                templateData.renderSub = renderSub;
                break;
            case 'plays':
                templateData = playData;
                var renderSub = _.template( $('#sub-plays').text() );
                templateData.renderSub = renderSub;
                break;
            case 'my-game':
                templateData = myGameData;
                break;
            default: 
                {};
        }
        // Render the underscore template and inject it after the H1
        // in our current DOM.
        $( "#view" ).html(
            template( templateData )
        );

	}

	
	return {
		setViewHeight: setViewHeight,
		setTemplateData: setTemplateData
	}

})();

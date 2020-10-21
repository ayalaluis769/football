import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TEAMS } from '../shared/campsites';

function RenderDivision({team}) {

    if (team) {
        return (
            <Card
                featuredTitle={team.title}
                image={require('./images/NFLLOGO.jpg')}
            >
                <Text style={{margin: 10}}>
                    {team.info}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class DivisionInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: TEAMS
        };
    }

    static navigationOptions = {
        title: 'Division Information'
    }

    render() {
        const teamId = this.props.navigation.getParam('teameId');
        const team = this.state.campsites.filter(team => team.id === teamId)[0];
        return <RenderDivision team={team} />;
    }
}

export default DivisionInfo;
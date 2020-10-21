import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { TEAMS } from "../shared/teams";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: TEAMS,
    };
  }

  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDivisionItem = ({ item }) => {
      return (
        <ListItem
          title={item.title}
          subtitle={item.info}
          onPress={() => navigate("DivisionInfo", { teamId: item.id })}
          leftAvatar={{ source: require("./images/NFLLOGO.jpg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.teams}
        renderItem={renderDivisionItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;

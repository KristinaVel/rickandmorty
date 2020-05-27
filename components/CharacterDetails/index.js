import React from 'react'
import {View, Text, Image} from 'react-native'
import Style from './style'

class CharacterDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            character:{
                origin:{},
                location:{},
                episodes:[]
            }
        }
    }

componentDidMount() {
    fetch(
        `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`,
        {method: 'get'}
    )
    .then(res => res.json())
    .then(data => {
       this.setState({character: data});
    })
    .catch(err => {console.log(err)})
}

    render () {
        return (
            <View style={Style.background}>
                <View style={Style.card}>
                    <View style={Style.card}>
                        <Image source={{uri: this.state.character.image}} style={Style.image}/>
                        <Text style={Style.name}>Name: {this.state.character.name}</Text>
                    </View>
                    <View style={Style.card}>
                        <Text style={Style.details}>Details:</Text>
                        <Text style={Style.status}>Gender: {this.state.character.gender}</Text>
                        <Text style={Style.status}>Species: {this.state.character.species}</Text>
                        <Text style={Style.status}>Status: {this.state.character.status}</Text>
                        <Text style={Style.status}>Origin: {this.state.character.origin.name}</Text>
                        <Text style={Style.status}>Location: {this.state.character.location.name}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default CharacterDetails;
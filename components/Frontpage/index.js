import React from 'react'
import {View, Text, Image} from 'react-native'
import Style from './style'
import {Link} from 'react-router-native';

class Frontpage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            this.props.characters.map((c, i) => <CardShowcaseExample key={c.id} data={c} />)
        )
    }
}

class CardShowcaseExample extends React.Component {
    render() {
                return (
            <CardShowcaseExample />
        )
    }
}

export default Frontpage;
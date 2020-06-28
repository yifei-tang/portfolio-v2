import React, {Component} from 'react';
import { Card, CardTitle, CardActions} from 'react-mdl';

class CustomCard extends Component{
    render(){
        return(
            <Card shadow={0}  style={{width: '320px', height: '320px', background: "url("+this.props.image+") left / cover", margin:'auto', cursor:'pointer'}} onClick={e => {this.props.showModal(e);}} >
                <CardTitle expand />
                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
                    <span style={{color: '#fff', fontSize: '20px', fontWeight: '1000'}}>
                        {this.props.name}
                    </span>
                </CardActions>
            </Card>
        )
    }
}
export default CustomCard;
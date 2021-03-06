import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'

class GiphyInfo extends Component{
    
    render(){
        // console.log(this.props.giphs)
        return (
            <Container >
                <div className="flex">
                {
                    this.props.giphs.map(giph => (
                        <div key={giph.id}>
                            <img width='200px' key={giph.id} src={giph.images.original.url}></img>    
                        </div>
                        
                    ))
                }
                </div>
            </Container>
        )        
    }

}

export default GiphyInfo;
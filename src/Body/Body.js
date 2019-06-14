import React,{Component} from 'react';
import './Body.css'


class Body extends Component{
    render(){
        return(
            <div className='flexcontainer'>
            <div> 
                <img ClassName='disp' src={this.props.profpic} />
                <h1 >{this.props.name}</h1>
                { this.props.post !== undefined ?
                 (
                    <div>   
                        <p>{this.props.post}</p>
                </div>
                ) : 
                (
                    <p>{this.img.imgUrl}</p>

                )}
                <p>Likes:{this.props.likes}</p>
                <p>Comments:{this.props.comments}</p>
            </div>
            </div>

         )   
}

}


export default Body;
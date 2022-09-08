import React,{Component} from 'react';

export default  class Pao extends Component{
  render(){
    return(   
     <>
     <div>
          <ul>
            <li>Nome: {this.props.nome}</li>
            <li>Idade: {this.props.idade}</li>
            <li>Quer estudar: {this.props.querestudar}</li>
          </ul>
        </div>
      </>
    )
  }
}
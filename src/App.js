import React,{Component} from 'react';
import Header from './Component/Header'
import Main from './Component/Main'

export default  class Pao extends Component{
  render(){
    return(   
     <>
     <Header title="informações"/>
     <Main nome ="Beatriz" idade ="24" querestudar="html5" />
      </>
    )
  }
}

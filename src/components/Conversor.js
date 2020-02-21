import React, { Component } from 'react'
import './Conversor.css'


export default class Conversor extends Component {
    
    //metodo construtor
    constructor(props){
        super(props);
        //Objeto
        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        } 

        this.converter = this.converter.bind(this);
    }

    //Metodo
    converter(){
        //console.log(this.state) testar o codigo
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
       // let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y`
        
       //https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=66877635b3006d8e7ef0
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=66877635b3006d8e7ef0`

        fetch(url)
        .then(rest=>{

            return rest.json()

        } )

        .then(json=>{
           let cotacao = json[de_para]
           let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
           this.setState({moedaB_valor}) 
        })



    }

    render() {
        return (
         <div className="conversor">
    <h2>Converter {this.props.moedaA} para {this.props.moedaB} </h2>
            <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
            <input type="button" value="Converter" onClick= {this.converter}></input>    
        <h2>{this.state.moedaB_valor}</h2>

         </div>
        )
    }
}

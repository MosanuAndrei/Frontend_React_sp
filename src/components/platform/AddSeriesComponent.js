import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import SeriesService from "../service/SeriesService";
import "./AddSeriesComponent.css";

const service = new SeriesService();

class AddSeriesComponent extends Component{
    constructor(){
        super();
        this.state={
            nameSeries: "",
            numberOfSeasons:"",
            idCategory:"",
            idPlatform:""
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        if(name === "nameSeries"){
            this.setState({
                nameSeries:value
            });
        }
        if(name === "numberOfSeasons"){
            this.setState({
                numberOfSeasons:value
            });
        }
        if(name === "idCategory"){
            this.setState({
                idCategory:value
            });
        }
        if(name === "idPlatform"){
            this.setState({
                idPlatform:value
            });
        }
    }

    handleClick(event){
        event.preventDefault();
        const data = {
            "nameSeries":this.state.nameSeries,
            "numberOfSeasons":this.state.numberOfSeasons,
            "idCategory":this.state.idCategory,
            "idPlatform":this.state.idPlatform
        }
        try{
            service.addSeries(data);
        }catch(error){
            alert("Something went wrong!");
        }
    }

    render(){
        return(
            <body>
                <div className="series-form">
                    <h4>Add Series</h4>
                    <form>
                        <div>
                            <label>Name Series:</label>
                                <input
                                type="text"
                                name="nameSeries"
                                onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div>
                            <label>Number Of Seasons:</label>
                                <input
                                type="integer"
                                name="numberOfSeasons"
                                onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div>
                            <label>Id Category:</label>
                                <input
                                type="integer"
                                name="idCategory"
                                onChange={this.handleChange.bind(this)} />
                        </div>
                        <div>
                            <label>Id Platform:</label>
                                <input
                                type="integer"
                                name="idPlatform"
                                onChange={this.handleChange.bind(this)} />
                        </div>
                    </form>
                    <button className="form-button" onClick={this.handleClick}>Send</button>
                    <NavLink className="link-back" to="/">Back</NavLink>
                </div> 
            </body>
        )
    }
}

export default AddSeriesComponent;

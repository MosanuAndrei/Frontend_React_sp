import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import SeriesService from '../service/SeriesService';

const service = new SeriesService();

class ListSeriesComponent extends Component{
    constructor(){
        super();
        this.state = {
            series_1:[],
            series_2:[],
            series_3:[],
            series_4:[],
            series_5:[]
        }
        this.showSeries();
    }

    showSeries(){
        service.getSeriesByCategory("Action").then(res =>{
            this.setState({
                series_1: res.data
            })
        });

        service.getSeriesByCategory("Drama").then(res =>{
            this.setState({
                series_2: res.data
            })
        });

        service.getSeriesByCategory("Comedy").then(res =>{
            this.setState({
                series_3: res.data
            })
        });

        service.getSeriesByCategory("History").then(res =>{
            this.setState({
                series_4: res.data
            })
        });

        service.getSeriesByCategory("Family").then(res =>{
            this.setState({
                series_5: res.data
            })
        });
    }

    render(){
        return(
            <div>
                <div className='series-list'>
                    <h4 className='series-title' >Series by Category</h4>
                    <ol className='series-names'>Action: {this.state.series_1.map(series => <ul>{series.nameSeries + " - " + series.numberOfSeasons + " seasons"}</ul>)}</ol>
                    <ol className='series-names'>Drama: {this.state.series_2.map(series => <ul>{series.nameSeries + " - " + series.numberOfSeasons + " seasons"}</ul>)}</ol>
                    <ol className='series-names'>Comedy: {this.state.series_3.map(series => <ul>{series.nameSeries + " - " + series.numberOfSeasons + " seasons"}</ul>)}</ol>
                    <ol className='series-names'>History: {this.state.series_4.map(series => <ul>{series.nameSeries + " - " + series.numberOfSeasons + " seasons"}</ul>)}</ol>
                    <ol className='series-names'>Family: {this.state.series_5.map(series => <ul>{series.nameSeries + " - " + series.numberOfSeasons + " seasons"}</ul>)}</ol>
                </div>

                <NavLink className="link" to="/add-series">Add Series</NavLink>
            </div>
        )
    }
}

export default ListSeriesComponent;

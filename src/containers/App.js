import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';

import "./App.css";
import {setSearchField,requestYoguis} from '../actions';

const mapStateToProps = state => (
    {
        searchField: state.searchYoguis.searchField,
        yoguis: state.requestYoguis.yoguis,
        isPending: state.requestYoguis.isPending,
        error: state.requestYoguis.error,
    }
)

const mapDispatchToProps = (dispatch) => (
    { 
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestYoguis: () => dispatch(requestYoguis())
    }
)

class App extends Component {
    

    componentDidMount() {
        this.props.onRequestYoguis();
    }

    render(){
        const {yoguis,searchField,onSearchChange,isPending} = this.props;
        const filteredYoguis = yoguis.filter((yogui => {
            return yogui.name.toLowerCase().includes(searchField.toLowerCase());
        }));
        
  
        return isPending
        ? <h1>Loading</h1>
        : (
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList yoguis={filteredYoguis} />
                </Scroll>   
            </div>
        )

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
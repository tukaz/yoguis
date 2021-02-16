import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import "./App.css";

const App = () => {

    const [yoguis,setYoguis] = useState([]);
    const [searchfield,setSearchField] = useState('');

    useEffect(() => {
        console.log('use effect 1'); 
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(r => r.json())
            .then(users => setYoguis(users))    
    },[]);

    useEffect(() => {
        console.log('use effect 2'); 
    },[searchfield]);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const getFilteredYoguis = () => {
        return yoguis.filter((yogui => {
            return yogui.name.toLowerCase().includes(searchfield.toLowerCase());
        }));
    }

    return !yoguis.length
    ? <h1>Loading</h1>
    : (
        <div className="tc">
            <h1 className="f1">Yoguis</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList yoguis={getFilteredYoguis()} />
            </Scroll>   
        </div>
    )
    // constructor(){
    //     super();
    //     this.state = {
    //         yoguis: [],
    //         searchfield: ''
    //     }
    // }

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users/")
    //         .then(r => r.json())
    //         .then(users => this.setState({yoguis:users}))
    // }
    


    // render(){
    //     const {yoguis,searchfield} = this.state;
    //     const filteredYoguis = yoguis.filter((yogui => {
    //         return yogui.name.toLowerCase().includes(searchfield.toLowerCase());
    //     }));

    //     return !yoguis.length
    //     ? <h1>Loading</h1>
    //     : (
    //         <div className="tc">
    //             <h1 className="f1">Yoguis</h1>
    //             <SearchBox searchChange={this.onSearchChange}/>
    //             <Scroll>
    //                 <CardList yoguis={filteredYoguis} />
    //             </Scroll>
    //         </div>
    //     )
    // }

}

export default App
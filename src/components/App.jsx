import React, {Component} from "react";
import DisplayName from "./DisplayName/DisplayName";
import NameList from "./NameList"
import AlertUser from "./AlertUser"
import Superherotable from "./Superherotable"
import { render } from "react-dom";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            namelist:  ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']

        }
    }

}
        this.state = {
            firstName: "Reggie",
            lastName: "white"
        }
        sayDevCodeCamp() {
            alert("DecCodeCamp");
        }
        return (
            <button onClick={this.sayDevCodeCamp}>
                Click me
            </button>
        );

       this.state = {
           Superherotable: [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            }
           ]
       }
        

        
    
        render() {
            return (
                <div>
                    <h1>List of Names</h1>
                    {/* [<h1>Mike</h1>, <h1>Nevin</h1>, <h1>Aaron</h1>, <h1>Tory</h1>, <h1>Kelly</h1> ] */}
                    {this.state.namelist.map(function(namelist){
                    return <h1>{namelist}</h1>
                
    
                    })}
            <h1>Mike</h1>
            <h1>Nevin</h1>
            <h1>Aaron</h1>
            <h1>Tory</h1>
            <h1>Kelly</h1>
            </div>
    
            );
        }

        render() { 
            return (
                <div>
                    <h1> Superhero table</h1>
                </div>
                    
            )
        }
    


           
        
      




export default App;
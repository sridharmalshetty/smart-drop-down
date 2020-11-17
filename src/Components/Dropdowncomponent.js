import React, { Component } from 'react';
import Select from 'react-select';
import Creatable from 'react-select/creatable';

export default class Dropdowncomponent extends Component {

        constructor(props){
            super(props)
            this.aquaticCreatures = [
                { label: 'Shark', value: 'Shark' },
                { label: 'Dolphin', value: 'Dolphin' },
                { label: 'Whale', value: 'Whale' },
                { label: 'Octopus', value: 'Octopus' },
                { label: 'Crab', value: 'Crab' },
                { label: 'Lobster', value: 'Lobster' },
              ];
              
        }

        addoptions(opt,metadata){
           // checks duplicates
            let filtered_item = this.aquaticCreatures.filter((i) => {
                return i.label === opt.label
              });
        
         // if lenght is 0 then item will get added
           if(filtered_item.length == 0 ){
             this.aquaticCreatures.push(opt)
             alert("Item added sucessfully")
           } 
           
        }
        render(){
            return (
                <div>
                    View items Here
                    <Select  options={this.aquaticCreatures} />
                    <br/>
                    <br />
                     Add items here
                    <Creatable  options={this.aquaticCreatures} onChange={(opt, meta) => this.addoptions(opt, meta)}/>
                </div>
            )
        }
}
import React from 'react';
import Card from './Card';


const CardList = ({robots})=>{  
  return(
    <div>
        {
            robots.map((robot)=>{
                const {name,email,id} = robot;  
                return (<Card key={id} id={id} name={name} email={email}/>);
            })
        }       
    </div>
  );
}
export default CardList;

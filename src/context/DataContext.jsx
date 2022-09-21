
import React, { createContext, useContext, useEffect, useState } from 'react'

let DataContext = createContext([]);

function useData() {
    return useContext(DataContext);
  }
 const DataProvider = ({children}) => {
    const [Data, setData] = useState(null);
    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
           return response.json();
          })
          .then(function(myJson) {
            setData(myJson)
          });
      }

    useEffect(() => {
        getData();
    }, []);
    return (
      <DataContext.Provider value={Data} >
        {children}
      </DataContext.Provider>
    )
}

export {useData,DataProvider}
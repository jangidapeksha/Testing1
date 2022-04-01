import React, { useEffect, useState } from 'react';
// import {
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";

const UserData = () => {

    const userData = [
        {
            Id: 101,
            Name: "Supriya ",
            LastName: "Deshmukh",
            Gender: "Female"
          },
      
          {
            Id: 102,
            Name: "Ashish jangid",
            LastName: "jangid",
            Gender: "Male"
          },
      
          {
            Id: 103,
            Name: "Mahima shrivastva",
            LastName: "shrivastva",
            Gender: "Female"
          },
      
          {
            Id: 104,
            Name: "Sharvari karkre",
            LastName: "karkre",
            Gender: "Female"
          },
      
          {
            Id: 105,
            Name: "Shefali shekh",
            LastName: "shekh",
            Gender: "Other"
          },
          {
            Id: 106,
            Name: "Apeksha ",
            LastName: "Jangid",
            Gender: "Female"
          }
        ];

    const [myArray, setmyArray] = useState([]);

    const DeleteUser = (Id) =>{
        
        const SelectDataEmp = myArray.filter ((curElm, index) =>{
            return index !== Id
            localStorage.getItem('lists', JSON.stringify(myArray));
            
        });
        
        setmyArray(SelectDataEmp);
    }

    const SetItem = async()=>{
        let lists = await localStorage.getItem('lists');
        
        if(lists!==null){
            lists = JSON.parse(lists);
            lists.concat(userData);
        }
        else{
            lists = userData;
        }
       
        await localStorage.setItem('lists', JSON.stringify(lists));
        console.log(lists);

        setmyArray(lists);

    }

    useEffect(() => {
        SetItem(); 
    }, []);

    return (
        <>
          <div className="container mt-5">
            <table className="table table-bordered  mt-5">
              <thead className="bg-primary text-center">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">lastName</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {myArray.map((curElm, index) => {
                return (
                  <tbody key={index}>
                    <tr className="text-center">
                      <td>{curElm.Name} </td>
                      <td>{curElm.LastName} </td>
                      <td>{curElm.Gender}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => DeleteUser(index)}
                        >
                           {/* <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} /> */}
                           Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </>
      );
    };

export default UserData;

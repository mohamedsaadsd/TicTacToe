import React,{useState} from 'react'

import Icon from "./components/icon"
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Card,CardBody,Container,Button,Col,Row} from "reactstrap"

const itemArray = new Array(9).fill("empty")

const App =()=> {
        
  const [isCross,setIsCross] = useState(false)
  const [winner,setWinner] = useState("")

  const reloadGame = () =>{
       setIsCross(false)
       setWinner("")
       itemArray.fill("empty",0,9)
  }

 const checkIsWinner = () =>{
       if(itemArray[0] === itemArray[1] &&
         itemArray[0] === itemArray[2] &&
         itemArray[0] !== "empty"){
           setWinner(`${itemArray[0]} won`)
         }
         else if(itemArray[3] === itemArray[4] &&
                 itemArray[3] === itemArray[5] &&
                  itemArray[3] !== "empty"){
                    setWinner(`${itemArray[3]} won`)
                  }
          else if(itemArray[6] === itemArray[7] &&
            itemArray[6] === itemArray[8] &&
             itemArray[6] !== "empty"){
               setWinner(`${itemArray[6]} won`)
             }  
             else if(itemArray[0] === itemArray[3] &&
              itemArray[0] === itemArray[6] &&
               itemArray[0] !== "empty"){
                 setWinner(`${itemArray[0]} won`)
               } 
               else if(itemArray[1] === itemArray[4] &&
                itemArray[1] === itemArray[7] &&
                 itemArray[1] !== "empty"){
                   setWinner(`${itemArray[1]} won`)
                 } 
                 else if(itemArray[2] === itemArray[5] &&
                  itemArray[2] === itemArray[8] &&
                   itemArray[2] !== "empty"){
                     setWinner(`${itemArray[2]} won`)
                   } 
                   else if(itemArray[0] === itemArray[4] &&
                    itemArray[0] === itemArray[8] &&
                     itemArray[0] !== "empty"){
                       setWinner(`${itemArray[0]} won`)
                     } 
                     else if(itemArray[2] === itemArray[5] &&
                      itemArray[2] === itemArray[6] &&
                       itemArray[2] !== "empty"){
                         setWinner(`${itemArray[2]} won`)
                       }              
 }
const changeItem = itemNumber =>{
       if(winner){
         return toast(winner,{type:"success"})
       }
       if(itemArray[itemNumber] === "empty"){
         itemArray[itemNumber] = isCross ? "cross" : "circle"
         setIsCross(!isCross)
               }
               else{
                 return toast("already filled",{type : "error"})
               }
               checkIsWinner();
       
}

  return (
     <Container className='p-5'>
       <ToastContainer position="bottom-center" />
       <Row>
         <Col md={6} className="offset-md-3">
           {winner?(
             <div className="mb-2 mt-2">
               <h1 className="text-success text-uppercase text-center">
                 {winner}
               </h1>
               <Button color="success" block onClick={reloadGame}>
                 RELOAD
                 </Button>
             </div>
           ) :(
             <h1 className="text-center text-warning">
               {isCross ? "Cross" : "Circle"} turns
             </h1>
           )}
           <div className="grid">
             {itemArray.map((item,index)=>(
               <Card color="warning" onClick={() => changeItem(index)}>
                 <CardBody className="box">
                   <Icon name={item} />
                 </CardBody>
               </Card>
             ))}
           </div>
         </Col>
       </Row>
     </Container>
  );
}

export default App;

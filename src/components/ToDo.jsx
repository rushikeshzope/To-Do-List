import { Component } from 'react';
import './ToDo.css';

export default class ToDo extends Component {
    constructor(){
        super();
        this.state = {
            text : "",
            todo : []
        }
    }

    render(){
        let { text, todo } = this.state;

        let handleChange = (event) => {
            this.setState({ text : event.target.value})
        }

        let handleClick = (event) => {
            this.setState({
                todo : [... todo, text]
            })
        }

        let handleUpdate = (index) => {
            let updatedText = prompt("Enter a new To Do")
            let filterTodo = todo.map((element, i)=>{
                if(i == index){
                    return updatedText;
                }
                return element
            })

            this.setState({
                todo : filterTodo
            })
        }

        let handleDelete = (index) => {
            let deletedData = todo.filter((element, i) => i !== index)
            this.setState({
                todo : deletedData
            })
        }

        return(
            <>
                <div className='inputButton'>
                    <input className='input' type="text" placeholder='ENTER NEW TEXT' onChange={handleChange} />
                    <button className='addTo' onClick={handleClick}>ADD TO DO</button>
                </div>

                <div>
                    {
                        todo.map(
                            (element, i) => (
                                <div key={i}>
                                    <p>{element}</p>
                                    <hr />
                                    <button className='addTo' onClick={() => handleUpdate(i)}>Update Todo</button>
                                    <button className='addTo' onClick={() => handleDelete(i)}>Delete Todo</button>
                                </div>
                                
                            )
                        )
                    }
                </div>

            </>
        )
    }
}
import React, { useState } from "react";

function TodoForm(props){
    const [text,setText] = useState("");

    function handleChange(event){ //criando a função que mudara o texto
        let t = event.target.value;
        setText(t)
    }

    function addItem(event){    
        event.preventDefault(); //evitando o comportamento default do botao
        if(text){//verificando se tem texto no text
            props.onAddItem(text)
            setText("")//zerando a variavel text
        }
    }

    return(<form>
        <input onChange={handleChange} type="text" value={text}></input> 
        <button onClick={addItem} >ADD</button>
        </form>)
}
export default TodoForm;
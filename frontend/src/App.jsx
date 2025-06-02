import { useEffect, useRef, useState } from 'react'
import "./styles/App.css"
import ProteinList from './components/ProteinList'


function App() {

  const [proteins, setProteins] = useState([])

  useEffect(() =>  {
    	const fetchProteins = async () =>{
        const response = await fetch("api/protein");
        const json = await response.json();
        if (Object.hasOwn(json, "error")){
          console.error(json.error)
          return;
        }
        setProteins(json);
      }
      fetchProteins()
  }, [])

  const nameRef = useRef();
  const seqRef = useRef();

  const UploadProtein = (e) => {
    //e -> event information. If you are in a form the submit button will usually redirect you, but we skipped this here.
    e.preventDefault(); //stop propagation of event, we will handle the button press here!
    
    let name = nameRef.current.value;
    let seq = seqRef.current.value;
    
    name = name.trim();
    seq = seq.replace(" ", "").trim();

    if (!name || !seq){
      console.error("Name and Sequence are required!!")
      return;
    }

    const newProtein = {
      name, //will expand to "name": name internally
      sequence: seq
    }
    
    //proteins.push(newProtein) //wont do anything, as we need to update the state!!! 
    setProteins([...proteins, newProtein]); // needed for react! 
    
    //Finally clear the textboxes

    nameRef.current.value = "";
    seqRef.current.value = "";
  
  
  }
  return (
      <div className="container fullwidth">
        <h1>Welcome to our protein database! </h1>
        <div className='container threequarterswidth'>
          <label>protein name</label>
          <input ref={nameRef} type='text'/>
          <label>sequence</label>
          <textarea ref={seqRef} style={{height: "5em"}}/>
          <button type='sumbit' onClick={(e) => UploadProtein(e)}>Upload Protein!</button>
        </div>
        <ProteinList proteins={proteins}/>
      </div>
  )
}

export default App

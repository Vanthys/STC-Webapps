import { useState } from 'react'
import "./styles/App.css"
import ProteinList from './components/ProteinList'


function App() {

  const [proteins, setProteins] = useState([{name: "fdhv9", sequence: "MKIVLVLYDAGKHAADEEKLYGCTENKLGIANWLKDQGHELITTSDKEGGNSVLDQHIPDADIIITTPFHPAYITKERIDKAKKLKLVVVAGVGSDHIDLDYINQTGKKISVLEVTGSNVVSVAEHVLMTMLVLVRNFVPAHEQIINHDWEVAAIAKDAYDIEGKTIATIGAGRIGYRVLERLVPFNPKELLYYDYQALPKDAEEKVGARRVENIEELVAQADIVTINAPLHAGTKGLINKELLSKFKKGAWLVNTARGAICVAEDVAAALESGQLRGYGGDVWFPQPAPKDHPWRDMRNKYGAGNAMTPHYSGTTLDAQTRYAEGTKNILESFFTGKFDYRPQDIILLNGEYITKAYGKHDKK"}])


  const UploadProtein = () => {
    //TODO: implement
  }
  return (
      <div className="container fullwidth">
        <h1>Welcome to our protein database! </h1>
        <div className='container threequarterswidth'>
          <label>protein name</label>
          <input type='text'/>
          <label>sequence</label>
          <textarea style={{height: "5em"}}/>
          <button type='sumbit'>Upload Protein!</button>
        </div>
        <ProteinList proteins={proteins}/>
      </div>
  )
}

export default App

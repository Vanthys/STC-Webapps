


function ProteinList({proteins}){



    return (
        <>
        <h2>My stored Proteins</h2>
        <ul style={{listStyleType: "none", margin: "0", padding: "0"}}>
            {proteins.map((element, key) => {
                
                const name = element.name;
                const startOfSequence = element.sequence.slice(0,20);
                const endOfSequence = element.sequence.slice(element.sequence.length -20);
                

                return (
                    <li key={element.name} style={{padding: "2px 10px", borderRadius: "0.5em", background: "#eee", marginBottom: "5px"}}>
                        <strong>
                        {element.name}
                        </strong>
                        <p>
                        {startOfSequence} ... {endOfSequence}
                        </p>
                    </li>
                )

            })}
        </ul>
        </>
    )
} 


export default ProteinList
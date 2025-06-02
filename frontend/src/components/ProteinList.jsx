


function ProteinList({proteins}){



    return (
        <ul>
            {proteins.map((element, key) => {
                
                const name = element.name;
                const startOfSequence = element.sequence.slice(0,5);
                const endOfSequence = element.sequence.slice(element.sequence.length -5);
                

                return (
                    <li>
                        <h3>
                        {element.name}
                        </h3>
                        <p>
                        {startOfSequence} ... {endOfSequence}
                        </p>
                    </li>
                )

            })}
        </ul>
    )
} 


export default ProteinList
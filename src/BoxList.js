import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
    //component should render all box components
    const [boxes, setBox] = useState([]);

    const addBox = newBox => {
        setBox(boxes => [...boxes, newBox]);
    }

    const remove = id => {
        setBox(boxes => boxes.filter(box => box.id !== id));
    }

    const boxComponents = boxes.map(box => (
        <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        removeBox={remove}
        />
    ))

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxComponents}
        </div>
    )
}

export default BoxList;
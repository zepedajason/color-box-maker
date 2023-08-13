import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
    //component should render all box components
    const INITIAL_STATE = [
        {width: 10, height: 10, backgroundColor: 'red'}
    ]
    const [boxes, setBox] = useState(INITIAL_STATE);
    const addBox = newBox => {
        setBox(boxes => [...boxes, newBox]);
    }

    const boxComponents = boxes.map(box => (
        <Box
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
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
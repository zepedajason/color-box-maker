const Box = ({id, width, height, backgroundColor, removeBox}) => {
     const boxStyle = {
         width: `${width}px`,
         height: `${height}px`,
         backgroundColor: backgroundColor,
         border: '1px solid black'
     }

     const remove = () => {
        removeBox(id);
     }
    
    return (
        <div>
            <div style={boxStyle}>
            </div>
            <button onClick={remove}>X</button>
        </div>
    )
    
}

export default Box;

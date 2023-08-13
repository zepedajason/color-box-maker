import { useState } from "react";
import { v4 as uuid} from 'uuid';
// this component should render a form that when submitted, creates a new ***Box***. You should be able to specify the ***Box***’s width, height, and background color. When the form is submitted, clear the input values.

// - When each ***Box*** component is displayed, add a button with the text of “X” next to each ***Box***. When this button is clicked, remove that specific box. This will require you to pass a function down as props - the button **should not** be a separate component, it should be included in the Box component.

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="width">Width</label>
            <input
            type="text"
            name="width"
            placeholder="Box Width"
            value={formData.width}
            onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="height">Height</label>
            <input
            type="text"
            name="height"
            placeholder="Box Height"
            value={formData.height}
            onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="backgroundColor">Background Color</label>
            <input
            type="text"
            name="backgroundColor"
            placeholder="Background Color"
            value={formData.backgroundColor}
            onChange={handleChange}
            />
            </div>
            <button>Add Box</button>

            </form>
        </div>
        
    )
}

export default NewBoxForm;
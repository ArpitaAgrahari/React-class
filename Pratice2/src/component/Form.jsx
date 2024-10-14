import { useState } from 'react';
const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue('');
    }
    return (
        <div>
            <form>
                <label>Name:</label>
                <input type="text" value={value} onChange={handleChange} />
                <label>Email:</label>
                <input type="text" value={value} onChange={handleChange} />
            </form>
        </div>
    )
}
export default useFormInput;





function App(){
    return{
        
    }
}
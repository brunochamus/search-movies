import { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState ("");
    const {setQuery, error} = useContext (DataContext);


    const handleSubmit = e => {
        e.preventDefault();
        setQuery(title);
    } 

    return (
        <div className='form-search'>
            <form onSubmit={handleSubmit}>
                <h3>Old Movie Finder</h3>
                <input type="text" placeholder="Title Movie" onChange={e => setTitle(e.target.value)}/>
                <input type="submit" placeholder="Search"/>
            </form>
        { error && <p className="error">The Movie doesn't exist</p> } 
        </div>
    )
}

export default FormSearch
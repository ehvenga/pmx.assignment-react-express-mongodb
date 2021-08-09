import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PATHS } from '../../config'
import dataAction from '../../redux/actions/dataAction'


const Upload = ({history}) => {

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [category, setCategory] = useState("Comedy")
    const [file, setFile] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', file)
        formData.append('name', name)
        formData.append('category', category)
        dispatch(dataAction.upload(formData))
        history.push(PATHS.HOME)
    }

    const onFileChange = (e) => {
        setFile(e.target.files[0])
    }

    return(
        <form className="container card col-11 col-md-6" onSubmit={submitHandler}>
            <div className="card-body">
                <input
                    className="form-control mb-2"
                    onChange={e => setName(e.target.value)}
                    name="name"
                    label="name"
                    type="text"
                    value={name}
                />
                <select name="category" className="mb-2" onChange={e => setCategory(e.target.value)}>
                    <option value="Comedy">Comedy</option>
                    <option value="Action">Action</option>
                    <option value="Horror">Horror</option>
                    <option value="Thriller">Thriller</option>
                </select>
                <input
                    className="form-control image-input mb-2"
                    name="image"
                    type="file" 
                    onChange={onFileChange}
                />
                <button className="col-3 btn btn-primary mt-3" type="submit">Upload</button>
            </div>
        </form>
    )
}

export default Upload
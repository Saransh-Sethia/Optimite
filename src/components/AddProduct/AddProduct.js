import { Stack, TextField, MenuItem, Button } from '@mui/material';
import { useState } from "react";
import axios from "axios";
import { config } from "../../App";

function AddProduct({products, performApi, handleCancel}){
const [formData, setFormData] = useState({
    imageLink: "",
    title: "",
    description: "",
    price: "",
});

const [isError, setIsError] = useState(false);
const [errorMsg, setErrorMsg] = useState("Test Error");

const handleChange = (event) => {
    const newFormData = {
        ...formData,
        [event.target.name]: event.target.value
    };

    setFormData(newFormData);
}

const handleSubmit = () => {
postVideoAPI(formData)
}

const postVideoAPI = async (reqBody) => {
    try{
    await axios.post(config.endpoint, reqBody);
    setIsError(false);
    setErrorMsg("");
    performApi();
    handleCancel();
    } catch(e){
    if(e.response){
        setIsError(true);
        setErrorMsg(e.response.data.message);
    }
    }
}
return (
    <>
<Stack spacing={3}>
<Stack spacing={1.5}>
<TextField 
required
id="upload-btn-image" 
className="form-element"
variant="outlined"
label="Image Link" 
name="imageLink"
placeholder="Image Link"
helperText="This Link will be used to derive the video"
fullWidth
value={formData.imageLink}
onChange={handleChange}
 />

<TextField 
required
id="upload-btn-image" 
className="form-element"
label="Preview Title" 
type="text"
name="previewTitle"
placeholder="Enter Title"
helperText="This Link will be used to preview the Thumbnail"
fullWidth
value={formData.title}
onChange={handleChange}
 />

<TextField 
required
id="upload-btn-title" 
className="form-element"
label="Description" 
name="description"
placeholder="Description"
helperText="This Describes the Product"
fullWidth
value={formData.description}
onChange={handleChange}
 />

<TextField 
required
id="upload-btn-title" 
className="form-element"
label="Price" 
type="number"
name="price"
placeholder="Price"
helperText="This tells the price of a product"
fullWidth
value={formData.price}
onChange={handleChange}
 />

</Stack>
<Stack direction="row">
<Button
id="upload-btn-submit"
variant="contained"
color="primary"
type="submit"
style={{marginRight: "10px"}}
onClick={handleSubmit}
>
    Submit
</Button>

<Button
id="upload-btn-cancel"
type="submit"
variant="contained"
color="error"
sx={{color: "white"}}
onClick={handleCancel}
>
    Cancel
</Button>
</Stack>
{isError && (
    <div className="error-msg">Something went wrong - {errorMsg}</div>
)}
</Stack>
    </>
)
}

export default AddProduct;
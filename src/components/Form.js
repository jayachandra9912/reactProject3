import React, { useState } from 'react';


const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phonenumber: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormData((prevformdata) => ({
            ...prevformdata,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.address.trim() === '' || formData.phonenumber.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        setSubmittedData(formData);
        setFormData({
            name: '',
            email: '',
            address: '',
            phonenumber: ''
        });
    };

    return ( <
        div className = 'boxi' >

        <
        form className = 'content'
        onSubmit = { handleSubmit } >
        <
        h2 > Form < /h2>

        <
        div className = 'input-parent' >
        <
        label htmlFor = "name" > Name: < /label>   <
        input type = "text"
        id = "name"
        name = "name"
        value = { formData.name }
        onChange = { handleChange }
        />  < /
        div >

        <
        div className = 'input-parent' >
        <
        label htmlFor = "email" > Email: < /label>  <
        input type = "email"
        id = "email"
        name = "email"
        value = { formData.email }
        onChange = { handleChange }
        /> < /
        div >

        <
        div className = 'input-parent' >
        <
        label htmlFor = "address" > Address: < /label>  <
        input type = "text"
        id = "address"
        name = "address"
        value = { formData.address }
        onChange = { handleChange }
        />  < /
        div >

        <
        div className = 'input-parent' >
        <
        label htmlFor = "phonenumber" > Phone No.: < /label>   <
        input type = "text"
        id = "phonenumber"
        name = "phonenumber"
        value = { formData.phonenumber }
        onChange = { handleChange }
        />  < /
        div >

        <
        button type = "submit" > Submit < /button> 

        <
        /form > 

        {
            submittedData && ( <
                div className = 'content' >
                <
                h2 > Submitted Data: < /h2>  <
                p className = 'input-par' > Name: { submittedData.name } < /p>  <
                p className = 'input-par' > Email: { submittedData.email } < /p>  <
                p className = 'input-par' > Address: { submittedData.address } < /p>  <
                p className = 'input-par' > Phone No.: { submittedData.phonenumber } < /p>   < /
                div >
            )
        } <
        /div>
    );
};

export default Form;
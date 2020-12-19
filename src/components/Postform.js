import React from 'react'

const Postform = () => {
    const [params, setParams] = React.useState({title: '', body: ''});

    const onChange = (e) => {
        params[e.target.name] = e.target.value;
        setParams(params);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: params.title,
            body: params.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit = {onSubmit}>
                <div>
                    <label>Title</label>
                    <br></br>
                    <input type='text' name='title' onChange={onChange} />
                </div>
                <br></br>
                <div>
                    <label>Body</label>
                    <br></br>
                    <textarea name='body' onChange={onChange} />
                </div>
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Postform;

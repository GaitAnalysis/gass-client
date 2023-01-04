import React from 'react';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }
    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
        console.log(event.target.files[0]);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        const { selectedFile } = this.state;
        formData.append('file', selectedFile);
        fetch('http://localhost:8000/upload/video', {
            method: 'POST',
            body: formData,
        });
    };

    render() {
        return (
            < div >
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="file" name="file" onChange={this.onChangeHandler} />
                    </label>
                    <input type="submit" value="Upload" />
                </form>
            </div >
        );
    }
}
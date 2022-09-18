import React from "react";
import getImages from "../api/ImageFinder";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            images: []
        };
    }

    onSearchSubmit = async (term) => {
        let result = await getImages(term);
        this.setState({images:result});
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/><br/>
                <div className="center">
                    <ImageList images={this.state.images}/>
                </div>
            </div>
        );
    }
}

export default App;
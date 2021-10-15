import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import Card from '@material-ui/core/Card';

interface ICGContentsProps extends RouteComponentProps {
    title: string;
    picture: string;
}

interface ICGContentsState {

}

class CGContents extends React.Component<ICGContentsProps, ICGContentsState> {
    render() {
        return (
            <div>
                <Card style={{ margin: "min(50px, 5%)", padding: "20px" }}>
                    <div style={{ float: "left", width: "100%" }}>
                        <img alt={this.props.title} style={{ margin: "60px 10px 10px 10px", width: "min(90%, 800px)", height: "auto" }} src={this.props.picture}></img><br />
                    </div>
                    <div style={{ float: "left", width: "min(800px, 90%)", padding: "5%" }}>
                        <h2>{this.props.title}</h2>
                        {this.props.children}
                    </div>
                </Card>
            </div>
        );
    }
}

export default withRouter(CGContents);
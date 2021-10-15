import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { GameInfo } from '../../data/gameData';

interface IGameContentsProps extends RouteComponentProps {
    info: GameInfo;
}

interface IGameContentsState {

}

class GameContents extends React.Component<IGameContentsProps, IGameContentsState> {
    render() {
        return (
            <div>
                <Card style={{ margin: "min(50px, 5%)", padding: "20px" }}>
                    <div style={{ float: "left", width: "min(400px, 90%)", padding: "20px" }}>
                        <h2>{this.props.info.title}</h2>
                        {this.props.children}
                    </div>
                    <div style={{ float: "left", width: "min(400px, 90%)" }}>
                        <img alt={this.props.info.title} style={{ margin: "60px 10px 10px 10px", width: "100%", height: "200px" }} src={this.props.info.picture}></img><br />
                        <Button
                            style={{ margin: "10px", width: "100%", color: "white", backgroundColor: "limegreen" }}
                            onClick={() => { window.location.href = `/game/${this.props.info.id}` }}>
                            くわしく見る
                        </Button>
                        <Button
                            style={{ margin: "10px", width: "100%", color: "white", backgroundColor: "blue" }}
                            onClick={() => { window.location.href = this.props.info.downloadUrl }}>
                            ダウンロード
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withRouter(GameContents);
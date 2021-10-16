import React from "react";
import "./Home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
/*
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
 */
import {Paper} from "@mui/material";

function Home(): JSX.Element {
    return (
        <div>
            <Header name="Home"/>
            <div className="home-content">
                <div className="welcome">
                    <img alt="header" src="/assets/img/header.jpg" className="headerimage"/>
                </div>
                <div className="contents">
                    <div className="content-articles">
                        {/*
                        <Card className="root" onClick={() => {
                            document.location.href = "/paper"
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    className="media"
                                    image="/assets/img/business_karoushi.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        部誌
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        部員の技能を集めた「電脳2021」を配布しています。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>*/
                        }
                    </div>
                    <Paper elevation={1} className="content-paper">
                        <div className="content-title">News</div>
                        <div className="news-article">
                            <div className="article-date">2021/10/15</div>
                            <div className="article-body">
                                サイトのプロトタイプを作成しました。
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={1} className="content-paper">
                        <div className="content-title">Schedule</div>
                    </Paper>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
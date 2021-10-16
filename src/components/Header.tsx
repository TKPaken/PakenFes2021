import React, {useState, useEffect} from "react";
import "./Header.css";

interface Props {
    name?: string;
}

function Header(props: Props): JSX.Element {
    const [nowWidth, setNowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);
    const [isHidden, setIsHidden] = useState(false);
    const [pos1, setpos1] = useState(window.pageYOffset);
    const [pos2, setpos2] = useState(window.pageYOffset);
    const onScroll = ((): void => {
        if (isOpen) return;
        if (!isHidden && window.pageYOffset - pos1 >= 100 && window.pageYOffset >= 300) {
            setIsHidden(true);
            setpos1(window.pageYOffset);
            setpos2(window.pageYOffset);
        } else if (!isHidden) {
            setpos1(Math.min(pos1, window.pageYOffset));
        }
        if (isHidden && pos2 - window.pageYOffset >= 100) {
            setIsHidden(false);
            setpos1(window.pageYOffset);
            setpos2(window.pageYOffset);
        } else if (isHidden) {
            setpos2(Math.max(pos2, window.pageYOffset));
        }
    });
    const onResize = ((): void => {
        if (window.innerWidth >= 1024) {
            setIsHidden(false);
            setIsOpen(true);
        }
        if (nowWidth >= 1024 && window.innerWidth < 1024) setIsOpen(false);
        setNowWidth(window.innerWidth);
    });
    const onKeyDown = ((): void => {
        if (isOpen && window.innerWidth < 1024) setIsOpen(false);
    });
    useEffect(() => {
        document.title = props.name + " | Diver City";
        document.addEventListener("scroll", onScroll);
        document.addEventListener("click", onKeyDown);
        window.addEventListener("resize", onResize);
        return (): void => {
            document.removeEventListener("scroll", onScroll);
            document.removeEventListener("click", onKeyDown);
            window.removeEventListener("resize", onResize);
        };
    });
    const url_list = [["Home", "/"]];
    const list_items = url_list.map((name, index) =>
        <li key={index}><a href={name[1]} className={name[0] === props.name ? "now" : ""}>{name[0]}</a></li>
    );
    return (
        <header className={(isHidden ? "hidden" : "tapu")}>
            <div className={"hideLayer " + (window.innerWidth < 1024 && isOpen ? "active" : "inactive")}/>
            <div className={"humburger " + (isOpen ? "active" : "inactive")}
                onClick={(): void => setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </div>
            <nav className={`globalMenuSp ${(isOpen ? "active" : "inactive")}`}>
                <div className="decotitle">Diver City</div>
                <div className="decosubtitle">Paken Fes 2021</div>
                <ul>
                    {list_items}
                    <li><a href="https://twitter.com/tk_paken" target="_blank" rel="noopener noreferrer">Twitter <img
                        alt="Paken twitter" src="/assets/img/link.svg" className="ext-link"/></a></li>
                </ul>
            </nav>
            <div className="title"><span>{props.name}</span>
            </div>
        </header>
    );
}

export default Header;
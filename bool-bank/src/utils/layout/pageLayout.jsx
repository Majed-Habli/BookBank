import React from "react";
import {Outlet} from "react-router-dom";
import styles from './pageLayout.module.css';
import Sidebar from "../../components/sidebar/sidebar";
import { useNavigate } from "react-router-dom";

const PageLayout = () => {
    // const navigate = useNavigate();
    // const sidebar = [
    //     {
    //     svg: <AiFillHome size={32} />,
    //     onclick: () => navigate("/parent"),
    //     },
    //     {
    //     svg: <ImStatsDots size={32} />,
    //     onclick: () => navigate("/parent/statistics"),
    //     },
    //     {
    //     svg: <BsCameraVideoFill size={32} />,
    //     onclick: () => navigate("/parent/bookmeet"),
    //     },
    // ];

    return (
        <div className={styles.Parent_layout}>
            <div className={styles.side_bar_container}>
                <Sidebar/>
            </div>
            <div className={styles.outlet_parent}>
                <Outlet/>
            </div>
        </div>
    )
}

export default PageLayout;
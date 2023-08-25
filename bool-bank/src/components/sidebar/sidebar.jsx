import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from './sidebar.module.css'

const Sidebar = (sidebarContent) => {
    const navigate = useNavigate();
//   const [content, useContent] = useState(sidebarContent ? sidebarContent : []);
    // onclick: () => navigate("/parent/bookmeet")

  return (
    <div className={styles.sidebar}>
        <div className={styles.top_container}>

            <div className={styles.logo}>
                <img src="/logo.png" alt="logo" />
            </div>

            <div className={styles.mid}>
                <div className={styles.nav}>Profile</div>
                <div className={styles.nav} onClick={()=>navigate("/user")}>Dashboard</div>
                <div className={styles.nav} onClick={()=>navigate("/user/liked")}>Liked</div>
                <div className={styles.nav}onClick={()=>navigate("/user/myList")}>My-List</div>
            </div>
        </div>
      
      <div
        className={styles.bottom}
        onClick={() => { localStorage.clear();
          ;navigate("/")}}>
        Log out
      </div>
    </div>
  );
};

export default Sidebar;
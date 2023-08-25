import React, { useState } from "react";
import styles from './popup.module.css';

const PopUp = (onClick) => {
    const [name, setName] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [ingredients, setIngredients] = useState("");

    const submit = async () => {
        try {
            const body = {
                name: name,
                cousine: cuisine,
                ingredients: ingredients
            }
            const token = localStorage.getItem('jwtToken');
            const parsebody = JSON.stringify(body);
            const response_two = await fetch ("http://127.0.0.1:8000/api/user/create_recipe",{
            method:"POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: parsebody

            });
            const data = await response_two.json();
            if(data.status === "success"){
                console.log("item added to likes")
            }else{
                console.log("failed to add to likes")
            }
        }catch(error){
            console.log("failed to call the api ",error);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.input_form}>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="cuisine" value={cuisine} onChange={(e) => setCuisine (e.target.value)}/>
                <input type="text" placeholder="ingredients" value={ingredients} onChange={(e) => setIngredients (e.target.value)}/>

                <div className={styles.container_footer}>
                    <input type="file" name="upload_file[]" id="upload_file" multiple="multiple" class="form-control" hidden/>
                    <label className={styles.upload_label} for="upload_file">Browse</label>
                </div>
                <div className={styles.card_right_bottom}>
                    <button >cancel</button>
                    <button onClick={() => submit()}>save</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp;
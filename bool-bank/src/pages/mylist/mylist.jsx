import React, { useState,useEffect } from "react";
import styles from './mylist.module.css'

const List = () => {
    const [recipes, setRecipes] = useState([]);

    const likedRecipes = async () => {
        try {

        const token = localStorage.getItem('jwtToken');
        const response = await fetch ("http://127.0.0.1:8000/api/user/shopping_list",{
            method:"GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
            });
            const data = await response.json();
            console.log(data,"data ya majed")
            if(data.status === "success"){
                setRecipes(data.data);
            }else{
                console.log("failed to set data")
            }
        }catch(error){
            console.log("failed to call the api ",error);
        }
    }

    useEffect(()=>{
        likedRecipes();
    },[]);

    const addToLike = async (recipe_id) => {
        try {
            const body = {
                recipe_id: recipe_id
            }
            const token = localStorage.getItem('jwtToken');
            const parsebody = JSON.stringify(body);
            const response_two = await fetch ("http://127.0.0.1:8000/api/user/like_recipe",{
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

    return (
        <div className={styles.container}>
            <div className={styles.top_bar}>
                <button>Add recipe</button>
            </div>
            <div className={styles.body}>
                <div className={styles.page_header}>My bought list: </div>
                <div className={styles.card_body}>

                    {recipes.map((recipe, index) =>(

                    <div key={index} className={styles.card}>
                        <div className={styles.card_left}>
                            <img src="/spiceyItalianPasta.jpg" alt="italianspicey pasta" />
                        </div>
                        <div className={styles.card_right}>
                            <div className={styles.card_right_top}>
                                <div className={styles.name}>{recipe.recipe_shoping_list.name}</div>
                                <div className={styles.cuisine}>{recipe.recipe_shoping_list.cousine}</div>
                                <div>{recipe.recipe_shoping_list.ingredients}</div>
                            </div>
                            <div className={styles.card_right_bottom}>
                                <button key={recipe.id} onClick={() => addToLike(recipe.id)}>unlike</button>
                                <button>add to cart</button>
                            </div>
                        </div>
                    </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default List;
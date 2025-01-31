import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post/Post';
import styles from './Posts.module.css'; // Import the CSS module


const Posts = ({setCurrentId}) => {
    const {posts, isLoading} = useSelector((state) => state.posts);

    if (!posts.length && !isLoading) return 'No se ha encontrado publicaciones.';

    return (
        isLoading ? (
            <img src={`/layout/images/5db61a9d71fa2c97ffff30c83dcaa6e5.gif`} style={{
                height: '100%',
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"
            }}/>
    ): (
                <div className={styles['container']}>
                    {posts?.map((post, indexAux) => (
                        <figure key={indexAux} className={`${styles.figure} card`}>
                                <Post post={post} setCurrentId={setCurrentId}/>
                            </figure>
                    ))}
                </div>
            )
    );
};

export default Posts;

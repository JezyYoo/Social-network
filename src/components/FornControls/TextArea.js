import React from 'react'
import styles from "./TextArea.module.css"




export const TextArea = ({input,meta,...props})=>{
    return (
        <div className={styles.formControl}>
            {meta.touched && meta.error && <div><span>{meta.error}</span></div>}
            <textarea {...input} {...props} className={meta.touched && meta.error ? styles.error : ""}/>
        </div>
    )
}

export const Input = ({input,meta,...props})=>{
    return (
        <div className={`${styles.formControl} ${styles.formInput}`}>
            {meta.touched && meta.error && <div><span>{meta.error}</span></div>}
            <input {...input} {...props} className={meta.touched && meta.error ? styles.error : ""}/>
        </div>
    )
}
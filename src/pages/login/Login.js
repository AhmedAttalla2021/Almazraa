import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
export const Login = ()=> {
    const navigate = useNavigate()
    return (
        <>
        <div className={styles.container}>
         
            <div className={styles.inputsDiv}>

                <p className={styles.title}> تسجيل الدخول</p>
                <input className={styles.inputs} type="text" placeholder='اسم المستخدم' />
                <input className={styles.inputs} type="password" placeholder='كلمة المرور' />
                <button className={styles.loginBtn}> تسجيل </button>
                <hr />
                <button className={styles.accountBtn} onClick={()=>{navigate('/create-account')}}> إنشاء حساب </button>
            </div>
            <div className={styles.logoDiv}>
             <div className={styles.subLogoDiv}>
               <div className={styles.imgDiv}>
                <img src={require('../../assets/mazraa.png')}   width="100%" height="350px" />
               </div>
               <div className={styles.txtDiv}>
                     يوجد نص ما هنا
               </div>
             </div>

            </div>

        </div>
        </>
    )
}
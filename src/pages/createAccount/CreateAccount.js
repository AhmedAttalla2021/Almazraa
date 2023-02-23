import styles from './CreateAccount.module.css'
export const CreateAccount = () => {
    return (
        
        <>
       <div className={styles.container}>
         
         <div className={styles.inputsDiv}>

             <p className={styles.title}>  إنشاء حساب جديد</p>
             <input className={styles.inputs} type="text" placeholder='اسم المستخدم' />
             <input className={styles.inputs} type="text" placeholder='الرقم التعريفى' />
             <input className={styles.inputs} type="text" placeholder='رقم المحمول' />
             <input className={styles.inputs} type="text" placeholder=' الموقع' />
             <input className={styles.inputs} type="password" placeholder='كلمة المرور' />
             <input className={styles.inputs} type="password" placeholder=' تأكيد كلمة المرور' />
             <button className={styles.loginBtn}> تسجيل </button>
             
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
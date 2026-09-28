import React from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./RegisterPage.module.css";
const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.right}>
          <span>wefewfewfwfwf</span>
        </div>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.containerForm}>
            <p>121212121</p>
            <span>23113132</span>
            <form action="">
              <div className={styles.inputBox}>
                <input className={styles.input} type="text" name="" />
                <label className={styles.lable}>NAME</label>
              </div>
              <div className={styles.inputBox}>
                <input className={styles.input} type="text" name="" />
                <label className={styles.lable}>password</label>
              </div>
              <div className={styles.inputBox}>
                <input className={styles.input} type="text" name="" />
                <label className={styles.lable}>email</label>
              </div>

              <button className={styles.btnGoogle}>
                {" "}
                <FcGoogle /> Google
              </button>
            </form>
            <div className={styles.des}>
              <span className={styles.desText}>
                ferferfe{" "}
                <a href="/login" className={styles.linkLogin}>
                  login
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

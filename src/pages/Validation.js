import React, {useState} from 'react';

import styles from './Sign.module.css';

const Validation = () => {

    return (
        <div className={styles.content}>
            <body>
                <div className={styles.main_content}>
                    <body>
                    <h2>회원가입</h2>
                        <form>
                            <p>
                                <label>인증번호</label>
                            </p>
                            <input 
                                type="text" 
                                required
                            />
                            <br/>
                            <br/>
                            <br/>
                            {<button className={styles.button_background}>회원가입</button>}
                        </form>
                    </body>
                </div>
            </body>
        </div>
    );
}
export default Validation;
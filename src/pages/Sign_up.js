import React from 'react';

import sign_up_style from './Sign_up.module.css';

const Sign_up = () => {
    return (
        <div>
            <div id="header"> 
                <div id="wrapper">
                <div id="content">
                </div>
                </div>
            </div>
            <div id="content">
                <div>
                    <h3>
                        <label for="id">아이디</label>
                    </h3>
                    <span class="box int_id">
                        <input type="text" id="id" class="int" maxlength="20"/>
                        <span class="step_url">@naver.com</span>
                    </span>
                    <span class="error_next_box"></span>
                </div>
            </div>
            <div class="btn_area">
                <button type="button">
                    <span>가입하기</span>
                </button>
            </div>
        </div>
    );
};

export default Sign_up;
import React, { Component } from "react";
import Sign_in from "./Sign_in";
import BoardForm from "./BoardForm";
import BoardWriteForm from "./BoardWriteForm";
import BoardDetail from "./BoardDetail";
import MypageForm from "./MypageForm";
import { Route, Routes } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";

class Body extends Component {
  render() {
    let resultForm;
    function getResultForm() {
      console.log($.cookie("login_id"));
      if ($.cookie("login_id")) {
        resultForm = <Route exact path="/" component={BoardForm}/>;
        return resultForm;
      } else {
        resultForm = <Route exact path="/" component={Sign_in}/>;
        return resultForm;
      }
    }
    getResultForm();
    return (
      <div>
        <Routes>
        <Route path="/mypage" component={MypageForm}/>
        <Route path="/boardWrite" component={BoardWriteForm}/>
        <Route path="/board/detail" component={BoardDetail}/>
        {resultForm}
        </Routes>
      </div>
    );
  }
}

export default Body;
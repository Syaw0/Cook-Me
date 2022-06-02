import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import Button from "../components/Button";

function ApiRef() {
  return (
    <>
      <div id="apiRef_con">
        <Nav />
        <div id="apiRef_detail_con">
          <div className="rare_data_con">
            <p className="rare_header">API REFERENCE </p>

            <div className="rare_con">
              <p className="rare_con_header">What API Used In Me??</p>
              <p className="rare_con_caption">
                {
                    "I used an API that has a database of cooking recipes. Of course, this API has a limit and you have to buy a subscription to use all its services. "
                }
              </p>
            </div>
            <div id="apiRef_btn_con"><Button inner="API REFERENCE" type="primary apiRefBtn" /></div>

           
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ApiRef;

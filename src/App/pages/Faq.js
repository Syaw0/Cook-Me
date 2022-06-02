import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";

function Faq() {
  return (
    <>
      <div id="faq_con">
        <Nav />
        <div id="faq_detail_con">
          <div className="rare_data_con">
            <p className="rare_header">FAQ </p>

            <div className="rare_con">
              <p className="rare_con_header">How Use Me</p>
              <p className="rare_con_caption">
                {
                  "You can easily use me. I mean, you know, one of the purposes of making me and the words that my developer used to repeat over and over again when I made it: simplicity, simplicity, simplicity. So yes you can simply use"
                }
              </p>
            </div>

            <div className="rare_con">
              <p className="rare_con_header">‌But How?</p>
              <p className="rare_con_caption">
                {
                  "I did not consist of more than one section. Of course, I am not upset about this. I like simplicity. You can access the category of recipes in the home section and by clicking on the buttons (containing categories) according to your personal interests in recipes Access that category"
                }
              </p>
            </div>

            <div className="rare_con">
              <p className="rare_con_header">Can I See More Detail?</p>
              <p className="rare_con_caption">
              Yes, my opt-in contains information that actually shows the reference site of each recipe. You can access the desired site by clicking the Follow button in the reference on the recipe card.
              </p>
            </div>

            <div className="rare_con">
              <p className="rare_con_header">How I Can Reach You </p>
              <p className="rare_con_caption">
                
                  You can simply follow me on {<a href="https://t.me/syaw0" target={"_blank"} className="linkinfaq">Telegram</a>} or {<a href="https://instagram.com/syaw0" target={"_blank"} className="linkinfaq">Instagram</a>} or even {<a href="https://ir.linkedin.com/in/siavash-mohebbi-490a09202?trk=people-guest_people_search-card" target={"_blank"} className="linkinfaq">Linkedin</a>}. If you do not have access to these apps you can email me
                
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Faq;

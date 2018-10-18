import React from "react";

const divStyle = {
  margin: 80,
};
  
const h1Style = {
  
  textAlign: 'center'
};



const Complete = () => (
  
  <div style={divStyle}>                                                   
    <div class="modal" tabindex="-1" role="dialog"></div>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div className="modal-body">
            <h5 class="modal-title">Order Complete</h5>
            {/* <h5 style={h5Style} >Order Complete</h5> */}
            <hr/>

            <p> <strong> Thanks for your order. You will recieve confirmation email shortly.</strong></p>
              <p > Christmas season can result in longer wait times.
              In order to save the spot at your preferred time and date, we highly recommend to make an appointment by clicking
               the link below.We will contact you when your order is ready for pickup.</p>
            <h1 style={h1Style}>
            <a  href="#" class="tooltip-test calendly-inline-widget" href="https://calendly.com/magicofwrapping-1/packages-dropoff" 
            title="Schedule">Schedule Dropoff</a> </h1>
            <br/>
            <br/>
          </div>
        </div>
      </div>
  </div>
)

export default Complete;
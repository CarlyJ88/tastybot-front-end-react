import React, { Fragment } from 'react';

function VitalIngredientsSearch() {

  return (
    <Fragment>
      <div style={{ backgroundColor: "WhiteSmoke", height: "100%", margin: "24px", color: "#070D0D" }}>
      <h4>Vital ingredients</h4>
        <form>
          <label style={{margin: "24px"}}>
            Sweet potato:
          <input
              name="sweetPotato"
              type="checkbox"
              // checked={this.state.}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Pulses:
          <input
              name="pulses" /* beans, lentils, chickpeas*/
              type="checkbox"
              // checked={this.state.}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Tofu:
          <input
              name="tofu"
              type="checkbox"
              // checked={this.state.}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Quinoa:
          <input
              name="quinoa"
              type="checkbox"
              // checked={this.state.}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Broccoli:
          <input
              name="broccoli"
              type="checkbox"
              // checked={this.state.}
              // onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    </Fragment>
  );
}

export default VitalIngredientsSearch;

import React, { Fragment } from 'react';

function CuisineSearch() {

  return (
    <Fragment>
      <div style={{ backgroundColor: "WhiteSmoke", height: "100%", margin: "24px", color: "#070D0D" }}>
      <h4>Cuisine</h4>
        <form>
          <label style={{margin: "24px"}}>
            Indian:
          <input
              name="Indian"
              type="checkbox"
              // checked={this.state.isGoing}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Chinese:
          <input
              name="Chinese"
              type="checkbox"
              // checked={this.state.isGoing}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Hungarian:
          <input
              name="Hungarian"
              type="checkbox"
              // checked={this.state.isGoing}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Italian:
          <input
              name="Italian"
              type="checkbox"
              // checked={this.state.isGoing}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            American:
          <input
              name="American"
              type="checkbox"
              // checked={this.state.isGoing}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Mexican:
          <input
              name="Mexican"
              type="checkbox"
              // checked={this.state.isGoing}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Japanese:
          <input
              name="Japanese"
              type="checkbox"
              // checked={this.state.isGoing}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            Thai:
          <input
              name="Thai"
              type="checkbox"
              // checked={this.state.isGoing}
              // onChange={this.handleInputChange}
            />
          </label>
          <label style={{margin: "24px"}}>
            English:
          <input
              name="English"
              type="checkbox"
              // checked={this.state.isGoing}
              // onChange={this.handleInputChange}
            />
          </label>
          <br />
          {/* <label>
            Number of meals:
          <input
              name="numberOfGuests"
              type="number"
              // value={this.state.numberOfGuests}
              // onChange={this.handleInputChange}
            />
          </label> */}
        </form>
      </div>
    </Fragment>
  );
}

export default CuisineSearch;

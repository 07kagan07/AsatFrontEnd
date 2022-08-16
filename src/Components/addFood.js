import React from "react";
//import { getAutoComplateFoods } from "./MenuEkle/getAutoComplateFoods";
const axios = require("axios").default;
const obje = {
  food: this.food.value,
  calorie: this.calorie.value,
};
export default class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post(process.env.REACT_APP_LOCAL_IP + "/food/add", {
        ...obje,
      })
      .then(function(response) {
        //console.log(response.data);
        props.yeniYemekEklendi(true);
        window.alert("Kaydedildi");
        //window.location.replace("/");
        // getAutoComplateFoods();
      })
      .catch(function(error) {
        console.log(error.response.status);
        if (error.response.status === 409) {
          alert("Bu Yiyecek Zaten Kayıtlı");
        }
      });

    this.food.value = "";
    this.calorie.value = "";
  }

  render() {
    return (
      <div className="container" id="addFood">
        <form className=" col-md-3  " onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="mb-3">
              <input
                ref={(ref) => {
                  this.food = ref;
                }}
                placeholder="Yiyecek Adı"
                type="text"
                name="food_name"
                className="form-control"
              />
            </div>
            <br />
            <div className="mb-3">
              <input
                ref={(ref) => {
                  this.calorie = ref;
                }}
                placeholder="Kalori"
                type="text"
                name="calorie"
                className="form-control"
              />
            </div>
            <br />
            <div className="mb-2">
              <button className="btn btn-primary" type="Submit">
                Kaydet
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setYemekGonder } from "../../Slices/addFoodSlice";
const axios = require("axios").default;

const EkleFood = () => {
  const addFood = useSelector((state) => state.addFood.YemekGonderildiMi);
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/food/add", {
        ...data,
      })
      .then(function(response) {
        window.alert("Kaydedildi");
        setValue("food", "");
        setValue("calorie", "");
        dispatch(setYemekGonder(true));
        //window.location.replace("/");
      })
      .catch(function(error) {
        console.log(error.response.status);
        if (error.response.status === 409) {
          alert("Bu Yiyecek Zaten Kayıtlı");
        }
      });
  };
  //console.log(addFood);
  return (
    <div className="container py-2" id="addFood">
      <form className=" col-md-3  " onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="mb-3">
            <input
              {...register("food", { required: true })}
              placeholder="Yiyecek Adı"
              type="text"
              className="form-control"
            />
          </div>
          <br />
          <h1>{addFood}</h1>
          <div className="mb-3">
            <input
              type="number"
              {...register("calorie")}
              placeholder="Kalori"
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
};

export default EkleFood;

import { css } from 'lit-element';

export const myCreditCardStyle = css`
:host{
    display: block;
    font-family: sans-serif;
}
#amount {
  font-size: 12px;
}

#amount strong {
  font-size: 14px;
  margin-bottom: .5rem;
  display: inline-block;

}

#card-back {
  top: 40px;
  right: 0;
  z-index: -2;
}

#card-btn {
  background-color: rgba(251, 251, 251, 0.8);
  color: #ffb242;
  position: absolute;
  bottom: -55px;
  right: 0;
  width: 150px;
  border-radius: 8px;
  height: 42px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  outline: none;
  border: none;
  cursor: pointer;
}

#card-btn:hover {
  background-color: rgba(251, 251, 251, 1);
}

#card-cvc {
  width: 60px;
  margin-bottom: 0;
}

#card-front,
#card-back {
  position: absolute;
  background-color: #498ee4;
  width: 390px;
  height: 250px;
  border-radius: 6px;
  padding: 20px 30px 0;
  box-sizing: border-box;
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 300;
  color: white;
}

#card-image {
  float: right;
  height: 100%;
}

#card-image i {
  font-size: 40px;
}

#card-month {
  width: 45% !important;
}

#card-number,
#card-holder {
  width: 100%;
}

#card-stripe {
  width: 100%;
  height: 55px;
  background-color: #3d5266;
  position: absolute;
  right: 0;
}

#card-success {
  color: #00b349;
}

#card-token {
  display: none;
}

#card-year {
  width: 45%;
  float: right;
}

#cardholder-container {
  width: 60%;
  display: inline-block;
}

#cvc-container {
  position: absolute;
  width: 110px;
  right: -115px;
  bottom: -10px;
  padding-left: 20px;
  box-sizing: border-box;
}

#cvc-container label {
  width: 100%;
}

#cvc-container p {
  font-size: 6px;
  text-transform: uppercase;
  opacity: 0.6;
  letter-spacing: .5px;
}

#form-container {
  margin: auto;
  width: 500px;
  height: 290px;
  position: relative;
}

#form-errors {
  color: #eb0000;
}
input {
  border: none;
  outline: none;
  background-color: #5a9def;
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  margin: 0 0 14px;
  color: white;
  font-size: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  letter-spacing: .7px;
}

input::-webkit-input-placeholder {
  color: #fff;
  opacity: 0.7;
  font-family: sans-serif letter-spacing: 1px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 10px;
}

label {
  display: block;
  margin: 7px auto 7px;
  text-transform:uppercase
}

#shadow {
  position: absolute;
  right: 0;
  width: 284px;
  height: 214px;
  top: 36px;
  background-color: #000;
  z-index: -1;
  border-radius: 8px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
}
.chip {
    position: absolute;
    width: 90px;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) translate(120px,20px);
}
`;
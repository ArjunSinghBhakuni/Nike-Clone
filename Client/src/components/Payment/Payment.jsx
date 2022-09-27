import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Payment = () => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  return (
    <>
      <form>
        <Box className="row">
          <Box className="col-sm-11">
            <label for="name">Card Number</label>
            <Input
              type="tel"
              className="form-control"
              value={number}
              name="number"
              maxlength="16"
              pattern="[0-9]+"
              onChange={(e) => {
                SetNumber(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></Input>
          </Box>
        </Box>
        <br />
        <Box className="row">
          <Box className="col-sm-11">
            <label for="name">Card Name</label>
            <Input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></Input>
          </Box>
        </Box>
        <br />
        <Box className="row">
          <Box>
            <label for="month">Expiration Date</label>
          </Box>
          <Box
            marginLeft={"-5px"}
            marginTop={"5px"}
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Box className="col=sm-4">
              <label for="cvv">CVV</label>
              <Input marginLeft={"10px"} w="70px" type={"number"} />
            </Box>
            <Box className="col-sm-4">
              <select
                className="form-control"
                name="expiry"
                onChange={handleDate}
              >
                <option value=" ">Month</option>
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
            </Box>
            &nbsp;
            <Box className="col-sm-4">
              <select
                className="form-control"
                name="expiry"
                onChange={handleExpiry}
              >
                <option value=" ">Year</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
                <option value="30">2030</option>
              </select>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};
export default Payment;

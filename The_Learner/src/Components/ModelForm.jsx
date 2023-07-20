import React from "react";

const ModelForm = ({ formData }) => {
  return (
    <div>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Country: {formData.country}</p>
      <p>Street Address: {formData.street_address}</p>
      <p>City: {formData.city}</p>
      <p>State/Province: {formData.state}</p>
      <p>ZIP/Postal Code: {formData.postal_code}</p>
      <p>Account Name: {formData.account_name}</p>
      <p>Account Type: {formData.account_type}</p>
      <p>Deposit Amount: {formData.deposite_amount}</p>
      <p>Gender: {formData.gender}</p>
      <p>Bank Email: {formData.bankemail}</p>
      <p>Employment Status: {formData.employee_status}</p>
    </div>
  );
};

export default ModelForm;

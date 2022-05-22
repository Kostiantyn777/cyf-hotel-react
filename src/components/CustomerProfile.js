import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerProfileData, setCustomerProfileData] = useState("");

  useEffect(() => {
    id &&
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(res => res.json())
        .then(data => {
          setCustomerProfileData(data);
        });
  }, [id]);

  return (
    <div>
      {id && (
        <ul>
          <li>Customer Profile {id}</li>
          <li>{`Email: ${customerProfileData.email}`}</li>
          {customerProfileData.vip ? (
            <li>Status: VIP customer</li>
          ) : (
            <li>Status: NO VIP customer</li>
          )}
          <li> {`Phone Number: ${customerProfileData.phoneNumber}`}</li>
        </ul>
      )}
    </div>
  );
};

export default CustomerProfile;

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Typography, Button, Grid } from '@mui/material';
// import PageLayout from 'layouts/PageLayout';

// const Details = () => {
//   const { state } = useLocation();
//   const { item } = state;

//   const downloadCV = () => {
//     const link = document.createElement('a');
//     link.href = `${process.env.REACT_APP_API_URL}/uploads/${item?.cv}`;
//     link.setAttribute('download', `${item?.firstName}_${item?.lastName}_CV.pdf`);
//     document.body.appendChild(link);
//     link.click();
//     link.parentNode.removeChild(link);
//   };

//   return (
//     <PageLayout title="Applicant Details">
//       <Grid container spacing={3} p={3}>
//         <Grid item xs={12}>
//           <Typography variant="h6">Name: {item?.firstName} {item?.lastName}</Typography>
//           <Typography>Email: {item?.email}</Typography>
//           <Typography>LinkedIn ID: {item?.linkedInId}</Typography>
//           <Typography>Country: {item?.country}</Typography>
//           <Typography>Highest Qualification: {item?.highestQualification}</Typography>
//           <Typography>Contact: {item?.contactNumber}</Typography>
//           <Typography>WhatsApp: {item?.whatsAppNumber}</Typography>
//         </Grid>
//         <Grid item>
//           <Button variant="contained" onClick={downloadCV}>
//             Download CV
//           </Button>
//         </Grid>
//       </Grid>
//     </PageLayout>
//   );
// };

// export default Details;

import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, Button, Grid } from "@mui/material";
import PageLayout from "layouts/PageLayout";

const Details = () => {
  const { state } = useLocation();
  const { item } = state;

  // const downloadCV = () => {
  //   const link = document.createElement('a');
  //   link.href = `${process.env.REACT_APP_API_URL}/uploads/${item?.cv}`;
  //   link.setAttribute('download', `${item?.firstName}_${item?.lastName}_CV.pdf`);
  //   document.body.appendChild(link);
  //   link.click();
  //   link.parentNode.removeChild(link);
  // };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = `${process.env.REACT_APP_API_URL}/uploads/${item?.cv}`;
    link.setAttribute("download", `${item?.firstName}_${item?.lastName}_CV.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageLayout title="Applicant Details">
      <Grid container spacing={3} p={3}>
        <Grid item xs={12}>
          <Typography variant="h3" marginBottom={2}>
            Career: {item?.careerId?.name}
          </Typography>
          <Typography variant="h6">
            Name: {item?.firstName} {item?.lastName}
          </Typography>
          <Typography>Email: {item?.email}</Typography>
          <Typography>LinkedIn ID: {item?.linkedInId}</Typography>
          <Typography>Country: {item?.country}</Typography>
          <Typography>Highest Qualification: {item?.highestQualification}</Typography>
          <Typography>Contact: {item?.contactNumber}</Typography>
          <Typography>WhatsApp: {item?.whatsAppNumber}</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={downloadCV}>
            View / Download CV
          </Button>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Details;

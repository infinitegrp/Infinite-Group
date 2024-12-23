// import PageLayout from "layouts/PageLayout";
// import TableData from "./tableData";

// function Applications() {
//   return (
//     <PageLayout
//       title={'Applications'}
//     >
//       <TableData />
//     </PageLayout>
//   );
// }

// export default Applications;

import React, { useState } from "react";
import PageLayout from "layouts/PageLayout";
import Box from "components/Box";
import Typography from "components/Typography";
import { Pagination } from "@mui/material";
import { useGetCareers } from "queries/ApplicantQuery";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data: careers, isLoading } = useGetCareers();

  const careersPerPage = 9;
  const paginatedCareers = careers?.slice(
    (page - 1) * careersPerPage,
    page * careersPerPage
  );

  const handleCardClick = (careerId) => {
    navigate(`/applications/tableData`, { state: { careerId } });
  };

  return (
    <PageLayout title={"Careers"}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={2}
        justifyContent="center"
        sx={{
          padding: "0 16px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {isLoading
          ? "Loading careers..."
          : paginatedCareers.map((career) => (

            <Box
              key={career._id}
              onClick={() => handleCardClick(career._id)}
              sx={{
                backgroundColor: "#f0f0f0",
                width: "300px",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                padding: "16px",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  marginBottom: "8px",
                  wordWrap: "break-word",
                  overflow: "hidden", 
                  textOverflow: "ellipsis", 
                  display: "-webkit-box",
                  WebkitLineClamp: 2, 
                  WebkitBoxOrient: "vertical",
                }}
              >
                {career.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  wordWrap: "break-word",
                }}
              >
                Applicants: {career.applicants.length}
              </Typography>
            </Box>

          ))}
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(careers?.length / careersPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </PageLayout>
  );
};

export default Index;

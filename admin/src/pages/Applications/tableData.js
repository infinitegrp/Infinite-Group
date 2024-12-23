// /* eslint-disable react/prop-types */
// import { useState } from 'react';
// import Box from 'components/Box';
// import { useNavigate } from 'react-router-dom';
// import Typography from 'components/Typography';
// import Table from 'examples/Tables/Table';
// import { Select, MenuItem, TextField, Button, Pagination,Icon } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useGetApplicants, useUpdateApplicantStatus } from 'queries/ApplicantQuery';

// const TableData = () => {
//   const navigate = useNavigate();
//   const [page, setPage] = useState(1);
//   const [perPage, setPerPage] = useState(10);
//   const [sortBy, setSortBy] = useState('createdAt');
//   const [order, setOrder] = useState('desc');
//   const [search, setSearch] = useState('');

//   const { data, isLoading } = useGetApplicants({ page, perPage, sortBy, order, search });
//   const { mutate: updateApplicantStatus, isLoading: updating } = useUpdateApplicantStatus();

//   const handleStatusChange = (applicationId, newStatus) => {
//     updateApplicantStatus({ applicationId, newStatus });
//   };

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   const columns = [
//     { name: 'Applicant', align: 'left' },
//     { name: 'Qualification', align: 'center' },
//     { name: 'CreatedAt', align: 'center' },
//     { name: 'Status', align: 'center' },
//     { name: 'Action', align: 'center' },
//   ];

//   const rows = data?.docs?.map(item => ({
//     Applicant: (
//       <>
//         <Link to={`/applications/details/${item?._id}`} state={{ item }}>
//           <Box key={item?._id} display="flex" alignItems="center" px={1} py={0.5}>
//             <Box display="flex" flexDirection="column">
//               <Typography variant="caption" color="secondary" fontWeight="medium">
//                 {item?.firstName} {item?.lastName}
//               </Typography>
//               <Typography variant="caption">{item?.email}</Typography>
//             </Box>
//           </Box>
//         </Link>
//       </>
//     ),
//     Status: (
//       <Select
//         value={item?.status}
//         onChange={(e) => handleStatusChange(item._id, e.target.value)}
//       >
//         {['Pending', 'Reviewed', 'Shortlisted', 'Rejected', 'Hired'].map(status => (
//           <MenuItem key={status} value={status}>
//             {status}
//           </MenuItem>
//         ))}
//       </Select>
//     ),
//     Qualification: (
//       <Typography variant="caption" color="secondary" fontWeight="medium">
//         {item?.highestQualification}
//       </Typography>
//     ),
//     CreatedAt: (
//       <Typography variant="caption" color="secondary" fontWeight="medium">
//         {new Date(item?.createdAt).toDateString()}
//       </Typography>
//     ),
//     Action: (
//       <Link to={`/applications/details/${item?._id}`} state={{ item }}>
//         <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
//           more_vert
//         </Icon>
//       </Link>
//     ),
//   }));

//   return (
//     <>
//       <Box display="flex" alignItems="center" justifyContent="space-between" py={2}>
//         <TextField
//           placeholder="Search applicants..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           variant="outlined"
//           size="small"
//         />
//         <Button onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
//           Sort by {sortBy} ({order})
//         </Button>
//       </Box>
//       {isLoading ? (
//         <Typography fontSize={14} sx={{ paddingX: 5 }}>Loading...</Typography>
//       ) : (
//         <Table columns={columns} rows={rows} />
//       )}
//       <Box style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
//         <Pagination
//           count={Math.ceil((data?.totalDocs || 0) / perPage)}
//           page={page}
//           onChange={handlePageChange}
//         />
//       </Box>
//     </>
//   );
// };

// export default TableData;

import { useState, useEffect } from "react";
import Box from "components/Box";
import { useLocation } from "react-router-dom";
import Typography from "components/Typography";
import Table from "examples/Tables/Table";
import { Select, MenuItem, TextField, Button, Pagination, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import PageLayout from "layouts/PageLayout";
import {
  useGetApplicants,
  useUpdateApplicantStatus,
  useDownloadAllCVs,
  useGetCareers,
} from "queries/ApplicantQuery";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const TableData = () => {
  const location = useLocation();
  const initialCareerId = location.state?.careerId || "";
  // const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [careerId, setCareer] = useState(initialCareerId);
  const [qualification, setQualification] = useState("");
  const [downloadLimit, setDownloadLimit] = useState();

  const { data, isLoading } = useGetApplicants({
    page,
    perPage,
    sortBy,
    order,
    search,
    status,
    careerId,
    qualification,
  });
  const { mutate: updateApplicantStatus } = useUpdateApplicantStatus();
  const { mutate: downloadAllCVs } = useDownloadAllCVs();
  const { data: careers } = useGetCareers();

  const handleStatusChange = (applicationId, newStatus) => {
    updateApplicantStatus({ applicationId, newStatus });
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleDownloadAllCVs = async (limit = null) => {
    const zip = new JSZip();
    try {
      const filePromises = data?.docs.slice(0, limit ?? data.docs.length).map(async (item, idx) => {
        const doc_url = `${process.env.REACT_APP_API_URL}/uploads/${item?.cv}`;
        const fileExtension = item?.cv?.split(".").pop() || "";
        const doc_name = `${String(idx + 1).padStart(2, "0")}_${item?.firstName}.${fileExtension}`;
        try {
          const response = await fetch(doc_url);
          const blob = await response.blob();
          zip.file(doc_name, blob);
        } catch (error) {
          console.error("Error downloading file:", error);
        }
      });

      await Promise.all(filePromises);
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "resume.zip");
    } catch (error) {
      console.error("Error generating zip file:", error);
    }
  };

  const columns = [
    { name: "Applicant", align: "left" },
    { name: "careers", align: "left" },
    { name: "Qualification", align: "center" },
    { name: "CreatedAt", align: "center" },
    { name: "Status", align: "center" },
    { name: "Action", align: "center" },
  ];

  const rows = data?.docs?.map((item) => ({
    Applicant: (
      <Link to={`/applications/details/${item?._id}`} state={{ item }}>
        <Box key={item?._id} display="flex" alignItems="center" px={1} py={0.5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="caption" color="secondary" fontWeight="medium">
              {item?.firstName} {item?.lastName}
            </Typography>
            <Typography variant="caption">{item?.email}</Typography>
          </Box>
        </Box>
      </Link>
    ),
    Status: (
      <Select value={item?.status} onChange={(e) => handleStatusChange(item._id, e.target.value)}>
        {["Pending", "Reviewed", "Shortlisted", "Rejected", "Hired"].map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    ),
    careers: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.careerId?.title}
      </Typography>
    ),
    Qualification: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.highestQualification}
      </Typography>
    ),
    CreatedAt: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Action: (
      <Link to={`/applications/details/${item?._id}`} state={{ item }}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }));

  return (
    <PageLayout title={"Careers"}>
      <Box gap={2}>

        <Box display="flex" alignItems="center" justifyContent="space-between" py={1}>
          <TextField
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            size="small"
          />

          <Button onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
            Sort by {sortBy} ({order})
          </Button>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between" py={1}>


          <TextField
            placeholder="Search by qualification..."
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            variant="outlined"
            size="medium"
          />

          <Box>
            <TextField
              type="number"
              placeholder="Download Limit"
              value={downloadLimit}
              onChange={(e) => setDownloadLimit(Number(e.target.value))}
              variant="outlined"
              size="medium"

            />
            <Button
              onClick={() => handleDownloadAllCVs(downloadLimit)}
              variant="contained"
              color="primary"
              
            >
              Download CVs
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <Box display="flex" alignItems="center" justifyContent="space-between" py={1}>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          displayEmpty
          size="small"
        >
          <MenuItem value="">All Status</MenuItem>
          {["Pending", "Reviewed", "Shortlisted", "Rejected", "Hired"].map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={careerId}
          onChange={(e) => setCareer(e.target.value)}
          displayEmpty
          size="small"
        >
          <MenuItem value="">All Careers</MenuItem>
          {careers?.map((career) => (
            <MenuItem key={career._id} value={career._id}>
              {career.title}
            </MenuItem>
          ))}
        </Select>
      </Box> */}
      {isLoading ? (
        <Typography fontSize={14} sx={{ paddingX: 5 }}>
          Loading...
        </Typography>
      ) : (
        <Table columns={columns} rows={rows} />
      )}
      <Box style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
        <Pagination
          count={Math.ceil((data?.totalDocs || 0) / perPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </PageLayout>
  );
};

export default TableData;

/* eslint-disable react/prop-types */
import { useState } from 'react';
import Box from 'components/Box';
import { useNavigate } from 'react-router-dom';
import Typography from 'components/Typography';
import Table from 'examples/Tables/Table';
import { Select, MenuItem, TextField, Button, Pagination } from '@mui/material';
import { useGetUser, useUpdateUserStatus } from 'queries/StoreQuery';
const TableData = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('createdAt');
  const [order, setOrder] = useState('desc');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');


  const { data, isLoading } = useGetUser({ page, perPage, sortBy, order, search,status });
  const { mutate: updateUserStatus, isLoading: deleting } = useUpdateUserStatus();



  const handleStatusChange = (userId, newStatus) => {
    updateUserStatus({ userId, newStatus });
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const columns = [
    { name: 'User', align: 'left' },
    { name: 'subject', align: 'center' },
    { name: 'message', align: 'center' },
    { name: 'CreatedAt', align: 'center' },
    { name: 'Status', align: 'center' },
    // { name: 'Action', align: 'center' },
  ];

  const rows = data?.docs?.map(item => ({
    User: (
      <>
        <Box key={item?._id} display="flex" alignItems="center" px={1} py={0.5}>

          <Box display="flex" flexDirection="column">
            <Typography variant="caption" color="secondary" fontWeight="medium">
              <span style={{ color: 'grey' }} >  {item?.firstName && item?.firstName} {item?.lastName && item?.lastName}</span>  <br />
              <a href={item?.email ? `mailto:${item?.email}` : '#'}>
              {item?.email && item?.email}<br />
              </a>
              <a href={item?.phoneNumber ? `tel:${item?.phoneNumber}` : '#'}>
                {item?.phoneNumber && item?.phoneNumber}
              </a>

            </Typography>
          </Box>
        </Box>
      </>

    ),
    subject: (
      <Typography variant="caption" color="secondary" fontWeight="medium">

        {item?.subject ? item.subject : '-'}
      </Typography>
    ),
    message: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.message ? item?.message.substring(0,30) : '-'}
      </Typography>
    ),
    CreatedAt: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Status: (
      <Select
        value={item?.is_verified ? 'Not-Viewed' : 'Viewed'}
        onChange={(e) => handleStatusChange(item._id, e.target.value)}
      >
        {['Viewed', 'Not-Viewed'].map(status => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    ),
    // Action: (
    //   <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    //     more_vert
    //   </Icon>
    // ),
  }));
  // console.log('datauser', data);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" py={2}>
        <TextField
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          size="small"
          style={{ marginLeft: '5px' }}
        />
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          displayEmpty
          size="small"
        >
          <MenuItem value="">All Status</MenuItem>
          {['Viewed', 'Not-Viewed'].map(status => (
            <MenuItem key={status} value={status==='Viewed' ? false : true}>
              {status}
            </MenuItem>
          ))}
        </Select>
        <Box>
          <Button onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
            Sort by {sortBy} ({order})
          </Button>
        </Box>
      </Box>
      {isLoading ? (
        <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography>
      ) : (
        <Table columns={columns} rows={rows} />
      )}
      <Box style={{ display: 'flex', justifyContent: 'center', Margin: '10px' }}>
        <Pagination
          count={Math.ceil((data?.totalDocs || 0) / perPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default TableData;


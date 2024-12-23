
import { useState } from 'react';
import Box from 'components/Box';
import Typography from 'components/Typography';
import Table from 'examples/Tables/Table';
import { Select, MenuItem, TextField, Button, Pagination } from '@mui/material';
import { useGetSubscribe, useUpdateSubscribeStatus } from 'queries/StoreQuery';
const TableData = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('createdAt');
  const [order, setOrder] = useState('desc');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');


  const { data, isLoading } = useGetSubscribe({ page, perPage, sortBy, order, search,status });
  const { mutate: updateSubscribeStatus, isLoading: deleting } = useUpdateSubscribeStatus();



  const handleStatusChange = (SubscribeId, newStatus) => {
    updateSubscribeStatus({ SubscribeId, newStatus });
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const columns = [
    { name: 'subscribe', align: 'left' },
    { name: 'CreatedAt', align: 'center' },
    { name: 'Status', align: 'center' },
  ];

  const rows = data?.docs?.map(item => ({
    
    subscribe: (
      <Typography variant="caption" color="secondary" fontWeight="medium">

        {item?.email ? item.email : '-'}
      </Typography>
    ),
    
    CreatedAt: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Status: (
      <Select
        value={item?.status ? 'Not-Viewed' : 'Viewed'}
        onChange={(e) => handleStatusChange(item._id, e.target.value)}
      >
        {['Viewed', 'Not-Viewed'].map(status => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    ),
  }));

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


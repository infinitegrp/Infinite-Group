import Button from 'components/Button';
import { Link } from 'react-router-dom';
import PageLayout from "layouts/PageLayout";
import TableData from "./tableData";

function Products() {
  return (
    <PageLayout
      title={'Careers'}
      action={
        <Button component={Link} to={`/careers/addCareers`}>Add Career</Button>
      }
    >
      <TableData/>
    </PageLayout>
  );
}

export default Products;

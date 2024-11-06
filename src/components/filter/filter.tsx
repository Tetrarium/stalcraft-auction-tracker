import { Button, Form, Row } from "react-bootstrap";

import RecycleIcon from "../svg-icons/recycle-icon";
import Trash3Icon from "../svg-icons/trash3-icon";
import FInput from "./f-input";
import FSelect from "./f-select";

const Filter = () => {
  return (
    <Form className="pt-4 pb-5">
      <Row>
        <FSelect
          className="col-md-3"
          label="Artifact name"
          name="status"
          values={[
            { title: 'All', value: '' },
            { title: 'Lard', value: 'lard' }
          ]}
        />
        <FSelect
          className="col-md-3"
          label="Rarity"
          name="rarity"
          values={[
            { title: 'All', value: '' },
            { title: 'Common', value: '' }
          ]}
        />
        <FSelect
          className="col-md-2"
          label="Pattern"
          name="type"
          values={[
            { title: 'All', value: '' },
            { title: '0', value: '0' },
            { title: '1', value: '1' }
          ]}
        />
        <FInput
          className="col-md-2"
          label="Min profit"
          name="min"
          type="number"
          placeholder="Enter min profit"
          min={0}
          max={999999999999999}
        />
        <FInput
          className="col-md-2"
          label="Min % profit"
          name="minProfit"
          placeholder="Enter min %"
        />
      </Row>
      <div className="my-3 d-flex gap-4">
        <Form.Check
          type="switch"
          label="Sound notification"
          name="sound-switch"
        />
        <Form.Check
          type="switch"
          label="Include commission in the profit"
          name="commission-switch"
        />
      </div>
      <div className="col-md-5 d-flex gap-2 align-items-end my-3">
        <Button
          variant="success"
        >
          Enter filters
        </Button>
        <Button
          variant="outline-danger"
        >
          <RecycleIcon />
          {' '}
          Clear filters
        </Button>
        <Button
          variant="outline-danger"
        >
          <Trash3Icon />
          {' '}
          Clear artifacts
        </Button>
      </div>
    </Form>
  );
};

export default Filter;
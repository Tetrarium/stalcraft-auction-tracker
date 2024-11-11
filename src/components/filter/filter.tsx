import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

import { useGetInitDataQuery } from "@/services/lots";

import RecycleIcon from "../svg-icons/recycle-icon";
import Trash3Icon from "../svg-icons/trash3-icon";
import FInput from "./f-input";
import FSelect from "./f-select";
import { getFilterSelectItems } from "./utils";

const initialFilter = {
  name: '',
  rarity: '',
  pattern: '',
};

const Filter = () => {
  const { data } = useGetInitDataQuery();
  const [filter, setFilter] = useState(initialFilter);

  const { names, rarities, patterns } = getFilterSelectItems(data);

  const handleChange = (name: string, value: string) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <Form className="pt-4 pb-5">
      <Row>
        <FSelect
          className="col-md-3"
          label="Artifact name"
          name="name"
          values={[
            { title: 'All', value: '' },
            ...names,
          ]}
          value={filter.name}
          onChange={handleChange}
        />
        <FSelect
          className="col-md-3"
          label="Rarity"
          name="rarity"
          values={[
            { title: 'All', value: '' },
            ...rarities,
          ]}
          value={filter.rarity}
          onChange={handleChange}
        />
        <FSelect
          className="col-md-2"
          label="Pattern"
          name="pattern"
          values={[
            { title: 'All', value: '' },
            ...patterns,
          ]}
          value={filter.pattern}
          onChange={handleChange}
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
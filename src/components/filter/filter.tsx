import { Row } from "react-bootstrap";

import FInput from "./f-input";
import FSelect from "./f-select";

const Filter = () => {
  return (
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
  );
};

export default Filter;
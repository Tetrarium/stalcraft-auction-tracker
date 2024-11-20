import { Button, Container, Form, Row } from "react-bootstrap";

import Trash3Icon from "@/components/svg-icons/trash3-icon";
import FSelect from "@/UI/inputs/f-select";
import LabeledRange from "@/UI/range/labeled-range/labeled-range";

import s from "./advanced-filter.module.sass";

const AdvancedFilter = () => {
  return (
    <Container className={s.container}>
      <h2>Advanced settings</h2>
      <Form>
        <Row>
          <FSelect
            className="col-md-3"
            label="Artifact name"
            name='artifact'
            value=''
            values={[
              { title: 'All', value: '' },
              { title: 'Mirror', value: 'mirror' }
            ]}
            onChange={() => { }}
          />
          <LabeledRange
            className="col-md-5"
            label="Rarity"
            name="rarity"
            values={[1, 2]}
            points={[
              { value: 1, title: '1' },
              { value: 2, title: '2' },
              { value: 3, title: '3' },
            ]}
          />
        </Row>
        <div className="col-md-5 d-flex gap-2 align-items-end my-3">
          <Button
            variant="success"
          >
            Create
          </Button>
          <Button
            variant="outline-danger"
          >
            <Trash3Icon />
            {' '}
            Clear
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AdvancedFilter;
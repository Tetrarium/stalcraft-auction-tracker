import { Button, Col, Modal, Row } from "react-bootstrap";

import Trash3Icon from "@/components/svg-icons/trash3-icon";
import FSelect from "@/UI/inputs/f-select";
import MinMaxRangeSlider from "@/UI/range/min-max-range-slider/min-max-range-slider";
import StepRangeSlider from "@/UI/range/step-range-slider/step-range-slider";

import s from "./advanced-filter.module.sass";

const rarities = [
  { value: 1, title: 'Common' },
  { value: 2, title: 'Uncommon' },
  { value: 3, title: 'Special' },
  { value: 4, title: 'Rare' },
  { value: 5, title: 'Exceptional' },
  { value: 6, title: 'Legendary' },
];

const patterns = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 10 },
  { value: 11 },
  { value: 12 },
  { value: 13 },
  { value: 14 },
  { value: 15 },
];

const AdvancedFilter = () => {
  return (
    <Modal.Dialog className={s.container} fullscreen>
      <Modal.Header closeButton className={s.header} closeVariant="white">Advanced settings</Modal.Header>
      <Modal.Body className={s.body}>
        <Row>
          <Col xl={2} md={12} xs={12} >
            <FSelect
              label="Artifact name"
              name='artifact'
              value=''
              values={[
                { title: 'All', value: '' },
                { title: 'Mirror', value: 'mirror' }
              ]}
              onChange={() => { }}
            />
          </Col>
          <Col xl={3} md={6} xs={12}>
            <StepRangeSlider
              label="Rarity"
              name="rarity"
              values={[1, 3]}
              points={rarities}
            />
          </Col>
          <Col xl={3} md={6} xs={12}>
            <StepRangeSlider
              label="Pattern"
              name="pattern"
              values={[2, 5]}
              points={patterns}
            />
          </Col>
          <Col xl={2} md={6} xs={12}>
            <MinMaxRangeSlider
              label="Profit"
              name="profit"
              values={[6600, 15000]}
              min={0}
              max={15000}
            />
          </Col>
          <Col xl={2} md={6}>
            <MinMaxRangeSlider
              label="Profit %"
              name="profitPercent"
              values={[50, 90]}
              min={0}
              max={100}
            />
          </Col>
        </Row>
        <div className="d-flex gap-2 my-3">
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
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default AdvancedFilter;
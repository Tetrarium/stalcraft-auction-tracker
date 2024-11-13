import { ChangeEvent, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

import { useGetInitDataQuery } from "@/API/auctionApi";
import { useAppDispatch, useAppSelector } from "@/hooks/typedHooks";
import { clearFilter, setFilter as actionSetFilter } from "@/store/feature/filters/filtersSlice";
import { clearLots } from "@/store/feature/lots/lotsSlice";

import RecycleIcon from "../svg-icons/recycle-icon";
import Trash3Icon from "../svg-icons/trash3-icon";
import FInput from "./f-input";
import FSelect from "./f-select";
import { getFilterSelectItems } from "./utils";

const MIN_PROFIT = 0;
const MAX_PROFIT = 999_999_999;

const Filter = () => {
  const dispatch = useAppDispatch();
  const { filter: initialFilter } = useAppSelector(state => state.filter);
  const { data } = useGetInitDataQuery();
  const [filter, setFilter] = useState(initialFilter);

  const { names, rarities, patterns } = getFilterSelectItems(data);

  const handleChange = (name: string, value: string) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleChangeMinProfit = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      handleChange('minProfit', '');
      return;
    }

    const value = Math.min(Math.max(MIN_PROFIT, +e.target.value), MAX_PROFIT);

    handleChange('minProfit', value.toString());
  };

  const handleChangeMinProfitPercent = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const rawValue = target.value.replace(/[^\d]/g, '');

    if (rawValue === '') {
      handleChange('minProfitPercent', '');
      return;
    }

    const value = Math.min(Math.max(parseInt(rawValue), 0), 10_000_000);

    handleChange('minProfitPercent', value + '%');
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
          name="minProfit"
          type="number"
          placeholder="Enter min profit"
          min={0}
          max={999999999999999}
          value={filter.minProfit}
          onChange={handleChangeMinProfit}
        />
        <FInput
          className="col-md-2"
          label="Min % profit"
          name="minProfitPercent"
          placeholder="Enter min %"
          value={filter.minProfitPercent}
          onChange={handleChangeMinProfitPercent}
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
          onClick={() => {
            dispatch(actionSetFilter(filter));
          }}
        >
          Enter filters
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => {
            dispatch(clearFilter());
          }}
        >
          <RecycleIcon />
          {' '}
          Clear filters
        </Button>
        <Button
          variant="outline-danger"
          onClick={() => {
            dispatch(clearLots());
          }}
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
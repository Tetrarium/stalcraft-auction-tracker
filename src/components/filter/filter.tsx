import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { useGetInitDataQuery } from "@/API/auctionApi";
import { useAppDispatch, useAppSelector } from "@/hooks/typedHooks";
import {
    clearFilter, initialFilter, setFilter as actionSetFilter
} from "@/store/feature/filtersSlice";
import { clearLots } from "@/store/feature/lotsSlice";
import { setLotNotification } from "@/store/feature/settingsSlice";

import RecycleIcon from "../svg-icons/recycle-icon";
import Trash3Icon from "../svg-icons/trash3-icon";
import SimpleFilter from "./simple-filter";

const Filter = () => {
  const dispatch = useAppDispatch();
  const { lotNotification } = useAppSelector(state => state.appSettings);
  const { filter: curentFilter } = useAppSelector(state => state.filter);
  const { data: filterParams } = useGetInitDataQuery();
  const [filter, setFilter] = useState(curentFilter);
  const [isAdvancedFilter, setIsAdvancedFilter] = useState(false);

  return (
    <Form className="pt-4 pb-5">
      {!isAdvancedFilter && <SimpleFilter initData={filterParams} />}
      <div className="my-3 d-flex gap-4">
        <Form.Check
          type="switch"
          label="Sound notification"
          name="sound-switch"
          checked={lotNotification}
          onChange={(e) => {
            dispatch(
              setLotNotification(e.target.checked),
            );
          }}
        />
        <Form.Check
          type="switch"
          label="Include commission in the profit"
          name="commission-switch"
        />
        <Form.Check
          type="switch"
          label="Advanced settings"
          name="commission-switch"
          checked={isAdvancedFilter}
          onChange={(e) => {
            setIsAdvancedFilter(e.target.checked);
          }}
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
            setFilter(initialFilter);
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
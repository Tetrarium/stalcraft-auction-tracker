import { ChangeEvent, FC, useCallback } from "react";
import { Row } from "react-bootstrap";

import { useGetInitDataQuery } from "@/API/auctionApi";
import { IFilter } from "@/types/filter";
import FInput from "@/UI/inputs/f-input";
import FSelect from "@/UI/inputs/f-select";

import { getFilterSelectItems } from "./utils";

const MIN_PROFIT = 0;
const MAX_PROFIT = 999_999_999;

enum FIELD_NAMES {
  'itemId' = 'itemId',
  'qlt' = 'qlt',
  'ptn' = 'ptn',
  'minProfit' = 'minProfit',
  'profitPercent' = 'profitPercent',
}

interface FilterProps {
  data: IFilter;
  onChange: (name: string, value: string) => void;
}

const SimpleFilter: FC<FilterProps> = ({ data, onChange }) => {
  const { data: filterParams } = useGetInitDataQuery();
  const { itemsIds, qualities, patterns } = getFilterSelectItems(filterParams);



  const handleChangeMinProfit = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      onChange(FIELD_NAMES.minProfit, '');
      return;
    }

    const value = Math.min(Math.max(MIN_PROFIT, +e.target.value), MAX_PROFIT);

    onChange(FIELD_NAMES.minProfit, value.toString());
  }, [onChange]);

  const handleChangeMinProfitPercent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const rawValue = target.value.replace(/[^\d]/g, '');

    if (rawValue === '') {
      onChange(FIELD_NAMES.profitPercent, '');
      return;
    }

    const value = Math.min(Math.max(parseInt(rawValue), 0), 100);

    onChange(FIELD_NAMES.profitPercent, value + '%');
  }, [onChange]);

  return (
    <Row>
      <FSelect
        className="col-md-3"
        label="Artifact name"
        name={FIELD_NAMES.itemId}
        values={[
          { title: 'All', value: '' },
          ...itemsIds,
        ]}
        value={data[FIELD_NAMES.itemId]}
        onChange={onChange}
      />
      <FSelect
        className="col-md-3"
        label="Rarity"
        name={FIELD_NAMES.qlt}
        values={[
          { title: 'All', value: '' },
          ...qualities,
        ]}
        value={data[FIELD_NAMES.qlt]}
        onChange={onChange}
      />
      <FSelect
        className="col-md-2"
        label="Pattern"
        name={FIELD_NAMES.ptn}
        values={[
          { title: 'All', value: '' },
          ...patterns,
        ]}
        value={data[FIELD_NAMES.ptn]}
        onChange={onChange}
      />
      <FInput
        className="col-md-2"
        label="Min profit"
        name={FIELD_NAMES.minProfit}
        type="number"
        placeholder="Enter min profit"
        min={0}
        max={999999999999999}
        value={data[FIELD_NAMES.minProfit]}
        onChange={handleChangeMinProfit}
      />
      <FInput
        className="col-md-2"
        label="Min % profit"
        name={FIELD_NAMES.profitPercent}
        placeholder="Enter min %"
        value={data[FIELD_NAMES.profitPercent]}
        onChange={handleChangeMinProfitPercent}
      />
    </Row>
  );
};

export default SimpleFilter;
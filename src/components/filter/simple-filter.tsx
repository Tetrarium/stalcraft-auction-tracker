import { ChangeEvent, FC, useCallback, useState } from "react";
import { Row } from "react-bootstrap";

import { useAppSelector } from "@/hooks/typedHooks";
import { IInitData } from "@/types/initData";
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
  initData?: IInitData;
}

const SimpleFilter: FC<FilterProps> = ({ initData }) => {
  const { filter: curentFilter } = useAppSelector(state => state.filter);
  const [filter, setFilter] = useState(curentFilter);

  const { itemsIds, qualities, patterns } = getFilterSelectItems(initData);

  const handleChange = useCallback((name: string, value: string) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  }, []);

  const handleChangeMinProfit = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      handleChange(FIELD_NAMES.minProfit, '');
      return;
    }

    const value = Math.min(Math.max(MIN_PROFIT, +e.target.value), MAX_PROFIT);

    handleChange(FIELD_NAMES.minProfit, value.toString());
  }, []);

  const handleChangeMinProfitPercent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const rawValue = target.value.replace(/[^\d]/g, '');

    if (rawValue === '') {
      handleChange(FIELD_NAMES.profitPercent, '');
      return;
    }

    const value = Math.min(Math.max(parseInt(rawValue), 0), 100);

    handleChange(FIELD_NAMES.profitPercent, value + '%');
  }, []);

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
        value={filter[FIELD_NAMES.itemId]}
        onChange={handleChange}
      />
      <FSelect
        className="col-md-3"
        label="Rarity"
        name={FIELD_NAMES.qlt}
        values={[
          { title: 'All', value: '' },
          ...qualities,
        ]}
        value={filter[FIELD_NAMES.qlt]}
        onChange={handleChange}
      />
      <FSelect
        className="col-md-2"
        label="Pattern"
        name={FIELD_NAMES.ptn}
        values={[
          { title: 'All', value: '' },
          ...patterns,
        ]}
        value={filter[FIELD_NAMES.ptn]}
        onChange={handleChange}
      />
      <FInput
        className="col-md-2"
        label="Min profit"
        name={FIELD_NAMES.minProfit}
        type="number"
        placeholder="Enter min profit"
        min={0}
        max={999999999999999}
        value={filter[FIELD_NAMES.minProfit]}
        onChange={handleChangeMinProfit}
      />
      <FInput
        className="col-md-2"
        label="Min % profit"
        name={FIELD_NAMES.profitPercent}
        placeholder="Enter min %"
        value={filter[FIELD_NAMES.profitPercent]}
        onChange={handleChangeMinProfitPercent}
      />
    </Row>
  );
};

export default SimpleFilter;
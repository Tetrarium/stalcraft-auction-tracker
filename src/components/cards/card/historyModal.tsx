import classNames from "classnames";
import { FC, memo } from "react";

import { useGetHistoryQuery } from "@/API/auctionApi";
import { IHistoryItem } from "@/types/historyItem";
import DefaultModal, { DefaultModalProps } from "@/UI/modal/defaultModal";

import s from "./historyModal.module.sass";
import sMods from "./modificators.module.sass";
import { getRarity } from "./utils";

interface HistoryModalProps {
  uniqueId: number;
}

const HistoryModal: FC<HistoryModalProps & Omit<DefaultModalProps, 'isOpen'>> = memo(({
  uniqueId,
  onClose,
  ...other
}) => {
  const { data, isLoading, isError } = useGetHistoryQuery(uniqueId);
  console.log(data);

  return (
    <DefaultModal
      onClose={onClose}
      isOpen={true}
      {...other}
    >
      <div className={s.container}>
        <button className={s.closeBtn} onClick={onClose}>&times;</button>
        {data?.length === 0 &&
          <div className={s.empty}>Empty history</div>
        }
        {data && data.length > 0 &&
          <>
            <HistoryHeader uniqueId={uniqueId} />
            <HistoryList data={data} />
          </>
        }
        {isError &&
          <div>Error</div>
        }
        {isLoading &&
          <div>Loading...</div>
        }
      </div>
    </DefaultModal>
  );
});

export default HistoryModal;

const HistoryHeader: FC<{ uniqueId: number; }> = ({ uniqueId }) => {
  return (
    <h2 className={s.header}>
      Auction #{uniqueId} price history
    </h2>
  );
};

const HistoryList: FC<{ data: IHistoryItem[]; }> = ({ data }) => {
  const firstItem = data[0];

  const { rarity } = getRarity(firstItem.qlt);

  const rarityClass = classNames(
    s.rarity,
    sMods[rarity]
  );

  return (
    <div className={s.list}>
      <h3 className={s.title}>
        <img
          className={s.icon}
          src={`/images/${firstItem.itemId}.png`}
          alt={firstItem.itemName}
        />
        <span
          className={rarityClass}
        >{firstItem.ptn
          ? `${firstItem.itemName} | +${firstItem.ptn}`
          : firstItem.itemName
          }
        </span>
      </h3>
      <ul className={s.bonuses}>
        {firstItem.bonuses.map(bonus =>
          <li key={bonus} className={s.bonus}>{bonus}</li>
        )}
      </ul>
      <ul className={s.rates}>
        {data.map(rate =>
          <li className={s.rate}>
            <span>{rate.time}</span>
            <span>{rate.price} RUR</span>
          </li>
        )}
      </ul>
    </div>
  );
};
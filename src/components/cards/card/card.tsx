import classNames from "classnames";
import { FC, memo, useEffect, useState } from "react";

import ClockIcon from "@/components/svg-icons/clock-icon";
import { ICard } from "@/types/card";

import s from "./card.module.sass";
import HistoryModal from "./historyModal";
import { capitalize, formatPrice, getRarity } from "./utils";

interface CardProps {
  lot: ICard;
}

const Card: FC<CardProps> = memo(({ lot }) => {
  const [isNew, setIsNew] = useState(true);
  const [isOpenHistoryModal, setIsOpenHistoryModal] = useState(false);

  useEffect(() => {
    let timerId: number;
    if (isNew) {
      timerId = setInterval(() => setIsNew(false), 20);
    }

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const {
    uniqueId,
    itemId,
    name: itemName,
    ptn = 0,
    qlt,
    explored,
    charge,
    defaultBonusInfo,
    bonusInfo,
    cost,
    targetPrice,
    profitPercent,
  } = lot;

  const title = itemName + (ptn ? ` | +${ptn}` : '');
  const { rarity, percentQlt } = getRarity(qlt);

  const cardClass = classNames(
    'text-bg-dark ',
    s.card,
    {
      [s.card_new]: isNew,
      [s.card_amature]: !isNew,
    }
  );

  const titleClass = classNames(
    s.title,
    s[rarity],
  );

  const rarityClass = classNames(
    s.info,
    s[rarity],
  );

  const imgUrl = `/images/${itemId.toLowerCase()}.png`;

  return (
    <div
      className={cardClass}
      data-unique-id={uniqueId}
    >
      <div className={s.card__item}>
        <div className={s.header}>
          <img
            className={s.icon}
            src={imgUrl}
            alt={itemId}
          />
          <h5 className={titleClass}>{title}</h5>
        </div>
      </div>
      <div className={s.card__item}>
        <div className={rarityClass}>
          <div className={s.info__item}>
            <span>{capitalize(rarity)}</span>
            <span>{explored ? percentQlt : 'Not explored'}</span>
          </div>
        </div>
        <div className={s.info}>
          <div className={s.info__item}>
            <span className={s.label_gray}>Freshness</span>
            <span className={s.value}>lll</span>
          </div>
          <div className={s.info__item}>
            <span className={s.label_gray}>Charge</span>
            <span className={s.value}>{charge}%</span>
          </div>
          <div className={s.info__item}>
            <span className={s.label_gray}>Max Charge</span>
            <span className={s.value}>100%</span>
          </div>
        </div>
        <div className={s.info}>
          {defaultBonusInfo.defaultBonuses.map(({ bonusName, textMinAndMax }) => (
            <div className={s.info__item} key={bonusName}>
              <span className={s.label_gray}>{bonusName}</span>
              <span className={s.value_buff}>{textMinAndMax}</span>
            </div>
          ))}
          {bonusInfo && bonusInfo.map(bonus => (
            <div className={s.info__item} key={bonus}>
              <span className={s.label_gray}>{bonus}</span>
              <span className={s.value_buffBonus}>[Bonus]</span>
            </div>))
          }
        </div>
      </div>
      <div className={s.price}>
        <div className={s.card__item}>
          <div className={s.price__inner}>
            <div className={s.price__item}>
              <span className={s.label_gray}>Cost</span>
              <span className={s.price__value_cost}>{formatPrice(cost)} RUB</span>
            </div>
            <div className={s.price__item}>
              <span className={s.label_gray}>Target Price</span>
              <span className={s.price__value_target}>{formatPrice(targetPrice)} RUB</span>
            </div>
            <div className={s.price__item}>
              <button
                className={s.historyBtn}
                data-unique-id={uniqueId}
                onClick={() => setIsOpenHistoryModal(true)}
              >
                Profit
                {' '}
                <ClockIcon />
              </button>
              <span className={s.price__value_profit}>{profitPercent}%</span>
            </div>
          </div>
        </div>
      </div>
      {
        isOpenHistoryModal &&
        <HistoryModal
          onClose={() => setIsOpenHistoryModal(false)}
          uniqueId={uniqueId}
        />
      }
    </div>
  );
});

export default Card;
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

import { ICard } from "@/types/card";

import Card from "./card/card";
import s from "./cards.module.sass";

const containerClass = classNames(
  "py-1 px-4",
  s.cards
);

const innerClass = classNames(
  "d-flex flex-row",
  s.inner
);

/** Временная функция */
// const generateCards = (count: number) => {
//   const result: ReactNode[] = [];

//   for (let i = 0; i < count; i++) {
//     result.push(<div className="bg-dark mx-2 p-3 w-20" key={i}>Card {i + 1}</div>);
//   }

//   return result;
// };

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();

        scrollContainer.scrollLeft += event.deltaY;
      };

      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <Container
      className={containerClass}
    >
      <div
        ref={containerRef}
        className={innerClass}
      >
        {lots.map(lot => <Card key={lot.uniqueId} lot={lot} />)}
      </div>
    </Container>
  );
};

export default Cards;

const lots: ICard[] = [
  {
    "uniqueId": 1730811415951,
    "itemId": "gyq5",
    "name": "Spiral",
    "qlt": 0,
    "qltInfo": {
      "labelQlt": "Common",
      "labelPercentQlt": "0-100%"
    },
    "ptn": null,
    "defaultBonusInfo": {
      "ptnNumber": 0,
      "defaultBonuses": [
        {
          "bonusName": "Movement speed",
          "textMinAndMax": "[+0.8%; +1.6%]",
          "min": 0.8,
          "max": 1.6
        },
        {
          "bonusName": "Carry weight",
          "textMinAndMax": "[+3.5; +7]",
          "min": 3.5,
          "max": 7.0
        },
        {
          "bonusName": "Radiation",
          "textMinAndMax": "[+0.5; +1]",
          "min": 0.5,
          "max": 1.0
        }
      ]
    },
    "bonusInfo": null,
    "explored": true,
    "charge": 100,
    "cost": 48600,
    "targetPrice": 55859,
    "profit": 7259,
    "profitPercent": 14
  },
  {
    "uniqueId": 1730811414610,
    "itemId": "gyn0",
    "name": "Comet",
    "qlt": 2,
    "qltInfo": {
      "labelQlt": "Special",
      "labelPercentQlt": "110-120%"
    },
    "ptn": null,
    "defaultBonusInfo": {
      "ptnNumber": 0,
      "defaultBonuses": [
        {
          "bonusName": "Stamina",
          "textMinAndMax": "[+8.1%; +16.2%]",
          "min": 8.1,
          "max": 16.2
        },
        {
          "bonusName": "Movement speed",
          "textMinAndMax": "[+0.6%; +1.2%]",
          "min": 0.6,
          "max": 1.2
        },
        {
          "bonusName": "Temperature",
          "textMinAndMax": "[+0.75; +1.5]",
          "min": 0.75,
          "max": 1.5
        }
      ]
    },
    "bonusInfo": ['Staminaregeneration', 'Explosiondmg', 'Bulletdmg'],
    "explored": false,
    "charge": 100,
    "cost": 35000,
    "targetPrice": 49294,
    "profit": 14294,
    "profitPercent": 40
  }
];
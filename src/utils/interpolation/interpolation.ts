import { windowData } from '../../constants';
import { SystemFormType, WallFormType } from '../../types';

export const interpolation = (
  wallType: string,
  wallData: WallFormType,
  systemData: SystemFormType,
  windowType: string
) => {
  const {
    blockHeatConduction,
    concreteHeatConduction,
    hasSecondInsulation,
    insulationHeatConduction,
    insulationThickness,
    secondInsulationHeatConduction,
    secondInsulationThickness,
  } = wallData;

  const windowName = () => {
    if (systemData) {
      const { windowPosition, insulationPosition } = systemData;
      return windowPosition + insulationPosition;
    } else return 'nothing';
  };

  const windowWallValue = () => {
    if (wallType === 'frame') {
      return windowType === 'concrete' ? concreteHeatConduction : blockHeatConduction;
    } else if (wallType === 'monolith') {
      return concreteHeatConduction;
    } else {
      return blockHeatConduction;
    }
  };

  const insulationValue = hasSecondInsulation
    ? (insulationThickness * 0.001) / insulationHeatConduction +
      (secondInsulationThickness * 0.001) / secondInsulationHeatConduction
    : (insulationThickness * 0.001) / insulationHeatConduction;

  const calculation = (wallValue: number, itemName: string) => {
    const wallConduction = wallValue;

    const insulationBorder = () => {
      let insulation1: { l1: number; l2: number; l3: number; l4: number; l5: number } = {
        l1: 0,
        l2: 0,
        l3: 0,
        l4: 0,
        l5: 0,
      };
      let insulation2: { l1: number; l2: number; l3: number; l4: number; l5: number } = {
        l1: 0,
        l2: 0,
        l3: 0,
        l4: 0,
        l5: 0,
      };
      const heatItem = windowData.find((item) => item.name === itemName);
      if (heatItem) {
        if (0.7 < insulationValue && insulationValue < 1.5) {
          insulation1 = heatItem.r0;
          insulation2 = heatItem.r1;
        }
        if (1.5 < insulationValue && insulationValue < 3) {
          insulation1 = heatItem.r1;
          insulation2 = heatItem.r2;
        }
        if (3 < insulationValue && insulationValue < 6) {
          insulation1 = heatItem.r2;
          insulation2 = heatItem.r3;
        }
        if (6 < insulationValue && insulationValue < 8) {
          insulation1 = heatItem.r3;
          insulation2 = heatItem.r4;
        }
      }
      return { insulation1, insulation2 };
    };

    const wallBorder = () => {
      const { insulation1, insulation2 } = insulationBorder();

      if (0 < wallConduction && wallConduction <= 0.04) {
        return [insulation1.l1, insulation1.l2, insulation2.l1, insulation2.l2];
      }
      if (0.04 < wallConduction && wallConduction <= 0.2) {
        return [insulation1.l1, insulation1.l2, insulation2.l1, insulation2.l2];
      }
      if (0.2 < wallConduction && wallConduction <= 0.6) {
        return [insulation1.l2, insulation1.l3, insulation2.l2, insulation2.l3];
      }
      if (0.6 < wallConduction && wallConduction <= 1.8) {
        return [insulation1.l3, insulation1.l4, insulation2.l3, insulation2.l4];
      }
      if (1.8 < wallConduction && wallConduction <= 2.1) {
        return [insulation1.l4, insulation1.l5, insulation2.l4, insulation2.l5];
      } else return [0, 0, 0, 0];
    };

    const wallResult = wallBorder();

    const wallX1 = () => {
      if (0.04 < wallConduction && wallConduction <= 0.2) return 0.04;
      if (0.2 < wallConduction && wallConduction <= 0.6) return 0.2;
      if (0.6 < wallConduction && wallConduction <= 1.8) return 0.6;
      if (1.8 < wallConduction && wallConduction <= 2.1) return 1.8;
      else return 0;
    };
    const wallX2 = () => {
      if (0.04 < wallConduction && wallConduction <= 0.2) return 0.2;
      if (0.2 < wallConduction && wallConduction <= 0.6) return 0.6;
      if (0.6 < wallConduction && wallConduction <= 1.8) return 1.8;
      if (1.8 < wallConduction && wallConduction <= 2.1) return 2.1;
      else return 0;
    };

    const insulationX1 = () => {
      if (0.4 < insulationValue && insulationValue <= 1.5) return 0.4;
      if (1.5 < insulationValue && insulationValue <= 3) return 1.5;
      if (3 < insulationValue && insulationValue <= 6) return 3;
      if (6 < insulationValue && insulationValue <= 8) return 6;
      else return 0;
    };

    const insulationX2 = () => {
      if (0.4 < insulationValue && insulationValue <= 1.5) return 1.5;
      if (1.5 < insulationValue && insulationValue <= 3) return 3;
      if (3 < insulationValue && insulationValue <= 6) return 6;
      if (6 < insulationValue && insulationValue <= 8) return 8;
      else return 0;
    };

    const pre1 =
      wallResult[0] + ((wallConduction - wallX1()) * (wallResult[1] - wallResult[0])) / (wallX2() - wallX1());
    const pre2 =
      wallResult[2] + ((wallConduction - wallX1()) * (wallResult[3] - wallResult[2])) / (wallX2() - wallX1());

    const final = pre1 + ((insulationValue - insulationX1()) * (pre2 - pre1)) / (insulationX2() - insulationX1());

    return final;
  };

  const windowValue = calculation(windowWallValue(), windowName());

  return windowValue;
};

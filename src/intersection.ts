export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

// type TowayPlayer = {
//   thorwingSpeed: number;
//   battingAverage: number;
// };

type TowayPlayer = Pitcher1 & Batter1;

const OotaniShouehi: TowayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.226,
};

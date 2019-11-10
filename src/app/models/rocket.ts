export interface Rocket {
  id: number;
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: Diameter;
  engines: Engines;
  first_flight: string;
  first_stage: {
    burn_time_sec: number;
    engines: number;
    fuel_amout_tons: number;
    reusable: boolean;
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
  };
  flickr_images: Array<string>;
  height: Height;
  landing_legs: {
    material: string;
    number: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  payload_weights: Array<PayloadWeight>;
  rocket_id: number;
  rocket_name: string;
  second_stage: {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    payloads: {
      options_1: string;
      composite_fairing: {
        diameter: Diameter;
        heigth: Height;
      };
      reusable: boolean;
    };
    thrust: Thrust;
  };
  stages: number;
  success_rate_pct: number;
  wikipedia: string;
}

interface Diameter {
  meters: number;
  feet: number;
}

interface Height {
  meters: number;
  feet: number;
}

interface Engines {
  engine_loss_max: number;
  isp: {
    sea_level: number;
    vaccum: number;
  };
  layout: string;
  number: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrust;
  thrust_to_weight: number;
  thrust_vacuum: Thrust;
  type: string;
  version: string;
}

interface Thrust {
    kN: number;
    lbf: number;
}

interface PayloadWeight {
  id: number;
  name: string;
  kg: number;
  lb: number;
}

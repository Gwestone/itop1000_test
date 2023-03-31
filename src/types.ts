export interface Rates_t {
  USD?: number;
  EUR?: number;
  PLN?: number;
  CZK?: number;
}

export type Data = {
  [key: string]: {
    code: string;
    value: number;
  };
};

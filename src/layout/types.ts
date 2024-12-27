
export type modelType = {
  id?: number;
  code?: string;
  name?: string;
  routeName?: string;
  isShow?: number;
  icon?: string;
  moduleType?: number;
};

export type menuType = {
  id?: number;
  code?: string;
  name?: string;
  modelCode?: string;
  routeName?: string;
  isShow?: number;
  icon?: string;
  moduleType?: number;
  children?: menuType[];
};

export type tagType = {
  id?: number;
  code?: string;
  name?: string;
  modelCode?: string;
  routeName?: string;
  isShow?: number;
  icon?: string;
  fixed?: boolean;
  moduleType?: number;
  children?: menuType[];
};

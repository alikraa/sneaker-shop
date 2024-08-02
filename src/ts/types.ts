interface Item {
  data: {
    price: {
      item: {
        price: number;
      };
    };

    detail: {
      spuId: number;
      logoUrl: string;
      title: string;
    };

    brandRootInfo: {
      brandItemList: BrandItemList[];
    };

    sizeDto: {
      sizeInfo: {
        sizeTemplate: {
          list: SizeListItem[];
        };
      };
    };
  };
}

interface SizeListItem {
  sizeKey: string;
  sizeValue: string;
}

interface BrandItemList {
  brandName: string;
}

export type { Item };

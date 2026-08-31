export type DealType =
  | "Flash Sale"
  | "Seasonal"
  | "Clearance"
  | "Bundle"
  | "Coupon"
  | "Buy One Get One";

export type DiscountType = "Percentage" | "Fixed Amount";

export type CreatedDeal = {
  title: string;
  description: string;
  dealType: DealType;
  discountType: DiscountType;
  discountValue: number;
  promocode: string;
  usageLimit: number | null;
  perUserLimit: number | null;
  startsAt: string;
  endsAt: string;
  imageName: string;
  imagePreview: string;
};

export type Deal = {
  name: string;
  code: string;
  status: "ACTIVE" | "SCHEDULED";
  description: string;
  metricLabel: string;
  metric: string;
  target?: string;
  imagePerview?: string;
  dealType?: string;
};

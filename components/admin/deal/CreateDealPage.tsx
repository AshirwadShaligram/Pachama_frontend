"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CreatedDeal, DealType, DiscountType } from "@/types/deal";
import { error } from "console";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { ChevronLeft, ImagePlus } from "reicon-react";

type CreateDealPageProps = {
  onBack: () => void;
  onCreated: (deal: CreatedDeal) => void;
};

const dealTypes: DealType[] = [
  "Flash Sale",
  "Seasonal",
  "Clearance",
  "Bundle",
  "Coupon",
  "Buy One Get One",
];
const discountTypes: DiscountType[] = ["Percentage", "Fixed Amount"];

const CreateDealPage = ({ onBack, onCreated }: CreateDealPageProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dealType, setDealType] = useState<DealType>("Flash Sale");
  const [discountType, setDiscountType] = useState<DiscountType>("Percentage");
  const [discountValue, setDiscountValue] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [usageLimit, setUsageLimit] = useState("");
  const [perUserLimit, setPerUserLimit] = useState("");
  const [startsAt, setStartsAt] = useState("");
  const [endsAt, setEndsAt] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  // Handling Image selection
  const handleImageSelect = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, image: "Please select an image file" }));
    }
    setErrors((prev) => ({ ...prev, image: "" }));
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(false);
    handleImageSelect(event.dataTransfer.files[0]);
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!title.trim()) next.title = "Title is required";
    else if (title.length > 100)
      next.title = "Title must be 100 characters or less";
    if (description.length > 500)
      next.description = "Description must be 500 characters or less";
    if (!imageFile) next.image = "A deal image is required";
    const dv = parseFloat(discountValue);
    if (!discountValue || isNaN(dv) || dv <= 0)
      next.discountValue = "Discount value must be greater than 0";
    if (promoCode.length > 50)
      next.promoCode = "Promo code must be 50 characters or less";
    if (usageLimit) {
      const ul = parseInt(usageLimit, 10);
      if (isNaN(ul) || ul < 1)
        next.usageLimit = "Usage limit must be at least 1";
    }
    if (perUserLimit) {
      const pul = parseInt(perUserLimit, 10);
      if (isNaN(pul) || pul < 1)
        next.perUserLimit = "Per-user limit must be at least 1";
    }
    if (!startsAt) next.startsAt = "Start date is required";
    if (!endsAt) next.endsAt = "End date is required";
    if (startsAt && endsAt && new Date(endsAt) <= new Date(startsAt))
      next.endsAt = "End date must be after start date";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    setSubmitting(true);
    const dealData = {
      title: title.trim(),
      description: description.trim(),
      dealType,
      discountType,
      discountValue: parseFloat(discountValue),
      promocode: promoCode.trim(),
      usageLimit: usageLimit ? parseInt(usageLimit, 10) : null,
      perUserLimit: perUserLimit ? parseInt(perUserLimit, 10) : null,
      startsAt,
      endsAt,
      imageName: imageFile?.name ?? "",
      imagePreview,
    };

    console.log("========== CREATE DEAL ==========");
    console.log(dealData);
    console.log("=================================");

    onCreated(dealData);
  };

  return (
    <div className="h-full flex flex-col items-center border-l">
      <div className="w-full h-16 flex items-center border-b">
        <Button
          variant={"ghost"}
          onClick={onBack}
          className="flex-1 md:justify-start "
        >
          <ChevronLeft />
          <span>Back</span>
        </Button>

        <h1 className="font-bold flex-2">Create Deal</h1>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-5xl flex-1 p-6 md:p-8">
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Basic Information */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">Basic Information</h2>
              <p className="text-sm text-muted-foreground">
                Add the basic details of your deal.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Deal Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Deal Name</label>

                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Summer Sale"
                />

                {errors.title && (
                  <p className="text-xs text-destructive">{errors.title}</p>
                )}
              </div>

              {/* Deal Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Deal Type</label>

                <Select
                  value={dealType}
                  onValueChange={(value) => setDealType(value as DealType)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select deal type" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Flash Sale">Flash Sale</SelectItem>
                    <SelectItem value="Seasonal">Seasonal</SelectItem>
                    <SelectItem value="Clearance">Clearance</SelectItem>
                    <SelectItem value="Bundle">Bundle</SelectItem>
                    <SelectItem value="Coupon">Coupon</SelectItem>
                    <SelectItem value="Buy One Get One">
                      Buy One Get One
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Description</label>

                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your deal..."
                  className="min-h-28 resize-none"
                />

                {errors.description && (
                  <p className="text-xs text-destructive">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Deal Image */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">Deal Image</h2>
              <p className="text-sm text-muted-foreground">
                Upload an image to represent your deal.
              </p>
            </div>

            <div className="flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed bg-muted/20 transition-colors hover:bg-muted/40">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={(e) => handleImageSelect(e.target.files?.[0])}
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`flex min-h-48 cursor-pointer flex-col items-center justify-center transition-colors ${
                  dragOver ? "bg-muted/50" : "bg-muted/20 hover:bg-muted/40"
                }`}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Deal preview"
                    className="max-h-40 max-w-full rounded-md object-contain"
                  />
                ) : (
                  <>
                    <ImagePlus className="mb-3 size-8 text-muted-foreground" />

                    <p className="text-sm font-medium">
                      Click to upload an image
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      PNG, JPG and WEBP
                    </p>
                  </>
                )}

                {errors.image && (
                  <p className="text-xs text-destructive">{errors.image}</p>
                )}
              </div>
            </div>
          </section>

          {/* Discount */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">Discount</h2>
              <p className="text-sm text-muted-foreground">
                Configure the discount for the deal.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Discount value */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Discount Type</Label>

                <Select
                  value={discountType}
                  onValueChange={(value) =>
                    setDiscountType(value as DiscountType)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select discount type" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="percentage">Percentage</SelectItem>
                    <SelectItem value="fixed">Fixed Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Discount Value */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Discount Value</Label>

                <Input
                  type="number"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(e.target.value)}
                  placeholder="e.g. 20"
                  min={0}
                />

                {errors.discountValue && (
                  <p className="text-xs text-destructive">
                    {errors.discountValue}
                  </p>
                )}
              </div>

              {/* Promo code */}
              <div className="space-y-2">
                <Label htmlFor="promo" className="text-sm font-medium">
                  Promo Code
                </Label>
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="e.g. SUMMER20"
                  maxLength={50}
                />

                {errors.promoCode && (
                  <p className="text-sm text-destructive">{errors.promoCode}</p>
                )}
              </div>

              {/* Usage Limit */}
              <div className="space-y-2">
                <Label htmlFor="usageLimit" className="text-sm font-medium">
                  Usage Limit
                </Label>
                <Input
                  type="number"
                  value={usageLimit}
                  onChange={(e) => setUsageLimit(e.target.value)}
                  placeholder="e.g. 100"
                  min={1}
                />
                <p className="text-xs text-muted-foreground">
                  Maximum number of times this deal can be used.
                </p>

                {errors.usageLimit && (
                  <p className="text-sm text-destructive">
                    {errors.usageLimit}
                  </p>
                )}
              </div>

              {/* Per user limit */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold">Per User Limit</Label>
                <Input
                  type="number"
                  value={perUserLimit}
                  onChange={(e) => setPerUserLimit(e.target.value)}
                  placeholder="e.g. 2"
                  min={1}
                />
                <p className="text-xs text-muted-foreground">
                  Maximum number of times one user can use this deal.
                </p>

                {errors.perUserLimit && (
                  <p className="text-sm text-destructive">
                    {errors.perUserLimit}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Schedule */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">Schedule</h2>
              <p className="text-sm text-muted-foreground">
                Set when your deal starts and ends
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Start Date</Label>
                <Input
                  type="date"
                  value={startsAt}
                  onChange={(e) => setStartsAt(e.target.value)}
                />

                {errors.startsAt && (
                  <p className="text-xs text-destructive">{errors.startsAt}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">End Date</Label>
                <Input
                  type="date"
                  value={endsAt}
                  onChange={(e) => setEndsAt(e.target.value)}
                />

                {errors.endsAt && (
                  <p className="text-xs text-destructive">{errors.endsAt}</p>
                )}
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t pt-6">
            <Button type="button" variant="outline" onClick={onBack}>
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Creating..." : "Create Deal"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDealPage;

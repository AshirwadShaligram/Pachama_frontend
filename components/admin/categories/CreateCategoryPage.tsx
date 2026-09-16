"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowLeft, Check, ImagePlus, Loader } from "reicon-react";
import CategoryIconPicker from "./category-icon-picker";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCategoryService,
  getCategoriesService,
} from "@/services/categoryService";
import { CreateCategoryRequest } from "@/types/CategoryTypes";
import { toast } from "sonner";
import { Controller, useForm } from "react-hook-form";

type CreateCategoryPageProp = {
  onBack: () => void;
};

type CategoryFormValues = {
  title: string;
  description: string;
  logo: string;
};

const CreateCategoryPage = ({ onBack }: CreateCategoryPageProp) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [imageError, setImageError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesService,
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    defaultValues: { title: "", description: "", logo: "" },
    mode: "onSubmit",
  });

  const handleImageSelect = (file: File | undefined) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setImageError("Please select an image file");
      return;
    }

    setImageError("");
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

  const createCategoryMutation = useMutation({
    mutationFn: createCategoryService,
    onSuccess: () => {
      toast.success("Category created successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      router.push("/admin/categories");
      router.refresh();
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Failed to create category";

      toast.error(message);
    },
  });

  const onSubmit = (values: CategoryFormValues) => {
    if (!imageFile) {
      setImageError("A category image is required");
      return;
    }

    const payload: CreateCategoryRequest = {
      title: values.title.trim(),
      description: values.description?.trim() ?? "",
      logo: values.logo,
      image: imageFile,
    } as CreateCategoryRequest;

    // console.log(payload);

    createCategoryMutation.mutate(payload);
  };

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 scrollbar-none">
      {/* Header */}
      <div className="flex items-center gap-4 justify-center">
        <Button type="button" variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft size={20} />
        </Button>

        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Create Category
          </h1>
          <p className="text-sm text-muted-foreground">
            Add a new product category to Pachama
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-8 p-2" onSubmit={handleSubmit(onSubmit)}>
        <section className="space-y-5">
          <div>
            <h2 className="text-lg font-semibold">Category Information</h2>
            <p className="text-sm text-muted-foreground">
              Add the basic details of the category
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Category Name */}
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="name">
                Category Name
              </Label>
              <Input
                id="name"
                placeholder="e.g. Console"
                {...register("title", {
                  required: "Category name is required",
                  maxLength: {
                    value: 100,
                    message: "Category name must be 100 characters or less",
                  },
                  validate: (val) =>
                    !categories.some(
                      (c) =>
                        c.title.trim().toLowerCase() ===
                        val.trim().toLowerCase(),
                    ) || "A category with this name already exists",
                })}
              />

              {errors.title && (
                <p className="text-xs text-destructive">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Category Description */}
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="desc">
                Category Description
              </Label>
              <Textarea
                id="desc"
                placeholder="Describe your category..."
                className="min-h-28 resize-none"
                {...register("description", {
                  maxLength: {
                    value: 500,
                    message: "Description must be 500 characters or less",
                  },
                })}
              />

              {errors.description && (
                <p className="text-xs text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Category Image */}
        <section className="space-y-5">
          <div>
            <h2 className="text-lg font-semibold">Category Image</h2>
            <p className="text-sm text-muted-foreground">
              Upload an image to represent category
            </p>
          </div>

          <div className="flex min-h-48 flex-col items-center justify-center rounded-lg border border-dashed bg-muted/20 transition-colors">
            <Input
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
              className={`flex min-h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg transition-colors
                ${dragOver ? "bg-muted/50" : "bg-muted/20 hover:bg-muted/40"}`}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Category preview"
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
            </div>

            {imagePreview && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="mt-2"
                onClick={removeImage}
              >
                Remove image
              </Button>
            )}

            {imageError && (
              <p className="text-xs text-destructive">{imageError}</p>
            )}
          </div>
        </section>

        {/* Category Icon */}
        <section className="space-y-5">
          <div>
            <h2 className="text-lg font-semibold">Category Icon</h2>
            <p className="text-sm text-muted-foreground">
              Pick an icon to represent this category
            </p>
          </div>
          <div className="space-y-2">
            <Controller
              control={control}
              name="logo"
              rules={{ required: "Please select an icon" }}
              render={({ field, fieldState }) => (
                <CategoryIconPicker
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
        </section>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            disabled={createCategoryMutation.isPending}
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={createCategoryMutation.isPending}>
            {createCategoryMutation.isPending ? (
              <>
                <Loader size={18} className="animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Check size={18} /> Create Category
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategoryPage;

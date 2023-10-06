import Joi from "joi";

export const createCategorySchema = Joi.object({
  name: Joi.string().min(2).max(15).required(),
});

export const getCategorySchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

export const updateCategorySchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
  name: Joi.string().min(2).max(15).required(),
});
export const deleteCategorySchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

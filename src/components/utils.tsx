import { SelectedCoordType } from "../types";

export const removeText = (text: string) => text.replace(/\D+/g, "");

export const isValidLocation = (center: SelectedCoordType) =>
  !isNaN(center?.lat as number) && !isNaN(center?.lng as number);

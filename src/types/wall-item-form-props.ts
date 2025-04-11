export type WallItemFormProps = {
  title: string;
  subtitle?: string;
  material: string;
  nameOptions?: { name: string; value: string }[];
  densityOptions?: { [key: string]: { name: string; value: string }[] };
};

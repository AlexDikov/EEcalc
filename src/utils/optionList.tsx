import { Option } from '../types/option';

export const optionList = (array: Option[]) =>
  array.map((item) => (
    <option key={item.value} value={item.value}>
      {item.name}
    </option>
  ));

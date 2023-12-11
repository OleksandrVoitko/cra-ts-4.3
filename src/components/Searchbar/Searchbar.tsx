import { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  ButtonSearchForm,
  FormSearchForm,
  HeaderSearchbar,
  Input,
} from "./Searchbar.styled";
import { ImSearch } from "react-icons/im";

interface SearchbarProps {
  handleSearch: (newSearchQuery: string) => void;
}

export const Searchbar: FC<SearchbarProps> = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }: ChangeEvent) => {
    setValue((target as HTMLInputElement).value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSearch(value);
    setValue("");
  };

  return (
    <HeaderSearchbar>
      <FormSearchForm onSubmit={onSubmit}>
        <ButtonSearchForm type="submit">
          <ImSearch
            style={{ width: 20, height: 20, marginLeft: 4, marginTop: 4 }}
          />
        </ButtonSearchForm>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={value}
        />
      </FormSearchForm>
    </HeaderSearchbar>
  );
};

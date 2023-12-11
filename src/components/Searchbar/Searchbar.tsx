import { Component, useState } from "react";
import {
  ButtonSearchForm,
  FormSearchForm,
  HeaderSearchbar,
  Input,
} from "./Searchbar.styled";
import { ImSearch } from "react-icons/im";

export const Searchbar = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const onSubmit = (e) => {
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

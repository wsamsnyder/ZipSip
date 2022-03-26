import React, { useState } from "react";
import {
  Form,
  FormGroup,
  TextInput,
  ActionGroup,
  Button,
} from "@patternfly/react-core";
import styles from "./Search.module.css";

interface Params {
  handleSearch: (val: string) => void;
}

const Search = ({ handleSearch }: Params) => {
  const [isOpen, setIsOpen] = useState(true);
  const [zipCode, setZipCode] = useState("");

  const removeText = (text: string) => text.replace(/\D+/g, "");

  const handleOk = () => {
    handleSearch(zipCode);
    setIsOpen(false);
  };

  return (
    <div className={styles.search}>
      {isOpen ? (
        <Form className={styles.form}>
          <FormGroup label="Zip Code" isRequired fieldId="zipCode">
            <TextInput
              type="text"
              id="zipCode"
              name="zipCode"
              maxLength={5}
              value={zipCode}
              onChange={(val) => setZipCode(removeText(val))}
            />
          </FormGroup>
          <ActionGroup>
            <Button variant="primary" onClick={handleOk}>
              Search
            </Button>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </ActionGroup>
        </Form>
      ) : (
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Search
        </Button>
      )}
    </div>
  );
};

export default Search;

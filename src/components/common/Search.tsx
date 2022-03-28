import { useState } from "react";
import {
  Form,
  FormGroup,
  TextInput,
  ActionGroup,
  Button,
} from "@patternfly/react-core";

import { removeText } from "../utils";

import styles from "./Search.module.css";

interface Params {
  zipCode: string;
  setZipCode: (val: string) => void;
  handleSearch: () => void;
  handleOpen: () => void;
  canCollapse?: boolean;
}

const Search = ({
  zipCode,
  setZipCode,
  handleSearch,
  handleOpen: handleOpenProp,
  canCollapse = false,
}: Params) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    handleOpenProp();
    setIsOpen(true);
  };

  return (
    <div className={styles.search}>
      {isOpen ? (
        <Form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
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
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
            {canCollapse && (
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            )}
          </ActionGroup>
        </Form>
      ) : (
        <Button variant="primary" onClick={() => handleOpen()}>
          Search
        </Button>
      )}
    </div>
  );
};

export default Search;

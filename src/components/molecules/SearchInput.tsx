import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import "./styles/searchinput.scss";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchInput() {
  return (
    <InputGroup size="md">
      <Input pr="4.5rem" placeholder="Procure" />
      <InputRightElement className="justify__end" width="4.5rem">
        <Button h="100%" size="sm">
          <SearchIcon></SearchIcon>
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

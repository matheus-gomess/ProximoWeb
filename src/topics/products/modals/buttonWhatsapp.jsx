import { Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function ButtonWhatsapp({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Button
        as="a"
        color="white"
        target="_blank"
        rel="noopener noreferrer"
        backgroundColor="green"
        _hover={{ backgroundColor: "#006900" }}
        leftIcon={<FaWhatsapp />}
        mt={4}
      >
        Clique para conversar
      </Button>
    </a>
  );
}

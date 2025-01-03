import { Container, Text, useColorMode } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";
import { toast } from "react-toastify";
import ChoosingTheme from "../../../components/choosingTheme";

export default function InfoHeader() {
  const phoneNumber = "+55 51 98036-3636";
  const { colorMode } = useColorMode();

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast(<Text fontWeight="bold">Número copiado:<br/> {phoneNumber}</Text>);
  };
  return (
    <Container
      minWidth="100%"
      bgColor={colorMode === "dark" ? "#0a0a0a" : "#f5f5f5"}
      height="5vh"
      color="#969696"
      display="flex"
      alignItems="center"
      fontWeight="400"
      fontSize="13px"
      id="introduction"
    >
      <Container display="flex" minWidth="fit-content">
        <Container display="flex" alignItems="center" minWidth="fit-content">
          <MdOutlineWatchLater size={20} />
          <Text marginLeft="7px">Seg - Sex 12:00 - 20:00</Text>
        </Container>
        <Container
          display="flex"
          alignItems="center"
          minWidth="fit-content"
          cursor="pointer"
          onClick={handleCopy}
        >
          <PiPhoneCallLight size={20} />
          <Text marginLeft="7px">{phoneNumber}</Text>
        </Container>
        <Container display="flex" alignItems="center" minWidth="fit-content">
          <HiOutlineLocationMarker size={20} />
          <Text marginLeft="7px">Porto Alegre, RS</Text>
        </Container>
      </Container>
      <Container
        display="flex"
        gap="20px"
        maxWidth="8%"
        alignItems="center"
        justifyContent="center"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/5551980363636?text=Quero um site para impulsionar o meu negócio!"
        >
          <FaWhatsapp
            size={20}
            color={colorMode === "dark" ? "white" : "black"}
            style={{ transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "green")}
            onMouseOut={(e) =>
              (e.currentTarget.style.color =
                colorMode === "dark" ? "white" : "black")
            }
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:matheusdrgomes@gmail.com"
        >
          <MdEmail
            size={20}
            color={colorMode === "dark" ? "white" : "black"}
            style={{ transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "blue")}
            onMouseOut={(e) =>
              (e.currentTarget.style.color =
                colorMode === "dark" ? "white" : "black")
            }
          />
        </a>
      </Container>
      <ChoosingTheme color={colorMode === "dark" ? "white" : "black"} />
    </Container>
  );
}

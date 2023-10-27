import {
  Alert,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  TagLabel,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api";

interface IProps {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ setLogged }: IProps) => {
  const [tokenbot, setTokenBot] = useState<string>()
  const [chatid, setChatId] = useState<string>()
  const [schedule, setSchedule] = useState<string>()
  const [message, setMessage] = useState<string>()

  const sendDatos = async () => {
    try {
      await Api.post("telegram/send", {tokenbot , chatid , schedule , message})
      alert("Mensagem programada !")
    } catch (error) {
      alert("Erro ao programar mensagem !")
    }
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
      <Flex
        border={"1px solid black"}
        width={"60rem"}
        height={"40rem"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"center"}
        borderRadius={"1rem"}
        margin={"auto"}
        backgroundColor={"white"}
        boxShadow={"1rem 1rem 3rem"}
      >
        <h1>Programar mensagem Telegram</h1>

        <FormControl display={"flex"} flexDirection={"column"}>
          <label>Token Bot:</label>
          <Input
            id="token-bot"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
            gap={"1rem"}
            borderRadius={"0.4rem"}
            onChange={(e)=>setTokenBot(e.target.value)}
          ></Input>
        </FormControl>

        <FormControl display={"flex"} flexDirection={"column"}>
          <label>Chat Id:</label>
          <Input
            id="chat-id"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
            gap={"1rem"}
            borderRadius={"0.4rem"}
            onChange={(e)=>setChatId(e.target.value)}
          ></Input>
        </FormControl>

        <FormControl display={"flex"} flexDirection={"column"}>
          <label>Data e hora de envio:</label>
          <Input
            id="date-time"
            type="datetime-local"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
            gap={"1rem"}
            borderRadius={"0.4rem"}
            onChange={(e)=>setSchedule(e.target.value)}
          ></Input>
        </FormControl>

        <FormControl display={"flex"} flexDirection={"column"}>
          <label>Mensagem:</label>
          <Textarea
            id="mensagem"
            width={"48rem"}
            height={"3rem"}
            padding={"0.5rem"}
            gap={"1rem"}
            borderRadius={"0.4rem"}
            onChange={(e)=>setMessage(e.target.value)}
          ></Textarea>
        </FormControl>

        <Box
          borderStyle={"dotted"}
          width={"80%"}
          height={"6rem"}
          padding={"0.5rem"}
          borderRadius={"1rem"}
          fontSize={"2rem"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <text>Clique ou arraste para adicionar arquivos</text>
        </Box>

        <Box display={"flex"} justifyContent={"flex-start"} width={"80%"}>
          <span>Imagens selecionadas:</span>
        </Box>

        <Button
          id="submit"
          cursor={"pointer"}
          padding={"1.5rem 2.5rem"}
          borderRadius={"1.3rem"}
          fontSize={"1.3rem"}
          backgroundColor={"#00a2fF"}
          color={"white"}
          border={"none"}
          fontWeight={"600"}
          transition={"300ms linear"}
          onClick={sendDatos}
        >
          Programar mensagem
        </Button>
      </Flex>
    </>
  );
};

export default Home;

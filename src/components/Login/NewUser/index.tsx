import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import ImageUpload from "../ImageUpload";
import { useState } from "react";
import Api from "../../../Api";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const [picture, setPicture] = useState<[] | string[]>([]);
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const navigate = useNavigate();

  const sendDatos = async () => {
    try {
      if (password !== confirmPassword) throw Error("As senhas não são iguais");
      else {
        await Api.post("/user", {
          picture: picture[0],
          name,
          password,
          email,
        });
        alert("Usuário cadastrado !");
        navigate("/");
      }
    } catch (error) {
      alert("Error ao cadastrar usuário!" + error.message);
    }
  };

  return (
    <Flex
      border={"1px solid black"}
      width={"60rem"}
      minHeight={"40rem"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"1rem"}
      justifyContent={"center"}
      borderRadius={"2rem"}
      margin={"auto"}
      backgroundColor={"white"}
      color={"black"}
      boxShadow={"1rem 1rem 2rem 0rem"}
    >
      <h1 style={{ color: "black" }}>Cadastrar Novo Usúario</h1>

      <FormControl>
        <FormLabel fontWeight={700}>Nome:</FormLabel>
        <Input
          id="name"
          type="text"
          width={"48rem"}
          height={"1rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={700}>E-mail:</FormLabel>
        <Input
          id="email"
          type="email"
          width={"48rem"}
          height={"1rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={700}>Senha:</FormLabel>
        <Input
          id="password"
          type="password"
          width={"48rem"}
          height={"1rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={700}>Confirmar Senha:</FormLabel>
        <Input
          id="confirmPassword"
          type="password"
          width={"48rem"}
          height={"1rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        ></Input>
      </FormControl>

      <ImageUpload images={picture} setImages={setPicture} maxImages={1} />

      <Button
        padding={"1.5rem 2.3rem"}
        borderRadius={"1.3rem"}
        fontSize={"1.3rem"}
        fontWeight={"600"}
        backgroundColor={"#00a2ff"}
        color={"white"}
        border={"none"}
        cursor={"pointer"}
        transition={"400ms linear"}
        _hover={{
          color: "#00a2ff",
          border: "1px solid",
          background: "white",
        }}
        marginBottom={"2rem"}
        onClick={sendDatos}
      >
        Enviar
      </Button>
    </Flex>
  );
};

export default NewUser;

import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

const Login = (): JSX.Element => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        margin={"auto"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        borderRadius={"1rem"}
        width={"20%"}
        justifyContent={"center"}
        height={"37%"}
        padding={"2rem"}
        boxShadow={"1rem 1rem 3rem 0"}
      >
        <Text fontSize="2rem" fontWeight="bold" mb={4}>
          Login
        </Text>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Seu email" padding={"0.6rem"} width={"20rem"} borderRadius={"0.6rem"}/>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" placeholder="Sua senha" padding={"0.6rem"} width={"20rem"} borderRadius={"0.6rem"}/>
        </FormControl>

        <Button mt={4} colorScheme="teal" width="full" padding={"0.7rem 4rem"} borderRadius={"0.6rem"}>
          Entrar
        </Button>

        <Text mt={2}>
          <Link color="teal.500" href="#">
            Esqueceu a senha?
          </Link>
        </Text>

        <Text mt={2}>
          Não possuí uma conta?{" "}
          <Link color="teal.500" href="#">
            Criar Conta
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Login;

import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Text } from '@chakra-ui/react'; 

const Landing = () => {
  const data = useSelector((state) => state.registration);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Text fontSize="xl" fontWeight="bold">
        First Name: {data.firstName.firstName}
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        Last Name: {data.lastName.lastName}
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        Email: {data.email.email}
      </Text>
    </Flex>
  );
};

export default Landing;

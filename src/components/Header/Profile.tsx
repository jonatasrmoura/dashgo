import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jonatas Rosa Moura</Text>
          <Text color="gray.300" fontSize="small">
            jonatas.rmoura@outlook.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Jonatas Rosa Moura" src="https://github.com/jonatasrmoura.png" />
    </Flex>
  );
}

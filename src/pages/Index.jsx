import { Box, Flex, Input, Button, Text, VStack, HStack, Avatar, IconButton } from "@chakra-ui/react";
import { FaPaperPlane, FaUserCircle, FaSmile } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg="gray.100">
      <Box bg="white" w="400px" boxShadow="md" borderRadius="lg">
        <Flex alignItems="center" bg="teal.500" p={4} borderRadius="lg" borderBottomRadius="none">
          <Avatar icon={<FaUserCircle />} bg="teal.200" />
          <Text ml={3} fontWeight="bold" fontSize="lg" color="white">
            Chat App
          </Text>
        </Flex>
        <VStack spacing={4} p={4} overflowY="auto" maxHeight="500px">
          <HStack alignSelf="flex-start">
            <Avatar size="sm" icon={<FaUserCircle />} bg="teal.200" />
            <Box p={3} bg="gray.200" borderRadius="lg">
              <Text>Hello! How are you?</Text>
            </Box>
          </HStack>
          <HStack alignSelf="flex-end">
            <Box p={3} bg="teal.300" borderRadius="lg">
              <Text color="white">I'm fine, thanks! And you?</Text>
            </Box>
            <Avatar size="sm" icon={<FaUserCircle />} bg="teal.200" />
          </HStack>
          {/* More messages */}
        </VStack>
        <HStack p={3}>
          <Input placeholder="Type a message" />
          <IconButton icon={<FaSmile />} variant="ghost" aria-label="Add emoji" />
          <Button rightIcon={<FaPaperPlane />} colorScheme="teal">
            Send
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Index;

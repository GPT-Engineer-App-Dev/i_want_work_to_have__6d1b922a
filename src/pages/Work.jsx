import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const Work = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Our Work
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box>
          <Image src="https://via.placeholder.com/300" alt="Video Thumbnail 1" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300" alt="Video Thumbnail 2" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300" alt="Video Thumbnail 3" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300" alt="Video Thumbnail 4" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300" alt="Video Thumbnail 5" />
        </Box>
        <Box>
          <Image src="https://via.placeholder.com/300" alt="Video Thumbnail 6" />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Work;

import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg="red" p={3} mb={6} alignSelf={'center'}>
        Hello, I&pos;m a fullstack developer based in Amsterdam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Hamilton Posada
          </Heading>
          <p>Digital Craftzman (Artis / Developer / Designer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page

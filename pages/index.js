import NextLink from 'next/link'
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
// import { IoLogoInstagram, IoLogoTwitter, IoLogoGitbub } from 'react-icons/io'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        alignSelf={'center'}
      >
        Hello, I&pos;m a fullstack developer based in Amsterdam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Hamilton Posada
          </Heading>
          <p>Digital Craftzman (Artis / Developer / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/hamilton.jpg"
              alt="Profile image of Hamilton Posada"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hamilton is a Full-stack Developer based in Amsterdam, where
          innovation and creativity meet the art of coding. Currenthy a student
          at Bit Academy, he is honning his skills to master the art of turning
          ideas into digital realities. With a focus on user experience and
          functional design, every project is a journey to balance aesthetics
          and technology{''}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Pereira, Colombia
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear> Move to Spain, Sevilla to study architecture
          and design
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear> Move to Amsterdam, Netherlands to
          study at Bit Academy, a coding school for Full-stack Developer,
          specializing in 3D and design
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">I 🩶 </Heading>
        <BioSection>
          llasdkflk
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page

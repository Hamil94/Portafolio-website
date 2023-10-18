import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWebshop from '../public/works/admin.png'
import thumbbatatabit from '../public/works/desktop.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} spacing={6}>
        <Section>
          <WorkGridItem id="admin" title="Admin" thumbnail={thumbWebshop}>
            Yard Sales is a webshop application that allows users to buy and
            sell items. It is built with React, Redux, Node.js, Express,
            MongoDB, and Firebase.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="batatabit"
            title="Batatabit"
            thumbnail={thumbbatatabit}
          >
            Batatabit is a responsive website that provides real-time
            information about cryptocurrencies. The website is designed a
            Mobile-First approach, ensuring it looks and functions seamlessly on
            various devices, including smartphones, tablets, and desktops.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works

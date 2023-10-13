import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import PropTypes from 'prop-types' // For prop validation

// Create a motion div that also accepts chakra props
const MotionDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({
  children,
  delay = 0,
  initial = { y: 10, opacity: 0 },
  animate = { y: 0, opacity: 1 },
  transition = { duration: 0.8 }
}) => (
  <MotionDiv
    initial={initial}
    animate={animate}
    transition={{ ...transition, delay }}
  >
    {children}
  </MotionDiv>
)

// Prop validation for better development experience and error handling
Section.prototype = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object
}

export default Section

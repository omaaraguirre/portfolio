import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { FaChevronDown } from 'react-icons/fa'
import PropTypes from 'prop-types'

const ProjectDescription = ({ title, description }) => {
  return (
    <Accordion sx={
      {
        backgroundColor: '#18181B',
        color: '#fff',
        width: '100%',
        paddingX: '10px'
      }
    }
    >
      <AccordionSummary
        expandIcon={<FaChevronDown className='text-white' />}
      >
        <h4 className='text-xl font-medium flex-1 text-center'>{title}</h4>
      </AccordionSummary>
      <AccordionDetails className='flex flex-col gap-5'>
        {
          description.map((paragraph, index) =>
            <p key={index} className='opacity-60'>
              {paragraph}
            </p>
          )
        }
      </AccordionDetails>
    </Accordion>
  )
}

ProjectDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array
}

export default ProjectDescription

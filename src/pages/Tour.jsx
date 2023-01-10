import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import QuiltedImageList from '../components/ImageCollage'
import SimpleAccordion from '../components/Accordian'

const Tour = () => {
    return (
        <Container sx={{width: 900}}>
            <Typography variant='h3' component='h1' marginTop={3}>
                Explore the World
            </Typography>
            <Box marginTop={3} sx={{display: "flex"}} >
                <img src="https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg" alt='alt' height={325} />
                <QuiltedImageList />
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant='paragraph' component='p' marginTop={3}>
                    Quis sint magna dolore labore ad enim incididunt et do dolore reprehenderit id. Culpa aliqua qui cillum ullamco mollit aute nulla consequat. Et reprehenderit dolore voluptate amet. Sit Lorem aliqua eu ut officia consectetur tempor officia ea enim ullamco. Laborum exercitation Lorem eiusmod non do exercitation. Occaecat velit ullamco dolore laborum aute excepteur ex deserunt do.
                </Typography>
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    Frequently Asked Questions
                </Typography>
                <SimpleAccordion />
            </Box>
        </Container>
    )
}

export default Tour
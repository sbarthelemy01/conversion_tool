import React, {useContext} from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "./Size.css";


//separate charts for top, bottoms, and shoes
//separate into women, men, kids

//Tops: USA, MEX, UK, IT, BR
//Bottoms: US, CA, UK, EUR, AU	MX, CN, FR
//Shoes: US, UK, EUR, CM


//Accordion component help: https://mui.com/material-ui/react-accordion/

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
	  borderBottom: 0,
	},
	'&::before': {
	  display: 'none',
	},
}));
  
const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
	  {...props}
	/>
  ))(({ theme }) => ({
	backgroundColor:
	  theme.palette.mode === 'dark'
		? 'rgb(255, 255, 255)' //white
		: 'rgb(119, 136, 153)', //gray
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
	  transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
	  marginLeft: theme.spacing(1),
	},
}));
  
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
  
export default function Size() {
	const [expanded, setExpanded] = React.useState('panel');
  
	const handleChange = (panel) => (event, newExpanded) => {
	  setExpanded(newExpanded ? panel : false);
	};
  


//const Size = () => {
	return (
		<div className="rect">
			<h1>Size</h1>

			<br/>
			<br/>
			<div className="options">
				<Accordion id="panels" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography>
						<button id="buttons">Tops</button>
					</Typography>
					</AccordionSummary>
					<AccordionDetails>

						<Stack spacing={12} direction="row" id="categories">
							<Button variant="outlined">Women</Button>
							<Button variant="outlined">Men</Button>
							<Button variant="outlined">Kids</Button>
						</Stack>

					</AccordionDetails>
				</Accordion>

				<br/>
				<Accordion id="panels" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
					<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography>
						<button id="buttons">Bottoms</button>
					</Typography>
					</AccordionSummary>
					<AccordionDetails>
					
						<Stack spacing={12} direction="row" id="categories">
							<Button variant="outlined">Women</Button>
							<Button variant="outlined">Men</Button>
							<Button variant="outlined">Kids</Button>
						</Stack>
					
					</AccordionDetails>
				</Accordion>

				<br/>
				<Accordion id="panels" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
					<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography>      
						<button id="buttons">Shoes</button>
					</Typography>
					</AccordionSummary>
					<AccordionDetails>

						<Stack spacing={12} direction="row" id="categories">
							<Button variant="outlined">Women</Button>
							<Button variant="outlined">Men</Button>
							<Button variant="outlined">Kids</Button>
						</Stack>
						
					</AccordionDetails>
				</Accordion>

				<br/>
    		</div>
			

			


		</div>
	);
};

//export default Size;

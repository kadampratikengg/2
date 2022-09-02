import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const MyCollection = [
{
	imgPath:
"https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg",
},
{
	imgPath:
"https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
},
{
	imgPath:
"https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
},
{
	imgPath:
"https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg",
},
{
	imgPath:
"https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
},
{
	imgPath:
"https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
},
];

const App = () => {
const CollectionSize = MyCollection.length;
const theme = useTheme();
const [index, setActiveStep] = React.useState(0);

const goToNextPicture = () => {
	setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

return (
	<div>
	
	<div>
		<Paper>
		<Typography>{MyCollection[index].label}</Typography>
		</Paper>
		<img
		src={MyCollection[index].imgPath}
		style={{
			height: 600,
			width: "100%",
      
		}}
		alt={MyCollection[index].label}
		/>
		<MobileStepper
		variant="text"
		position="static"
		index={index}
		steps={CollectionSize}
		nextButton={
			<Button
			size="small"
			onClick={goToNextPicture}
			disabled={index === CollectionSize - 1}
			>
			Next
			{theme.direction !== "rtl" ? (
				<KeyboardArrowRight />
			) : (
				<KeyboardArrowLeft />
			)}
			</Button>
		}
		/>
	</div>
	</div>
);
};

export default App;

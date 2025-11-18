let currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);
let date1 = new Date("11/1/2025");
let date2 = new Date("11/2/2025");
let date3 = new Date("11/3/2025");
let date4 = new Date("11/4/2025");
let date5 = new Date("11/5/2025");
let date6 = new Date("11/6/2025");
let date7 = new Date("11/7/2025");
let date8 = new Date("11/8/2025");
let date9 = new Date("11/9/2025");
let date10 = new Date("11/10/2025");
let date11 = new Date("11/11/2025");
let date12 = new Date("11/12/2025");
let date13 = new Date("11/13/2025");
let date14 = new Date("11/14/2025");
let date15 = new Date("11/15/2025");
let date16 = new Date("11/16/2025");
let date17 = new Date("11/17/2025");
let date18 = new Date("11/18/2025");
let date19 = new Date("11/19/2025");
let date20 = new Date("11/20/2025");
let date21 = new Date("11/21/2025");
let date22 = new Date("11/22/2025");
let date23 = new Date("11/23/2025");
let date24 = new Date("11/24/2025");
let date25 = new Date("11/25/2025");

// Dictionary of "date" => "present id"
const dateIdMap = {
	"#present1": date1,
	"#present2": date2,
	"#present3": date3,
	"#present4": date4,
	"#present5": date5,
	"#present6": date6,
	"#present7": date7,
	"#present8": date8,
	"#present9": date9,
	"#present10": date10,
	"#present11": date11,
	"#present12": date12,
	"#present13": date13,
	"#present14": date14,
	"#present15": date15,
	"#present16": date16,
	"#present17": date17,
	"#present18": date18,
	"#present19": date19,
	"#present20": date20,
	"#present21": date21,
	"#present22": date22,
	"#present23": date23,
	"#present24": date24,
	"#present25": date25
};

// On page load, open all tiles whose dates are before today
// Show lock icon over tiles later than today
// Remove lock icon for today's tile, but do not open
Object.entries(dateIdMap).forEach(([doorID, dateVar]) => {
	const doorElement = document.querySelector(doorID);
	if(!doorElement) return;

	const lockImage = doorElement.querySelector('.lock-image');

	if(dateVar < currentDate)
	{
		doorElement.classList.add('opened');
		if(lockImage) lockImage.style.display = 'none';
	}
	else if(dateVar.getTime() === currentDate.getTime())
	{
		if(lockImage) lockImage.style.display = 'none';

		doorElement.addEventListener('click', () => {
			doorElement.classList.add('opened');
		});
	}
	else
	{
		doorElement.addEventListener('click', () => {
			alert("Come back later to see another Simba picture!");
		});
	}
});

// On click of a tile flip it if the date is today
// Otherwise, notify user that they have to wait until the date

// Loop through each date, apply the proper
// showing/hiding/enabling/disabling/opening/closing based on today's date

// const presents = document.querySelectorAll('.door');

// presents.forEach(day => {
// 	day.addEventListener('click', () => {
// 		day.classList.add('opened');
// 	});
// });